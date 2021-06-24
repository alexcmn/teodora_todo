import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/actions';

export default function Item({ todo }) {

    const [edit, setEdit] = useState(false)
    const [name, setName] = useState(todo.name);
    const dispatch = useDispatch()

    const editTodo = () =>{
        dispatch(updateTodo({ ...todo, name: name}))
        edit && setName(todo.name); 
        setEdit(!edit)
    }

    const delTodo = () => dispatch(deleteTodo(todo.id));

    return (
        <div>
            <div className="row m-2 align-items-center">
                <div className="id">#{todo.id.length > 1 ? todo.id[2] : todo.id}</div>
                <div className="col">
                    {
                        edit ?
                        <input type="text"
                            className="form-control"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        :
                        <h4>{todo.name}</h4>
                    }
                </div>
                <button 
                    className="btn btn-primary m-2 edit" 
                    onClick={editTodo}
                > { edit ? "Update" : "Edit"} </button>
                <button className="btn btn-danger del" onClick={delTodo}>Delete</button>
            </div>
        </div>
    )
}
