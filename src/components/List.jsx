import React, { useContext } from 'react'
import { GlobalState } from '../context/GlobalState'
import ListItem from './ListItem'

const List = () => {
    const { filteredTodos } = useContext(GlobalState)
    return (
        <ul>
            {
                filteredTodos.map(item => (
                    <li key={item.id}>
                        <ListItem key={item.id} Todo={item} />
                    </li>
                ))
            }

        </ul>
    )
}

export default List;