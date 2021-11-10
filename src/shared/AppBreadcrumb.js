
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faGlobeEurope, faHome, faShieldAlt, faTrophy, faUser } from "@fortawesome/free-solid-svg-icons";
import SoccerService from "../services/SoccerService";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { CHANGE_SELECTED_AREA, CHANGE_SELECTED_COMPETITION, CHANGE_SELECTED_PLAYER, CHANGE_SELECTED_TEAM, SET_AREAS, SET_COMPETITIONS, SET_LOADING_AREA, SET_PLAYERS, SET_TEAMS } from "../stores/actions";
import { useHistory } from 'react-router-dom'


const AppBreadcrumb = (props) => {

  const history = useHistory();
  const soccerService = new SoccerService();

  const [stateSearchInputArea, setStateSearchInputArea] = React.useState([]);
  const [stateSearchInputCompetition, setStateSearchInputCompetition] = React.useState([]);
  const [stateSearchInputTeam, setStateSearchInputTeam] = React.useState([]);
  const [stateSearchInputPlayer, setStateSearchInputPlayer] = React.useState([]);


  var areas = useSelector(state => state.reducer.areas)
  var competitions = useSelector(state => state.reducer.competitions)
  var teams = useSelector(state => state.reducer.teams)
  var players = useSelector(state => state.reducer.players)

  var selectedArea = useSelector(state => state.reducer.selectedArea)
  var selectedCompetition = useSelector(state => state.reducer.selectedCompetition)
  var selectedTeam = useSelector(state => state.reducer.selectedTeam)
  var selectedPlayer = useSelector(state => state.reducer.selectedPlayer)

  const dispatch = useDispatch()

  useEffect(() => {
    getAreas();
  }, [])


  const getAreas = () => {
    dispatch({ type: SET_LOADING_AREA, payload: true })
    soccerService.getArea()
      .then((resolve) => {
        dispatch({ type: SET_LOADING_AREA, payload: false })
        dispatch({
          type: SET_AREAS,
          payload: resolve.areas
        })
      })
      .catch((error) => {

      })
  };

  const getCompetitions = (areaId) => {
    soccerService.getCompetition(areaId)
      .then((resolve) => {
        dispatch({
          type: SET_COMPETITIONS,
          payload: resolve.competitions
        })
      })
      .catch((error) => {

      })
  };

  const getTeams = (competitionId) => {
    soccerService.getTeam(competitionId)
      .then((resolve) => {
        dispatch({
          type: SET_TEAMS,
          payload: resolve.teams
        })
      })
      .catch((error) => {

      })
  };

  const getTeamDetail = (teamId) => {
    soccerService.getTeamDetail(teamId)
      .then((resolve) => {
        dispatch({
          type: SET_PLAYERS,
          payload: resolve.squad
        })
      })
      .catch((error) => {

      })
  };

  const onClickArea = (area) => {
    dispatch({
      type: CHANGE_SELECTED_AREA,
      payload: area
    })
    getCompetitions(area.id);
  }

  const onClickCompetition = (competition) => {
    dispatch({
      type: CHANGE_SELECTED_COMPETITION,
      payload: competition
    })

    getTeams(competition.id);
  }

  const onClickTeam = (team) => {
    dispatch({
      type: CHANGE_SELECTED_TEAM,
      payload: team
    })

    getTeamDetail(team.id);
  }

  const onClickPlayer = (player) => {
    dispatch({
      type: CHANGE_SELECTED_PLAYER,
      payload: player
    })
  }

  const inputOnchangeHandler = (event) => {
    switch (event.target.id) {
      case "searchInputArea":
        setStateSearchInputArea(event.target.value)
        break
      case "searchInputCompetition":
        setStateSearchInputCompetition(event.target.value)
        break
      case "searchInputTeam":
        setStateSearchInputTeam(event.target.value)
        break
      case "searchInputPlayer":
        setStateSearchInputPlayer(event.target.value)
        break
      default:
        break
    }
  }

  return (
    <div style={style.container}>
      <div className="container" >
        <div className="d-flex w-100">
          <div className="pe-4">
            <button className="btn btn-outline-primary">
              <FontAwesomeIcon icon={faHome} />
            </button>
          </div>
          <div className="flex-grow-1">
            <div className="row">

              {/* SELECT AREA */}
              <div className="col-3 d-flex align-items-center">
                <FontAwesomeIcon className="text-primary" icon={faChevronRight} />
                <button className="btn btn-outline-primary dropdown-toggle flex-grow-1 ms-4 px-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <div className="d-inline-flex">
                    <div>
                      <FontAwesomeIcon className="me-2" icon={faGlobeEurope} />
                    </div>
                    <div className="flex-grow-1 ps-4 text-start">
                      {
                        selectedArea == null && <span>Select Area</span>
                      }

                      {
                        selectedArea != null &&
                        <div>
                          <span className="me-2 text-muted">{selectedArea.name}</span>
                          <span className="text-dark">{selectedArea.countryCode}</span>
                        </div>
                      }
                    </div>
                  </div>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <input class="form-control" id="searchInputArea" type="text" placeholder="Cari Disini.."
                    onChange={event => {
                      inputOnchangeHandler(event)
                    }} />
                  <div style={style.dropdownMenu}>
                    {
                      areas.filter(area => stateSearchInputArea == "" || area.name.toLowerCase().includes(stateSearchInputArea.toLowerCase())).map((area, index) => {
                        return (
                          <li onClick={() => { onClickArea(area) }}><a class="dropdown-item" href="#">{area.name}</a></li>
                        )
                      })
                    }
                  </div>
                </ul>
              </div>

              {/* SELECT COMPETITION */}
              {
                selectedArea != null &&
                <div className="col-3 d-flex align-items-center">
                  <FontAwesomeIcon className="text-primary" icon={faChevronRight} />
                  <button className="btn btn-outline-primary dropdown-toggle flex-grow-1 ms-4 px-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <div className="d-inline-flex">
                      <div>
                        <FontAwesomeIcon className="me-2" icon={faTrophy} />
                      </div>
                      <div className="flex-grow-1 ps-4 text-start">
                        {
                          selectedCompetition == null && <span>Select Competition</span>
                        }
                        {
                          selectedCompetition != null &&
                          <div>
                            <span className="me-2 text-muted">{selectedCompetition.name}</span>
                          </div>
                        }
                      </div>
                    </div>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <input class="form-control" id="searchInputCompetition" type="text" placeholder="Cari Disini.."
                      onChange={event => {
                        inputOnchangeHandler(event)
                      }} />
                    <div style={style.dropdownMenu}>
                      {
                        competitions.filter(competition => stateSearchInputCompetition == "" || competition.name.toLowerCase().includes(stateSearchInputCompetition.toLowerCase())).map((competition, index) => {
                          return (
                            <li onClick={() => { onClickCompetition(competition) }}><a class="dropdown-item" href="#">{competition.name}</a></li>
                          )
                        })
                      }
                    </div>
                  </ul>
                </div>
              }

              {/* SELECT TEAMS */}
              {
                selectedCompetition != null &&
                <div className="col-3 d-flex align-items-center">
                  <FontAwesomeIcon className="text-primary" icon={faChevronRight} />
                  <button className="btn btn-outline-primary dropdown-toggle flex-grow-1 ms-4 px-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <div className="d-inline-flex">
                      <div>
                        <FontAwesomeIcon className="me-2" icon={faShieldAlt} />
                      </div>
                      <div className="flex-grow-1 ps-4 text-start">
                        {
                          selectedTeam == null && <span>Select Team</span>
                        }
                        {
                          selectedTeam != null &&
                          <div>
                            <span className="me-2 text-muted">{selectedTeam.name}</span>
                          </div>
                        }
                      </div>
                    </div>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <input class="form-control" id="searchInputTeam" type="text" placeholder="Cari Disini.."
                      onChange={event => {
                        inputOnchangeHandler(event)
                      }} />
                    <div style={style.dropdownMenu}>
                      {
                        teams.filter(team => stateSearchInputTeam == "" || team.name.toLowerCase().includes(stateSearchInputTeam.toLowerCase())).map((team, index) => {
                          return (
                            <li onClick={() => { onClickTeam(team) }}><a class="dropdown-item" href="#">{team.name}</a></li>
                          )
                        })
                      }
                    </div>
                  </ul>
                </div>
              }

              {/* SELECT PLAYER */}
              {
                selectedTeam != null &&
                <div className="col-3 d-flex align-items-center">
                  <FontAwesomeIcon className="text-primary" icon={faChevronRight} />
                  <button className="btn btn-outline-primary dropdown-toggle flex-grow-1 ms-4 px-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <div className="d-inline-flex">
                      <div>
                        <FontAwesomeIcon className="me-2" icon={faUser} />
                      </div>
                      <div className="flex-grow-1 ps-4 text-start">
                        {
                          selectedPlayer == null && <span>Select Player</span>
                        }
                        {
                          selectedPlayer != null &&
                          <div>
                            <span className="me-2 text-muted">{selectedPlayer.name}</span>
                          </div>
                        }
                      </div>
                    </div>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <input class="form-control" id="searchInputPlayer" type="text" placeholder="Cari Disini.."
                      onChange={event => {
                        inputOnchangeHandler(event)
                      }} />
                    <div style={style.dropdownMenu}>
                      {
                        players.filter(player => stateSearchInputPlayer == "" || player.name.toLowerCase().includes(stateSearchInputPlayer.toLowerCase())).map((player, index) => {
                          return (
                            <li onClick={() => { onClickPlayer(player) }}><a class="dropdown-item" href="#">{player.name}</a></li>
                          )
                        })
                      }
                    </div>
                  </ul>
                </div>
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const style = {
  container: {
    display: 'flex',
    width: '100%',
    background: '#ffffff',
    padding: '8px 16px',
    boxShadow: '0px 8px 80px rgba(0, 0, 0, 0.06)',
  },
  dropdownMenu: {
    height: 200,
    overflow: 'auto'
  }
}

export default AppBreadcrumb