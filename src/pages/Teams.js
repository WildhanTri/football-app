
import { faInfoCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SoccerService from "../services/SoccerService";
import { CHANGE_SELECTED_TEAM, SET_PLAYERS } from "../stores/actions";
import { windowScrollToTop } from "../utils/util";

const Team = () => {

  var teams = useSelector(state => state.reducer.teams)
  var isLoadingTeam = useSelector(state => state.reducer.isLoadingTeam)


  const [page, setPage] = React.useState(1);
  const [offset, setOffset] = React.useState(50);
  const [pages, setPages] = React.useState([]);
  const [stateSearchInput, setStateSearchInput] = React.useState("");


  useEffect(() => {
    calculatePages(offset)
  }, [teams, stateSearchInput])

  const soccerService = new SoccerService();

  const dispatch = useDispatch()
  const onClickTeam = (team) => {
    windowScrollToTop()
    dispatch({
      type: CHANGE_SELECTED_TEAM,
      payload: team
    })

    soccerService.getTeamDetail(team.id)
      .then((resolve) => {
        dispatch({
          type: SET_PLAYERS,
          payload: resolve.squad
        })
      })
      .catch((error) => {

      })
  }

  const onChangeOffset = (event) => {
    setOffset(event.target.value)
    setPage(1)
    calculatePages(event.target.value)

  }

  const onChangePage = (page) => {
    setPage(page)
  }

  const calculatePages = (offset) => {
    const totalPages = Math.ceil(teams.filter(a => stateSearchInput === "" || a.name.toLowerCase().includes(stateSearchInput.toLowerCase())).length / offset);
    const pagess = [];
    for (let i = 1; i <= totalPages; i++) {
      pagess.push(i);
    }

    setPages(pagess)
  }

  const inputOnchangeHandler = (event) => {
    switch (event.target.id) {
      case "searchInputContent":
        setStateSearchInput(event.target.value)
        break
      default:
        break
    }
  }

  return (
    <div style={styles.container}>
      <div className="container mt-4">
        <div className="d-flex align-items-center mb-2">
          <div className="flex-grow-1">
            <h1 className="fw-bold">Select Teams</h1>
          </div>
          <div>
            <div class="input-group">
              <input type="text" id="searchInputContent" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" onChange={event => {
                inputOnchangeHandler(event)
              }} />
            </div>
          </div>
        </div>
        <div className="table-fix-head scrollbar">
          <table className="table table-condensed table-soccerpedia">
            <thead className="table-head">
              <tr>
                <th>No</th>
                <th>Name</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="table-body">
              {
                isLoadingTeam &&
                <tr>
                  <td className="text-center" colSpan="10">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </td>
                </tr>
              }
              {
                !isLoadingTeam && teams.filter(a => a.name.toLocaleLowerCase().includes(stateSearchInput.toLocaleLowerCase())).slice((page - 1) * offset, page * offset).map((team, index) => {
                  return (
                    <tr key={index}>
                      <td>{((page - 1) * offset) + (index + 1)}</td>
                      <td>{team.name}</td>
                      <td className="text-end">
                        <button className="btn btn-primary" onClick={() => onClickTeam(team)}>
                          <FontAwesomeIcon icon={faInfoCircle} />
                        </button>
                      </td>
                    </tr>
                  )
                })
              }
              {
                !isLoadingTeam && teams.length === 0 &&
                <tr>
                  <td className="text-center" colSpan="10">
                    No Data.
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>

        <div className="d-flex mt-4">
          <div className="d-flex">
            <select className="form-select" onChange={(event) => { onChangeOffset(event) }} value={offset}>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="150">150</option>
              <option value="200">200</option>
            </select>
          </div>
          <nav className="flex-grow-1">
            <ul className="pagination justify-content-end">
              <li className="page-item" onClick={() => { page > 1 && setPage(page - 1) }}>
                <a className="page-link" href="javascript:void(0)" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              {
                pages.map((p, index) => {
                  return (
                    <li className={['page-item', p === page && 'active'].filter(Boolean).join(' ')} onClick={() => { onChangePage(p) }}><a className="page-link" href="javascript:void(0)">{p}</a></li>
                  )
                })
              }
              <li className="page-item" onClick={() => { page < pages.length && setPage(page + 1) }}>
                <a className="page-link" href="javascript:void(0)" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </div>
  )
}

const styles = {
  container: {
  }
}

export default Team;