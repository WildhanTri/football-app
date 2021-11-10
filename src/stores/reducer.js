import { CHANGE_SEARCH_INPUT, CHANGE_SELECTED_AREA, CHANGE_SELECTED_COMPETITION, CHANGE_SELECTED_PLAYER, CHANGE_SELECTED_TEAM, SET_AREAS, SET_COMPETITIONS, SET_LOADING_AREA, SET_LOADING_COMPETITON, SET_LOADING_PLAYER, SET_LOADING_TEAM, SET_PLAYERS, SET_TEAMS } from "./actions"


const initialState = {
    searchInput: '',

    selectedArea: null,
    selectedCompetition: null,
    selectedTeam: null,
    selectedPlayer: null,

    areas: [],
    competitions: [],
    teams: [],
    players: [],

    isLoadingArea: false,
    isLoadingCompetition: false,
    isLoadingTeam: false,
    isLoadingPlayer: false
}

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SEARCH_INPUT:
            return {
                ...state,
                searchInput: action.payload
            }

        case CHANGE_SELECTED_AREA:
            return {
                ...state,
                selectedArea: action.payload
            }
        case CHANGE_SELECTED_COMPETITION:
            return {
                ...state,
                selectedCompetition: action.payload
            }

        case CHANGE_SELECTED_TEAM:
            return {
                ...state,
                selectedTeam: action.payload
            }

        case CHANGE_SELECTED_PLAYER:
            return {
                ...state,
                selectedPlayer: action.payload
            }

        case SET_AREAS:
            return {
                ...state,
                areas: action.payload
            }
        case SET_COMPETITIONS:
            return {
                ...state,
                competitions: action.payload
            }
        case SET_TEAMS:
            return {
                ...state,
                teams: action.payload
            }
        case SET_PLAYERS:
            return {
                ...state,
                players: action.payload
            }

        case SET_LOADING_AREA:
            return {
                ...state,
                isLoadingArea: action.payload
            }

        case SET_LOADING_COMPETITON:
            return {
                ...state,
                isLoadingCompetition: action.payload
            }

        case SET_LOADING_TEAM:
            return {
                ...state,
                isLoadingTeam: action.payload
            }

        case SET_LOADING_PLAYER:
            return {
                ...state,
                isLoadingPlayer: action.payload
            }


        default:
            return state
    }
}

export default AppReducer
