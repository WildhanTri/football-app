import axios from "axios";
import React from "react";


export default class SoccerService extends React.Component {

    getArea = () => {
        return new Promise((resolve, reject) => {
            var url = process.env.REACT_APP_FOOTBALL_API_ENDPOINT + "/v2/areas?"
            console.log(process.env.REACT_APP_FOOTBALL_API_ENDPOINT)

            axios.get(url, { headers: { "X-Auth-Token": process.env.REACT_APP_FOOTBALL_API_TOKEN } })
                .then(
                    (response) => {
                        resolve(response.data)
                    }
                ).catch(
                    (error) => {
                        const errorMessage = JSON.parse(error.request.response)
                        try {
                            if (errorMessage.message)
                                reject(errorMessage.message)
                        } catch (e) {
                            reject(error)
                        }
                    }
                )
        })
    }

    getAreaDetail = (id) => {
        return new Promise((resolve, reject) => {
            var url = process.env.REACT_APP_FOOTBALL_API_ENDPOINT + "/v2/areas/" + id

            axios.get(url, { headers: { "X-Auth-Token": process.env.REACT_APP_FOOTBALL_API_TOKEN } })
                .then(
                    (response) => {
                        resolve(response.data)
                    }
                ).catch(
                    (error) => {
                        const errorMessage = JSON.parse(error.request.response)
                        try {
                            if (errorMessage.message)
                                reject(errorMessage.message)
                        } catch (e) {
                            reject(error)
                        }
                    }
                )
        })
    }

    getCompetition = (areaId) => {
        return new Promise((resolve, reject) => {
            var url = process.env.REACT_APP_FOOTBALL_API_ENDPOINT + "/v2/competitions?areas=" + areaId

            axios.get(url, { headers: { "X-Auth-Token": process.env.REACT_APP_FOOTBALL_API_TOKEN } })
                .then(
                    (response) => {
                        resolve(response.data)
                    }
                ).catch(
                    (error) => {
                        const errorMessage = JSON.parse(error.request.response)
                        try {
                            if (errorMessage.message)
                                reject(errorMessage.message)
                        } catch (e) {
                            reject(error)
                        }
                    }
                )
        })
    }

    getCompetitionDetail = (id) => {
        return new Promise((resolve, reject) => {
            var url = process.env.REACT_APP_FOOTBALL_API_ENDPOINT + "/v2/competitions/" + id

            axios.get(url, { headers: { "X-Auth-Token": process.env.REACT_APP_FOOTBALL_API_TOKEN } })
                .then(
                    (response) => {
                        resolve(response.data)
                    }
                ).catch(
                    (error) => {
                        const errorMessage = JSON.parse(error.request.response)
                        try {
                            if (errorMessage.message)
                                reject(errorMessage.message)
                        } catch (e) {
                            reject(error)
                        }
                    }
                )
        })
    }

    getTeam = (competitionId) => {
        return new Promise((resolve, reject) => {
            var url = process.env.REACT_APP_FOOTBALL_API_ENDPOINT + "/v2/competitions/" + competitionId + "/teams"

            axios.get(url, { headers: { "X-Auth-Token": process.env.REACT_APP_FOOTBALL_API_TOKEN } })
                .then(
                    (response) => {
                        resolve(response.data)
                    }
                ).catch(
                    (error) => {
                        const errorMessage = JSON.parse(error.request.response)
                        try {
                            if (errorMessage.message)
                                reject(errorMessage.message)
                        } catch (e) {
                            reject(error)
                        }
                    }
                )
        })
    }

    getTeamDetail = (id) => {
        return new Promise((resolve, reject) => {
            var url = process.env.REACT_APP_FOOTBALL_API_ENDPOINT + "/v2/teams/" + id

            axios.get(url, { headers: { "X-Auth-Token": process.env.REACT_APP_FOOTBALL_API_TOKEN } })
                .then(
                    (response) => {
                        resolve(response.data)
                    }
                ).catch(
                    (error) => {
                        const errorMessage = JSON.parse(error.request.response)
                        try {
                            if (errorMessage.message)
                                reject(errorMessage.message)
                        } catch (e) {
                            reject(error)
                        }
                    }
                )
        })
    }

    getPlayer = (teamId) => {
        return new Promise((resolve, reject) => {
            var url = process.env.REACT_APP_FOOTBALL_API_ENDPOINT + "/v2/players?teams=" + teamId

            axios.get(url, { headers: { "X-Auth-Token": process.env.REACT_APP_FOOTBALL_API_TOKEN } })
                .then(
                    (response) => {
                        resolve(response.data)
                    }
                ).catch(
                    (error) => {
                        const errorMessage = JSON.parse(error.request.response)
                        try {
                            if (errorMessage.message)
                                reject(errorMessage.message)
                        } catch (e) {
                            reject(error)
                        }
                    }
                )
        })
    }

    getPlayerDetail = (id) => {
        return new Promise((resolve, reject) => {
            var url = process.env.REACT_APP_FOOTBALL_API_ENDPOINT + "/v2/player/" + id

            axios.get(url, { headers: { "X-Auth-Token": process.env.REACT_APP_FOOTBALL_API_TOKEN } })
                .then(
                    (response) => {
                        resolve(response.data)
                    }
                ).catch(
                    (error) => {
                        const errorMessage = JSON.parse(error.request.response)
                        try {
                            if (errorMessage.message)
                                reject(errorMessage.message)
                        } catch (e) {
                            reject(error)
                        }
                    }
                )
        })
    }
}