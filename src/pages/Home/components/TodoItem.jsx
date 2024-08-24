/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import EditIcon from "./buttons/EditButton"
import DeleteIcon from "./buttons/DeleteButton"
import { useState, useCallback } from "react"


export default function TodoItem({item, editTodoHandler, deleteTodo, handleCheckbox, darkMode}){

    // -------------STATES-------------

    const [editButton, setEditButton] = useState(false)
    const [newTitle, setNewTitle] = useState(item?.title)

    // -------------FUNCTIONS-------------
    
    const editHandler = () => {
        setEditButton(!editButton)
    }

    const handleInputChange = useCallback((event) => {
        if(event.key === 'Enter'){
            editTodoHandler(item, event.target.value)
            setEditButton(false)
        }
    }, [editTodoHandler, item, setEditButton]);

    const confirmButton = useCallback(() => {
        editTodoHandler(item, newTitle)
        setEditButton(false)
    }, [editTodoHandler, item ,newTitle, setEditButton]);

    const cancelButton = useCallback(() => {
        setEditButton(false)
    }, [setEditButton]);



    return (
        <div>
            <li className="relative flex items-center justify-between px-2 py-6 border-b">
                <div>
                    <input type="checkbox" onChange={() => handleCheckbox(item)} checked={item?.status} className="cursor-pointer" /> 
                    <div
                    className={`inline-block mt-1 ml-2 
                    ${darkMode 
                    ? 
                    'text-white transition-all duration-500' 
                    : 
                    'text-gray-600 transition-all duration-500'} 
                    ${item?.status ? "line-through" : ""}`}
                    >
                        {
                        editButton
                        ?
                        <div>
                            <input 
                            className={`px-2 pr-20 py-2 border rounded outline-none 
                            ${darkMode 
                            ? 
                            'bg-black2-lighter border-black2-light transition-all duration-500' 
                            : 
                            'bg-white transition-all duration-500' }`}
                            defaultValue={item?.title}
                            onChange={(e) => setNewTitle(e.target.value)}
                            onKeyDown={handleInputChange}
                            />
                            <button onClick={cancelButton} className="absolute right-22 ml-2 -mt-1.5 transform-cpu text-red-600 hover:text-red-400 rounded">
                                Cancel
                            </button>
                            <button onClick={confirmButton} className="absolute right-22 ml-2 py-2.5 mt-3 text-green-600 hover:text-green-400 rounded">
                                Confirm
                            </button>
                        </div>
                        :
                        item?.title
                        }
                    </div>
                </div>
                <button type="button"className="absolute right-0 flex items-center space-x-1">
                    <EditIcon onClick = {() => editHandler()}/>     
                    <DeleteIcon onClick = {() => deleteTodo(item)}/>
                </button>
            </li>
        </div>
    )
}