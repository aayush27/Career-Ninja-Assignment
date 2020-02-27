import {
    LIST_DATA,
    BATTLE_DATA
} from "../actions/api";

export default function (state = {}, action) {
    switch (action.type) {
        case LIST_DATA:
            return { ...state, list_data: action.data };
        case BATTLE_DATA:
            return { ...state, battle_data: action.data };
        default:
            return state;
    }
}