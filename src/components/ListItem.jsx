import React, { useContext, useEffect } from 'react'
import { GlobalState } from '../context/GlobalState';

const ListItem = ({ Todo }) => {
    const { deleteTodoItem, completeHandler } = useContext(GlobalState)
    // console.log(Todo.id)



    // const updateisComplete = Todo => {
    //     Todo.map(item => {
    //         if (item.id === Todo.id) {
    //             const newItem = {
    //                 ...item,
    //                 isComplete: !isComplete
    //             }
    //             return newItem
    //         }
    //         return item
    //     })
    // }

    return (

        <div>
            <span>{Todo.Text}</span>
            <div>
                <button onClick={() => completeHandler(Todo.id)}>{Todo.isComplete ? "Done" : "notDone"}</button>
            </div>
            <div>
                <button onClick={() => deleteTodoItem(Todo.id)} >delete</button>
            </div>
        </div>

    )
}

export default ListItem;