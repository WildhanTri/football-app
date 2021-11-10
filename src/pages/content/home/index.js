
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AreaCardItem from "../../../components/AreaCardItem";
import CompetitionCardItem from "../../../components/CompetitionCardItem";
import Tables from "../../../components/Tables";
import TeamCardItem from "../../../components/TeamCardItem";
import SoccerService from "../../../services/SoccerService";
import AppBreadcrumb from "../../../shared/AppBreadcrumb";
import { CHANGE_SELECTED_AREA, SET_COMPETITIONS } from "../../../stores/actions";

const Home = () => {

  var areas = useSelector(state => state.reducer.areas)
  var isLoadingArea = useSelector(state => state.reducer.isLoadingArea)

  useEffect(() => {
    calculatePages()
    console.log(pages)
  }, [areas])

  const [page, setPage] = React.useState(1);
  const [offset, setOffset] = React.useState(50);
  const [pages, setPages] = React.useState([]);

  const soccerService = new SoccerService();

  const dispatch = useDispatch()
  const onClickArea = (area) => {
    dispatch({
      type: CHANGE_SELECTED_AREA,
      payload: area
    })

    soccerService.getCompetition(area.id)
      .then((resolve) => {
        dispatch({
          type: SET_COMPETITIONS,
          payload: resolve.competitions
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
    calculatePages()
  }

  const calculatePages = (offset) => {
    const totalPages = Math.ceil(areas.length / offset);
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    setPages(pages)
  }



  return (
    <div style={styles.container}>
      <div className="container mt-4">
        <h1 className="mb-4 fw-bold">Select Areas</h1>
        <div className="table-fix-head scrollbar">
          <table className="table table-condensed table-soccerpedia">
            <thead className="table-head">
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Parent Area</th>
                <th>Country Code</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="table-body">
              {
                isLoadingArea &&
                <tr>
                  <td className="text-center" colSpan="10">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </td>
                </tr>
              }
              {
                !isLoadingArea && areas.slice((page - 1) * offset, page * offset).map((area, index) => {
                  return (
                    <tr key={index}>
                      <td>{((page - 1) * offset) + (index + 1)}</td>
                      <td>{area.name}</td>
                      <td>{area.parentArea}</td>
                      <td>{area.countryCode}</td>
                      <td className="text-end">
                        <button className="btn btn-primary">
                          <FontAwesomeIcon icon={faInfoCircle} />
                        </button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>

        <div className="d-flex mt-4">
          <div className="d-flex">
            <select className="form-select" onChange={(event) => { onChangeOffset(event) }}>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="150">150</option>
              <option value="200">200</option>
            </select>
          </div>
          <nav className="flex-grow-1">
            <ul className="pagination justify-content-end">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              {
                pages.map((page, index) => {
                  return (
                    <li className="page-item" onClick={() => { onChangePage(page) }}><a className="page-link" href="#">{page}</a></li>
                  )
                })
              }
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

      </div>
      {/* This is home
            <AreaCardItem />
            <CompetitionCardItem />
            <TeamCardItem />

            <Tables /> */}
    </div>
  )
}

const styles = {
  container: {
  }
}

export default Home;