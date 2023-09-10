import axios from 'axios';

const URL = "http://localhost:5000";

export const getTodo = async () => {
    try {
        const response = await axios.get(`${URL}/`);
        return response.data;
    } catch (error) {
        throw error;
    }
}
export const addTodo = async (todo) => {
    try {
        const response = await axios.post(`${URL}/add`, todo);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const editTodo = async (todo) => {
    try {
        const response = await axios.post(`${URL}/edit`, todo);
        return response.data;
    } catch (error) {
        throw error;
    }
}
export const deleteTodo = async (id) => {
    try {
        const response = await axios.post(`${URL}/delete`, id);
        return response.data;
    } catch (error) {
        throw error;
    }
}

