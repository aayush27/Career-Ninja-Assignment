import axios from 'axios';

export const LIST_DATA = "LIST_DATA";
export const BATTLE_DATA = "BATTLE_DATA";

export function getListOfBattles () {
    return dispatch => {
       return axios.get(`http://localhost:8001/list`)
        .then((response) => {
            const result = response.data;
            dispatch({type: LIST_DATA, data: result});
        })
        .catch(({...error}) => {
            dispatch({type: LIST_DATA, data: error});
            throw(error);
        });
    }
}

export function getBattleData (location) {
    return dispatch => {
       return axios.get(`http://localhost:8001/search?location=${location}`)
        .then((response) => {
            const result = response.data;
            dispatch({type: BATTLE_DATA, data: result});
        })
        .catch(({...error}) => {
            dispatch({type: BATTLE_DATA, data: error});
            throw(error);
        });
    }
}