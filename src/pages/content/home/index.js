
import React, { useEffect } from "react";
import AreaCardItem from "../../../components/AreaCardItem";
import CompetitionCardItem from "../../../components/CompetitionCardItem";

const Home = () => {
    useEffect(() => {
    }, [])

    return (
        <div style={styles.container}>
            This is home
            <AreaCardItem />
            <CompetitionCardItem />
        </div>
    )
}

const styles = {
    container: {
    }
}

export default Home;