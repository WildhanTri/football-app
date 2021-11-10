import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SoccerService from "../../../services/SoccerService";
import Areas from "../areas";
import Competition from "../competitions";
import Player from "../players";
import Team from "../teams";

const Home = () => {

  var content

  const dispatch = useDispatch()

  var selectedArea = useSelector(state => state.reducer.selectedArea)
  var selectedCompetition = useSelector(state => state.reducer.selectedCompetition)
  var selectedTeam = useSelector(state => state.reducer.selectedTeam)
  var selectedPlayer = useSelector(state => state.reducer.selectedPlayer)

  useEffect(() => {
    
  }, [])


  const renderContent = () => {
    if (selectedPlayer != null) {
      return <p>Test</p>
    } else if (selectedTeam != null) {
      return <Player />
    } else if (selectedCompetition != null) {
      return <Team />
    } else if (selectedArea != null) {
      return <Competition />
    } else if (selectedArea == null) {
      return <Areas />
    }
  }


  return (
    <div style={styles.container}>
      {/* <Areas /> */}
      {renderContent()}

    </div>
  )
}

const styles = {
  container: {
  }
}

export default Home;