export default function AppReducer(state, action) {

    switch (action.type) {
        case 'ADD_TODOS':
            return {
                ...state,
                Todos: [action.payload, ...state.Todos]
            }
        case 'DELETE_TODO_ITEM':
            return {
                ...state,
                Todos: state.Todos.filter(
                    data => data.id !== action.payload
                )
            }
        case 'COMPLETE_HANDLER': {
            const newList = state.Todos.map(item => {
                if (item.id === action.payload) {

                    const newTodoList = {
                        ...item,
                        isComplete: !item.isComplete
                    }
                    return newTodoList
                }
                return item
            });
            return {
                ...state,
                Todos: newList
            }
        }


        case 'UPDATE_HANDLER': {
            const newList = state.Todos.map(item => {
                if (item.id === action.payload.id) {

                    const newTodoList = {
                        ...item,
                        Text: action.payload.Text
                    }
                    return newTodoList
                }
                return item
            });
            return {
                ...state,
                Todos: newList
            }
        }


        case 'completed':
            return {
                ...state,
                filteredTodos: state.Todos.filter(item => item.isComplete === true)
            }

        case 'uncomplete':
            return {
                ...state,
                filteredTodos: state.Todos.filter(item => item.isComplete === false)
            }

        default:
            return {
                ...state,
                filteredTodos: [...state.Todos]

            }
    }

}