import axios from "axios";
import { Task } from "./Task";

const API = 'http://localhost:4000'

//peticiones
export const getTask = async () => {
    return await axios.get(`${API}/tasks`)
}

export const createTask = async (task: Task) => {
    return await axios.post(`${API}/tasks`,task)
}