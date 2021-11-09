
import React, { useEffect } from "react";
import AreaCardItem from "../../../components/AreaCardItem";
import CompetitionCardItem from "../../../components/CompetitionCardItem";
import Tables from "../../../components/Tables";
import TeamCardItem from "../../../components/TeamCardItem";
import AppBreadcrumb from "../../../shared/AppBreadcrumb";

const Home = () => {
    useEffect(() => {
    }, [])

    return (
        <div style={styles.container}>
            <AppBreadcrumb />
            This is home
            <AreaCardItem />
            <CompetitionCardItem />
            <TeamCardItem />

            <Tables />
        </div>
    )
}

const styles = {
    container: {
    }
}

export default Home;