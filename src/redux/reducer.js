import { addTodo, updateTodo, deleteTodo } from './actions';
import { ADD_TODO, EDIT_TODO, DELETE_TODO } from './types';
import { todos } from './states';

export let reducer = (state = todos, action) => {
    let newTodos;

    switch (action.type) {
        case ADD_TODO:
            newTodos = [...state];
            newTodos.push(action.payload);
            return newTodos;
        case EDIT_TODO:
            newTodos = [...state];
            let idx = -1;
            for( let i = 0; newTodos.length; i++){
                idx++;
                if(newTodos[i].id == action.payload.id){
                    break;
                }
            }
            if(idx != -1){
                newTodos[idx] = action.payload;
                return newTodos;
            }
            break;
        case DELETE_TODO:
            newTodos = [...state];
            newTodos = newTodos.filter(todo => todo.id != action.payload);
            return newTodos;
        default:
    }
    return state;
}