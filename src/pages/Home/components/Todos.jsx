/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import TodoList from "./TodoList"
import { useState, useEffect, useRef } from "react"
import { v4 as uuidv4 } from 'uuid';
import DarkModeButton from "./buttons/DarkModeButton";

export default function Todos(){

    // -------------HOOKS-------------

    const [todos, setTodos] = useState([
        {
            id:uuidv4(),
            title:"Go to the gym",
            status:false,
        },
        {
            id:uuidv4(),
            title:"Do my homeworks",
            status:false,
        },
    ])

    const [inputValue, setInputValue] = useState("");

    const [darkMode, setDarkMode] = useState(true)

    const [isErrorVisible, setIsErrorVisible] = useState(false);
    
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        // const interval = setInterval(() => {
        //     setSeconds(seconds + 1);
        // }, 1000);

        // return () => clearInterval(interval)

        setTimeout(() => {
            setSeconds(seconds + 1);
        }, 1000);

    }, [seconds])

    const checkboxRef = useRef(null);
    
    // -------------FUNCTIONS-------------

    const handleDarkModeCheckbox = () => {
        setDarkMode(prevDarkMode => !prevDarkMode); // Access the checked property of the checkbox
    };



    const formatTime = (time) => {
        const minute = Math.floor(time / 60).toString()
        const remainingSeconds = (time % 60).toString().padStart(2, '0');

        return `${minute}:${remainingSeconds}`
    }


    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        if (event.target.value.length > 0) {
            setIsErrorVisible(false);
        }
    };

    const addNewTodo = (event) => {
        if (event.key === 'Enter') {
            if (inputValue.length === 0) {
                alert("You didn't enter anything!")
            } else {
                setTodos([
                    ...todos,
                    {
                        id:uuidv4(), 
                        title: inputValue, 
                        status: false 
                    }
                ]);
                setInputValue("");
            }
        }
    }

    const deleteTodo = (item) => {
        let newTodos = todos.filter((todoItem => {
            return item.id != todoItem.id
        
        }))
        
        setTodos(newTodos)
    }

    const handleCheckbox = (item) => {
        let checkbox = todos.filter((todoItem) => {
            return item.status == todoItem.status
        })
        setTodos(prevTodos => prevTodos.map(todo => todo.id === item.id ? { ...todo, status: !todo.status } : todo));
    }

    const editTodoHandler = (todo, newTitle) => {
        let newTodos = todos.map((todoItem) => {
            if(todo.id === todoItem.id){
                todoItem.title = newTitle
            }
            return todoItem
        })
        setTodos(newTodos)
    }

    // -------------VARIABLES-------------
    



    return (
        <div className={`${darkMode ? 'bg-black2-dark transition-all duration-500' : 'bg-gray-100 transition-all duration-500'}`}>
            <div className="flex w-full items-center justify-center h-screen -mt-1.5">
                <div className={`w-full px-4 py-8 mx-auto shadow lg:w-1/3 ${darkMode ? 'bg-black2-light text-white transition-all duration-500' : 'bg-white transition-all duration-500'}`}>
                    <div className="flex items-center mb-6">
                        <h1 className="mr-6 text-4xl font-bold text-blue-600">TO D</h1>
                        <DarkModeButton DarkModeButton={handleDarkModeCheckbox}/>
                    </div>
                    
                    <div className="relative flex items-right">
                        <input
                            type="text"
                            placeholder="What needs to be done today?"
                            className={`w-full px-2 py-3 border rounded outline-none ${darkMode ? 'bg-black2-lighter border-black2-light transition-all duration-500' : 'bg-white transition-all duration-500' }`}
                            onChange={handleInputChange}
                            value={inputValue}
                            maxLength={50}
                            onKeyDown={addNewTodo}
                        />
                        <p className={`text-red-600 absolute mt-12 ${isErrorVisible ? 'visible' : 'invisible'}`}>You didn't enter anything!</p>
                        
                        <button 
                            className="absolute right-0.5 px-4 py-2 mt-1.5 text-blue-600 rounded hover:text-blue-400 "
                            onClick={() => {
                                if (inputValue.length === 0) {
                                    setIsErrorVisible(true);
                                } else {
                                    setTodos([...todos, { id:uuidv4(), title: inputValue, status: false }]);
                                    setInputValue("");
                                    setIsErrorVisible(false);
                                }
                            }}
                        >
                            Add
                        </button>
                    </div><br/><br/>

                    <div className={`w-max 
                        ${darkMode 
                        ? 
                        'bg-black2-light text-white transition-all duration-500' 
                        : 
                        'bg-white text-black transition-all duration-500'}`
                        }
                    >
                        <p className="text-blue-600">Using todo for {formatTime(seconds)}</p>
                    </div>


                    <TodoList editTodoHandler={editTodoHandler} todos={todos} darkMode={darkMode} deleteTodo={deleteTodo} handleCheckbox={handleCheckbox}/>
                </div>
            </div>
        </div>
    )
}
