import axios from "../config/axios"
import { Todo} from "../types/todotpes"


export const getTodos = () => axios.get("/todo");

export const createTodo = (todo: Partial<Todo>) => axios.post("/todo", todo);

export const deleteTodo = (id: number) => axios.delete(`/todo/${id}`)

