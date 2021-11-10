import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SoccerService from "../../../services/SoccerService";
import Areas from "../areas";
import Competition from "../competitions";

const Home = () => {

  useEffect(() => {
  }, [])

  const dispatch = useDispatch()

  var selectedArea = useSelector(state => state.reducer.selectedArea)
  var selectedCompetition = useSelector(state => state.reducer.selectedCompetition)
  var selectedTeam = useSelector(state => state.reducer.selectedTeam)
  var selectedPlayer = useSelector(state => state.reducer.selectedPlayer)

  return (
    <div style={styles.container}>
      <Areas />
      {/* {
        selectedArea &&
        <Areas />
      } */}

      {/* {
        selectedCompetition &&
        <Competition />
      } */}
    </div>
  )
}

const styles = {
  container: {
  }
}

export default Home;