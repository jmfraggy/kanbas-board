import {
    GET_TODOS,
    ADD_TODO,
    DELETE_TODO,
    UPDATE_TODO,

    GET_PROGRESSES,
    ADD_PROGRESS,
    DELETE_PROGRESS,
    UPDATE_PROGRESS,

    GET_DONES,
    ADD_DONE,
    DELETE_DONE,
    UPDATE_DONE,

    SET_CURRENT,
    CLEAR_CURRENT,
    CLEAR_LISTS,
    SET_LOADING,
    LISTS_ERROR
} from '../actions/types';

const initialState = {
    todo: null,
    progress: null,
    done: null,
    current: null,
    loading: false,
    error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                todo: action.payload,
                loading: false
            };
        case ADD_TODO:
            return {
                ...state,
                todo: [...state.todo, action.payload],
                loading: false
            };
        case DELETE_TODO:
            return {
                ...state,
                todo: state.todo.filter(card => card._id !== action.payload),
                loading: false
            };
        case UPDATE_TODO:
            console.log(action.payload);
            return {
                ...state,
                todo: state.todo.map(card => card._id === action.payload._id ? action.payload : card),
                loading: false
            };

        case GET_PROGRESSES:
            return {
                ...state,
                progress: action.payload,
                loading: false
            };
        case ADD_PROGRESS:
            return {
                ...state,
                progress: [...state.progress, action.payload],
                loading: false
            };
        case DELETE_PROGRESS:
            return {
                ...state,
                progress: state.progress.filter(card => card._id !== action.payload),
                loading: false
            };
        case UPDATE_PROGRESS:
            return {
                ...state,
                progress: state.progress.map(card => card._id === action.payload._id ? action.payload : card),
                loading: false
            };

        case GET_DONES:
            return {
                ...state,
                done: action.payload,
                loading: false
            };
        case ADD_DONE:
            return {
                ...state,
                done: [...state.done, action.payload],
                loading: false
            };
        case DELETE_DONE:
            return {
                ...state,
                done: state.done.filter(card => card._id !== action.payload),
                loading: false
            };
        case UPDATE_DONE:
            return {
                ...state,
                done: state.done.map(card => card._id === action.payload._id ? action.payload : card),
                loading: false
            };

        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            };
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            };
        case CLEAR_LISTS:
            return {
                ...state,
                todo: null,
                progress: null,
                done: null,
                current: null,
                loading: false,
                error: null,
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case LISTS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}