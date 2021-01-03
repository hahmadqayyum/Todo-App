import React, { useContext, useState } from 'react'
import { GlobalState } from '../context/GlobalState';

const ListItem = ({ Todo }) => {
    const { deleteTodoItem, completeHandler, updateHandler } = useContext(GlobalState)
    // console.log(Todo.id)
    const [newText, setNewText] = useState({
        editedText: "",
    })

    const { editedText } = newText

    const [isEditing, setEditing] = useState(false)

    const onChangeEditing = (e) => {
        setNewText({ ...newText, [e.target.name]: e.target.value })
        // console.log(editedText)
    }

    const onSubmitEditForm = (e) => {
        e.preventDefault();
        if (editedText !== "") {
            const theText = {
                id: Todo.id,
                editedText,

            }
            // console.log(theText)
            updateHandler(theText)
            setNewText("")
            setEditing(false)
        }

    }

    return (
        <div  >
            {
                isEditing ?

                    <form onSubmit={onSubmitEditForm} key={Todo.id} >
                        <div>
                            <input value={editedText} name="editedText" type="text" placeholder={Todo.Text} onChange={onChangeEditing} />
                            <button>Save Changes</button>
                        </div>
                    </form>
                    :
                    <div  >
                        <span>{Todo.Text}</span>
                        <div>
                            <button onClick={() => completeHandler(Todo.id)}>{Todo.isComplete ? "Done" : "notDone"}</button>
                        </div>
                        <div>
                            <button onClick={() => deleteTodoItem(Todo.id)} >delete</button>
                        </div>

                    </div>
            }
            <button onClick={() => {
                setEditing(!isEditing)
                console.log(Todo.id)
            }}>{isEditing ? "cancel" : "Edit"}</button>
        </div >
    )
}

export default ListItem;