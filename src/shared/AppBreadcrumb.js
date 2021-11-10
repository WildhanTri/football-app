
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faGlobeEurope, faHome, faShieldAlt, faTrophy, faUser } from "@fortawesome/free-solid-svg-icons";
import SoccerService from "../services/SoccerService";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { CHANGE_SELECTED_AREA, CHANGE_SELECTED_COMPETITION, CHANGE_SELECTED_PLAYER, CHANGE_SELECTED_TEAM } from "../stores/actions";

const AppBreadcrumb = (props) => {

  const soccerService = new SoccerService();

  const [stateAreas, setStateAreas] = React.useState([]);
  const [stateCompetitions, setStateCompetitions] = React.useState([]);
  const [stateTeams, setStateTeams] = React.useState([]);
  const [statePlayers, setStatePlayers] = React.useState([]);

  const [stateSelectedArea, setStateSelectedArea] = React.useState();
  const [stateSelectedCompetition, setStateSelectedCompetition] = React.useState(null);
  const [stateSelectedTeam, setStateSelectedTeam] = React.useState(null);
  const [stateSelectedPlayer, setStateSelectedPlayer] = React.useState(null);

  var selectedArea = useSelector(state => state.reducer.selectedArea)
  var selectedCompetition = useSelector(state => state.reducer.selectedCompetition)
  var selectedTeam = useSelector(state => state.reducer.selectedTeam)
  var selectedPlayer = useSelector(state => state.reducer.selectedPlayer)

  const dispatch = useDispatch()

  useEffect(() => {
    getAreas();
  }, [])


  const getAreas = () => {
    soccerService.getArea()
      .then((resolve) => {
        setStateAreas(resolve.areas)
      })
      .catch((error) => {

      })
  };

  const getCompetitions = (areaId) => {
    soccerService.getCompetition(areaId)
      .then((resolve) => {
        setStateCompetitions(resolve.competitions)
      })
      .catch((error) => {

      })
  };

  const getTeams = (competitionId) => {
    soccerService.getTeam(competitionId)
      .then((resolve) => {
        setStateTeams(resolve.teams)
      })
      .catch((error) => {

      })
  };

  const getTeamDetail = (teamId) => {
    soccerService.getTeamDetail(teamId)
      .then((resolve) => {
        setStatePlayers(resolve.squad)
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

  return (
    <div style={style.container}>
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
                <input class="form-control" id="filterTable" type="text" placeholder="Cari Disini.." />
                <div style={style.dropdownMenu}>
                  {
                    stateAreas.map((area, index) => {
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
                  <input class="form-control" id="filterTable" type="text" placeholder="Cari Disini.." />
                  <div style={style.dropdownMenu}>
                    {
                      stateCompetitions.map((competition, index) => {
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
                  <input class="form-control" id="filterTable" type="text" placeholder="Cari Disini.." />
                  <div style={style.dropdownMenu}>
                    {
                      stateTeams.map((team, index) => {
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
                  <input class="form-control" id="filterTable" type="text" placeholder="Cari Disini.." />
                  <div style={style.dropdownMenu}>
                    {
                      statePlayers.map((player, index) => {
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