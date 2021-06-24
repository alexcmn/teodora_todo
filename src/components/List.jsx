import React from 'react'
import { useSelector } from 'react-redux';
import Item from './Item'

export default function List() {

    const todos = useSelector(state => state)

    return (
        <div className="my-5">
            {
                todos.map(todo => {
                    return <Item key={todo.id} todo={todo} />
                })
            }
        </div>
    )
}
