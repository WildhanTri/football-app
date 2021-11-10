
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
                <table className="table table-condensed table-soccerpedia">
                    <thead className="table-head">
                        <tr>
                            <th>No</th>
                            <th>Player Name</th>
                            <th>Position</th>
                            <th>Age</th>
                            <th>Nationality</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        {
                            areas.map((area, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
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

export default Home;