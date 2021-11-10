
import { faInfoCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SoccerService from "../../../services/SoccerService";
import { CHANGE_SELECTED_PLAYER } from "../../../stores/actions";
import { convertUtcDateToYYYYMMDDHHMM } from "../../../utils/util";

const PlayerDetail = () => {

  var selectedPlayer = useSelector(state => state.reducer.selectedPlayer)
  var isLoadingPlayer = useSelector(state => state.reducer.isLoadingPlayer)


  const [page, setPage] = React.useState(1);
  const [offset, setOffset] = React.useState(100);
  const [pages, setPages] = React.useState([]);
  const [recentMatches, setRecentMatches] = React.useState([]);


  useEffect(() => {
    loadRecentMatches(selectedPlayer.id)
  }, [selectedPlayer])

  useEffect(() => {
    calculatePages(offset)
  }, [recentMatches])


  const soccerService = new SoccerService();

  const dispatch = useDispatch()
  const onClickPlayer = (player) => {
    dispatch({
      type: CHANGE_SELECTED_PLAYER,
      payload: player
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
    const totalPages = Math.ceil(recentMatches.length / offset);
    const pagess = [];
    for (let i = 1; i <= totalPages; i++) {
      pagess.push(i);
    }

    setPages(pagess)
  }

  const loadRecentMatches = (playerId) => {
    soccerService.getPlayerRecentMatches(playerId)
      .then((resolve) => {
        setRecentMatches(resolve.matches)
        console.log(resolve)
      })
      .catch((error) => {

      })
  }

  return (
    <div style={styles.container}>
      <div className="container mt-4">
        {/* PROFLIE */}
        <div className="mb-4">
          <div className="d-flex align-items-center mb-2">
            <div className="flex-grow-1">
              <h1 className="fw-bold">Profile</h1>
            </div>
            <div>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1">
                  <h5 class="card-title">{selectedPlayer.name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{selectedPlayer.position}</h6>
                </div>
                <div>
                  <h5 className="fw-bold">{selectedPlayer.nationality}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MATCHES */}
        <div className="d-flex align-items-center mb-2">
          <div className="flex-grow-1">
            <h1 className="fw-bold">Recent Matches</h1>
          </div>
          <div>

          </div>
        </div>
        <div className="table-fix-head scrollbar">
          <table className="table table-condensed table-soccerpedia">
            <thead className="table-head">
              <tr>
                <th>No</th>
                <th>Match</th>
                <th>Competition</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {
                isLoadingPlayer &&
                <tr>
                  <td className="text-center" colSpan="10">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </td>
                </tr>
              }
              {
                !isLoadingPlayer && recentMatches.slice((page - 1) * offset, page * offset).map((rm, index) => {
                  return (
                    <tr key={index}>
                      <td>{((page - 1) * offset) + (index + 1)}</td>
                      <td>{rm.homeTeam.name} vs {rm.awayTeam.name}</td>
                      <td>{rm.competition.name}</td>
                      <td>{convertUtcDateToYYYYMMDDHHMM(rm.utcDate)}</td>
                    </tr>
                  )
                })
              }
              {
                !isLoadingPlayer && recentMatches.length === 0 &&
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
          </div>
          {/* <nav className="flex-grow-1">
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
          </nav> */}
        </div>

      </div>
    </div>
  )
}

const styles = {
  container: {
  }
}

export default PlayerDetail;