
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AreaCardItem from "../../../components/AreaCardItem";
import SoccerService from "../../../services/SoccerService";
import AppBreadcrumb from "../../../shared/AppBreadcrumb";
import { CHANGE_SELECTED_AREA, SET_COMPETITIONS } from "../../../stores/actions";

const Player = () => {

    useEffect(() => {
    }, [])

    const soccerService = new SoccerService();
    var areas = useSelector(state => state.reducer.areas)


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

    return (
        <div style={styles.container}>
            <div className="container mt-4">
                <h1 className="mb-4 fw-bold">Select Areas</h1>
                <div className="row">
                    {
                        areas.map((area, index) => {
                            return (
                                <div className="col-md-4">
                                    <div onClick={() => { onClickArea(area) }}>
                                        <AreaCardItem key={index} name={area.name} parentArea={area.parentArea} code={area.countryCode} />
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

export default Player;