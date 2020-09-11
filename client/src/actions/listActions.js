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
    SET_LOADING,
    LISTS_ERROR
} from './types';


// Get Todos from server
export const getTodos = () => async dispatch =>{
    try {
        setLoading();
        const res = await fetch('/todo');
        const data = await res.json();

        dispatch({
            type: GET_TODOS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: LISTS_ERROR,
            payload: error.response.data
        });
    }
};

// Add new Todo Card
export const addTodo = (card) => async dispatch =>{
    try {
        setLoading();
        const res = await fetch('/todo', {
            method: 'POST',
            body: JSON.stringify(card),
            headers: {
                'Content-Type': 'application/json'
            } 
        });
        const data = await res.json();

        dispatch({
            type: ADD_TODO,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: LISTS_ERROR,
            payload: error.response.data
        });
    }
};

// Delete Todo Card from Server
export const deleteTodo = id => async dispatch =>{
    try {
        setLoading();
        await fetch(`/todo/${id}`, {
            method: 'DELETE'
        });

        dispatch({
            type: DELETE_TODO,
            payload: id
        });

    } catch (error) {
        dispatch({
            type: LISTS_ERROR,
            payload: error.response.data
        });
    }
};

// Update Todo Card on Server
export const updateTodo = card => async dispatch =>{
    try {
        setLoading();
        const res = await fetch(`/todo/${card.id}`, {
            method: 'PUT',
            body: JSON.stringify(card),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: UPDATE_TODO,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: LISTS_ERROR,
            payload: error.response.data
        });
    }
};

// Progresses

// Get Progresses from server
export const getProgresses = () => async dispatch =>{
    try {
        setLoading();
        const res = await fetch('/progress');
        const data = await res.json();

        dispatch({
            type: GET_PROGRESSES,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: LISTS_ERROR,
            payload: error.response.data
        });
    }
};

// Add new Progress Card
export const addProgress = (card) => async dispatch =>{
    try {
        setLoading();
        const res = await fetch('/progress', {
            method: 'POST',
            body: JSON.stringify(card),
            headers: {
                'Content-Type': 'application/json'
            } 
        });
        const data = await res.json();

        dispatch({
            type: ADD_PROGRESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: LISTS_ERROR,
            payload: error.response.data
        });
    }
};

// Delete Progress Card from Server
export const deleteProgress = id => async dispatch =>{
    try {
        setLoading();
        await fetch(`/progress/${id}`, {
            method: 'DELETE'
        });

        dispatch({
            type: DELETE_PROGRESS,
            payload: id
        });

    } catch (error) {
        dispatch({
            type: LISTS_ERROR,
            payload: error.response.data
        });
    }
};

// Update Progress Card on Server
export const updateProgress = card => async dispatch =>{
    try {
        setLoading();
        const res = await fetch(`/progress/${card.id}`, {
            method: 'PUT',
            body: JSON.stringify(card),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: UPDATE_PROGRESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: LISTS_ERROR,
            payload: error.response.data
        });
    }
};

// Dones

// Get Dones from server
export const getDones = () => async dispatch =>{
    try {
        setLoading();
        const res = await fetch('/done');
        const data = await res.json();

        dispatch({
            type: GET_DONES,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: LISTS_ERROR,
            payload: error.response.data
        });
    }
};

// Add new Done Card
export const addDone = (card) => async dispatch =>{
    try {
        setLoading();
        const res = await fetch('/done', {
            method: 'POST',
            body: JSON.stringify(card),
            headers: {
                'Content-Type': 'application/json'
            } 
        });
        const data = await res.json();

        dispatch({
            type: ADD_DONE,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: LISTS_ERROR,
            payload: error.response.data
        });
    }
};

// Delete Done Card from Server
export const deleteDone = id => async dispatch =>{
    try {
        setLoading();
        await fetch(`/done/${id}`, {
            method: 'DELETE'
        });

        dispatch({
            type: DELETE_DONE,
            payload: id
        });

    } catch (error) {
        dispatch({
            type: LISTS_ERROR,
            payload: error.response.data
        });
    }
};

// Update Done Card on Server
export const updateDone = card => async dispatch =>{
    try {
        setLoading();
        const res = await fetch(`/done/${card.id}`, {
            method: 'PUT',
            body: JSON.stringify(card),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: UPDATE_DONE,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: LISTS_ERROR,
            payload: error.response.data
        });
    }
};

// Set Current List 
export const setCurrent = card => {
    return {
        type: SET_CURRENT,
        payload: card
    }
};

// Clear Current List 
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT
    }
};

// Set Loading to True
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};