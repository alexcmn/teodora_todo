import React, { useState } from 'react'
import { addTodo } from '../redux/actions'
import { v1 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';

export default function Input() {

    const [name, setName] = useState();
    const dispatch = useDispatch();

    const addNewTodo = () =>{
        dispatch(addTodo({ id: uuid(), name: name }))
        setName('')
    }

    return (
        <div>
            <div className="row">
                <input type="text" 
                    className="col form-control"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <button 
                    className="btn btn-primary mx-2 add" 
                    onClick={addNewTodo}
                >Add</button>
            </div>
        </div>
    )
}
