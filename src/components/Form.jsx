import React, { useContext, useEffect, useState } from 'react'
import { GlobalState } from '../context/GlobalState'

const Form = () => {

    const [addTodo, setAddTodo] = useState({
        Text: "",
        isComplete: false
    })



    const { Text, isComplete } = addTodo

    const { addTodosFunction, Todos, filterHandler } = useContext(GlobalState)

    const onChangeInput = e => {
        setAddTodo({ ...addTodo, [e.target.name]: e.target.value })
    }

    const onSubmitInput = e => {
        e.preventDefault()
        if (Text !== "" && isComplete === false) {
            const newTodo = {
                id: Math.floor(Math.random() * 100000),
                Text,
                isComplete: false

            }
            // console.log(newTodo)
            addTodosFunction(newTodo)
            setAddTodo({
                Text: "",
                isComplete: false
            })
            // console.log(isComplete)
        }
    }

    //////////////setting status and filtering array
    const [status, setStatus] = useState("")

    useEffect(() => {
        filterHandler(status)
    }, [Todos, status])




    const onChangeStatus = e => {
        // console.log(e.target.value)
        setStatus(e.target.value)
    }


    return (
        <div>
            <form onSubmit={onSubmitInput} >
                <div>
                    <input value={Text} name="Text" type="text" placeholder="Add Todos HERE: " onChange={onChangeInput} />

                </div>
                <div>
                    <select onChange={onChangeStatus} >
                        <option value="all">all</option>
                        <option value="completed">Completed</option>
                        <option value="uncomplete">uncomplete</option>
                    </select>
                </div>
                <div>
                    <button type="submit">ADD</button>
                </div>
            </form>
        </div>

    )
}

export default Form;