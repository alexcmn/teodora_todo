import { ADD_TODO, EDIT_TODO, DELETE_TODO } from './types';

export function addTodo(todo){

    return{
        type: ADD_TODO,
        payload: todo
    }
}

export function updateTodo(todoId){
    return{
        type: EDIT_TODO,
        payload: todoId
    }
}

export function deleteTodo(todoId){
    return{
        type: DELETE_TODO,
        payload: todoId
    }
}
