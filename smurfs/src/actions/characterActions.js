import Axios from "axios";

export const FETCH_CHARACTERS_START = "FETCH_CHARACTERS_START";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
export const FETCH_CHARACTERS_FAIL = "FETCH_CHARACTERS_FAIL";
export const POST_CHARACTER_SUCCESS = "POST_CHARACTER_SUCCESS";
export const POST_CHARACTER_FAIL = "POST_CHARACTER_FAIL";


export const getCharacters = () => dispatch => {
    dispatch({type: FETCH_CHARACTERS_START });
    Axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        console.log(res.data)
        dispatch({type: FETCH_CHARACTERS_SUCCESS, payload: res.data})
    })
    .catch(error => {
        dispatch({type: FETCH_CHARACTERS_FAIL})
    })
}

export const postCharacter = newCharacter => dispatch => {
    Axios
    .post('http://localhost:3333/smurfs')
    .then(res => {
        dispatch({type: POST_CHARACTER_SUCCESS, payload: res.data.results})
    })
    .catch(error => {
        dispatch({type: POST_CHARACTER_FAIL, payload: error.response})
    })
}