import axios from 'axios';

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
} from './types';


// Get Todos from server
export const getTodos = () => async dispatch =>{
    try {
        setLoading();
        const res = await axios.get('/api/todos');
        dispatch({
            type: GET_TODOS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: LISTS_ERROR,
            payload: error
        });
    }
};

// Add new Todo Card
export const addTodo = (card) => async dispatch =>{
    const config = {
        headers: { 'Content-Type': 'application/json'}
    }
    try {
        setLoading();
        const res = await axios.post('/api/todos', card, config);
        dispatch({
            type: ADD_TODO,
            payload: res.data
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type: LISTS_ERROR,
            payload: error
        });
    }
};

// Delete Todo Card from Server
export const deleteTodo = id => async dispatch =>{
    try {
        setLoading();
        await axios.delete(`/api/todos/${id}`);
        dispatch({
            type: DELETE_TODO,
            payload: id
        });
    } catch (error) {
        dispatch({
            type: LISTS_ERROR,
            payload: error
        });
    }
};

// Update Todo Card on Server
export const updateTodo = card => async dispatch =>{
    const config = {
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        setLoading();
        const res = await axios.put(`/api/todos/${card._id}`, card, config);
        dispatch({
            type: UPDATE_TODO,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: LISTS_ERROR,
            payload: error
        });
    }
};

// Progresses

// Get Progresses from server
export const getProgresses = () => async dispatch =>{
    try {
        setLoading();
        const res = await axios.get('/api/progresses');
        dispatch({
            type: GET_PROGRESSES,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: LISTS_ERROR,
            payload: error
        });
    }
};

// Add new Progress Card
export const addProgress = (card) => async dispatch =>{
    const config = {
        headers: { 'Content-Type': 'application/json'}
    }
    try {
        setLoading();
        const res = await axios.post('/api/progresses', card, config);
        dispatch({
            type: ADD_PROGRESS,
            payload: res.data
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type: LISTS_ERROR,
            payload: error
        });
    }
};

// Delete Progress Card from Server
export const deleteProgress = id => async dispatch =>{
    try {
        setLoading();
        await axios.delete(`/api/progresses/${id}`);
        dispatch({
            type: DELETE_PROGRESS,
            payload: id
        });
    } catch (error) {
        dispatch({
            type: LISTS_ERROR,
            payload: error
        });
    }
};

// Update Progress Card on Server
export const updateProgress = card => async dispatch =>{
    const config = {
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        setLoading();
        const res = await axios.put(`/api/progresses/${card._id}`, card, config);
        dispatch({
            type: UPDATE_PROGRESS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: LISTS_ERROR,
            payload: error
        });
    }
};

// Dones

// Get Dones from server
export const getDones = () => async dispatch =>{
    try {
        setLoading();
        const res = await axios.get('/api/dones');
        dispatch({
            type: GET_DONES,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: LISTS_ERROR,
            payload: error
        });
    }
};

// Add new Done Card
export const addDone = (card) => async dispatch =>{
    const config = {
        headers: { 'Content-Type': 'application/json'}
    }
    try {
        setLoading();
        const res = await axios.post('/api/dones', card, config);
        dispatch({
            type: ADD_DONE,
            payload: res.data
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type: LISTS_ERROR,
            payload: error
        });
    }
};

// Delete Done Card from Server
export const deleteDone = id => async dispatch =>{
    try {
        setLoading();
        await axios.delete(`/api/dones/${id}`);
        dispatch({
            type: DELETE_DONE,
            payload: id
        });
    } catch (error) {
        dispatch({
            type: LISTS_ERROR,
            payload: error
        });
    }
};

// Update Done Card on Server
export const updateDone = card => async dispatch =>{
    const config = {
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        setLoading();
        const res = await axios.put(`/api/dones/${card._id}`, card, config);
        dispatch({
            type: UPDATE_DONE,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: LISTS_ERROR,
            payload: error
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

// Clear Lists
export const clearLists = () => {
    return {
        type: CLEAR_LISTS
    }
};

// Set Loading to True
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};