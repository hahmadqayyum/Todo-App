import React, { createContext, useReducer } from 'react'
import AppReducer from './AppRducer'


const initialState = {
    Todos: [],
    filteredTodos: []

}



export const GlobalState = createContext(initialState)


export const GlobalStateProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    const addTodosFunction = data => {
        dispatch({
            type: 'ADD_TODOS',
            payload: data
        })
    }

    const deleteTodoItem = data => {
        dispatch({
            type: 'DELETE_TODO_ITEM',
            payload: data
        })
    }

    const completeHandler = data => {
        dispatch({
            type: 'COMPLETE_HANDLER',
            payload: data
        })
    }

    const filterHandler = data => {
        dispatch({
            type: data,
        })
    }

    const updateHandler = data => {
        // console.log(data)
        dispatch({
            type: 'UPDATE_HANDLER',
            payload: { id: data.id, Text: data.editedText }
        })
    }

    return (
        <GlobalState.Provider
            value={{
                Todos: state.Todos,
                filteredTodos: state.filteredTodos,
                addTodosFunction,
                deleteTodoItem,
                completeHandler,
                filterHandler,
                updateHandler
            }}
        >
            {children}
        </GlobalState.Provider>
    )
}