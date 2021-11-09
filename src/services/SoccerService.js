import axios from "axios";
import React from "react";


export default class SoccerService extends React.Component {

    getArea = () => {
        return new Promise((resolve, reject) => {
            var url = process.env.FOOTBALL_API_ENDPOINT + "/v2/areas?"

            axios.get(url, { headers: { "X-Auth-Token": process.env.FOOTBALL_API_TOKEN } })
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
            var url = process.env.FOOTBALL_API_ENDPOINT + "/v2/areas/" + id

            axios.get(url, { headers: { "X-Auth-Token": process.env.FOOTBALL_API_TOKEN } })
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

    getCompetition = () => {
        return new Promise((resolve, reject) => {
            var url = process.env.FOOTBALL_API_ENDPOINT + "/v2/competitions?"

            axios.get(url, { headers: { "X-Auth-Token": process.env.FOOTBALL_API_TOKEN } })
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
            var url = process.env.FOOTBALL_API_ENDPOINT + "/v2/competitions/" + id

            axios.get(url, { headers: { "X-Auth-Token": process.env.FOOTBALL_API_TOKEN } })
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

    getTeam = () => {
        return new Promise((resolve, reject) => {
            var url = process.env.FOOTBALL_API_ENDPOINT + "/v2/teams?"

            axios.get(url, { headers: { "X-Auth-Token": process.env.FOOTBALL_API_TOKEN } })
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
            var url = process.env.FOOTBALL_API_ENDPOINT + "/v2/teams/" + id

            axios.get(url, { headers: { "X-Auth-Token": process.env.FOOTBALL_API_TOKEN } })
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

    getPlayer = () => {
        return new Promise((resolve, reject) => {
            var url = process.env.FOOTBALL_API_ENDPOINT + "/v2/players?"

            axios.get(url, { headers: { "X-Auth-Token": process.env.FOOTBALL_API_TOKEN } })
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
            var url = process.env.FOOTBALL_API_ENDPOINT + "/v2/player/" + id

            axios.get(url, { headers: { "X-Auth-Token": process.env.FOOTBALL_API_TOKEN } })
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