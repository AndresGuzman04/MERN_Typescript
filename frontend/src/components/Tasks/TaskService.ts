import axios from "axios"
//peticiones
export const getTask = async () => {
    return await axios.get('http://localhost:4000/tasks')
}