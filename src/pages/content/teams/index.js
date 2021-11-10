
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CompetitionCardItem from "../../../components/CompetitionCardItem";
import SoccerService from "../../../services/SoccerService";
import AppBreadcrumb from "../../../shared/AppBreadcrumb";
import { CHANGE_SELECTED_AREA, CHANGE_SELECTED_COMPETITION, SET_COMPETITIONS, SET_TEAMS } from "../../../stores/actions";

const Teams = () => {

  useEffect(() => {
  }, [])

  const soccerService = new SoccerService();
  var competitions = useSelector(state => state.reducer.competitions)


  const dispatch = useDispatch()
  const onClickCompetition = (area) => {
    dispatch({
      type: CHANGE_SELECTED_COMPETITION,
      payload: area
    })

    soccerService.getCompetition(area.id)
      .then((resolve) => {
        dispatch({
          type: SET_TEAMS,
          payload: resolve.teams
        })
      })
      .catch((error) => {

      })
  }

  return (
    <div style={styles.container}>
      <div className="container mt-4">
        <h1 className="mb-4 fw-bold">Select Areas</h1>
        <div className="row">
          {
            competitions.map((competition, index) => {
              return (
                <div className="col-md-4">
                  <div onClick={() => { onClickCompetition(competition) }}>
                    <CompetitionCardItem key={index} image={competition.area.ensignUrl} name={competition.name} />
                  </div>
                </div>
              )
            })
          }
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

export default Teams;