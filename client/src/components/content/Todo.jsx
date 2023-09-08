import './Todo.scss'
import React,{ useState, useEffect, useRef } from 'react'

export const Todo = () => {

    const [IstoggleTodoVisible, setIstoggleTodoVisible] = useState(false);
    const todoBoxRef = useRef(null);
    const toggleTodo = () => {
        setIstoggleTodoVisible(!IstoggleTodoVisible)
    }

    const handleClickOutside = (event) => {
        if (todoBoxRef.current && !todoBoxRef.current.contains(event.target)) {
          setIstoggleTodoVisible(false);
        }
    }

    const handleAddList = () => {
        setIstoggleTodoVisible(false);
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
    <>
    <div className='todo'>
        <div className='add-todo mt-16' onClick={toggleTodo}>
         <i class="fa-solid fa-plus"></i>
        </div>
        {IstoggleTodoVisible && (
            <div className='todo-box' ref={todoBoxRef}>
            <div className='grid'>
               <label>Title:</label>
               <input type="text" className='h-8'/>
            </div>
            <div className='grid'>
               <label>Description:</label>
               <textarea className='h-40'/>
            </div>
            <div className='grid'>
               <button className='add-btn' onClick={handleAddList}>Add list</button>
            </div>
         </div>     
        )}
    </div>
    </>
  )
}
