import { CHANGE_SEARCH_INPUT, CHANGE_SELECTED_AREA, CHANGE_SELECTED_COMPETITION, CHANGE_SELECTED_PLAYER, CHANGE_SELECTED_TEAM } from "./actions"


const initialState = {
    searchInput: '',

    selectedArea: null,
    selectedCompetition: null,
    selectedTeam: null,
    selectedPlayer: null
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

        default:
            return state
    }
}

export default AppReducer
