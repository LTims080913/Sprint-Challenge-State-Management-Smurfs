import {
    FETCH_CHARACTERS_START,
    FETCH_CHARACTERS_SUCCESS,
    FETCH_CHARACTERS_FAIL,
    POST_CHARACTER_SUCCESS,
    POST_CHARACTER_FAIL
  } from "../actions";

const initialState = {
    characters:[],
    fetchingCharacters: false,
    addingCharacter: false, 
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CHARACTERS_START:
            return {
                ...state,
                fetchingCharacters: true,
                error: action.payload

            };
        case FETCH_CHARACTERS_SUCCESS:
            return {
                ...state,
                characters: action.payload,
                fetchingCharacters: false,
                error: ''
            };
        case FETCH_CHARACTERS_FAIL:
            return {
                ...state,
                fetchingCharacters: false,
                error: action.payload
            };
        case POST_CHARACTER_SUCCESS:
            const newCharacter = {
                name: action.payload,
                age: '',
                height: '',
                id: Date.now()
            }
            return {...state, characters: [state.characters, newCharacter]}
        case POST_CHARACTER_FAIL:
            return {
                ...state, 
                addingCharacter: false, 
                error: action.payload,
                fetchingCharacters: false
            }
        default: 
            return state;
    }
};

export default reducer;