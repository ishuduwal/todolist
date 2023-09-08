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
        <div className='flex added-todo justify-center items-center mb-8'>
            <div className='text-area-todo gap-2 grid'>
                <div className='flex gap-1'>
                    <p className='font-bold'>Title:</p>
                    <p>Complete redux course</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-bold'>Description:</p>
                    <p>It will be a busy so keeping it here can save my day from missing.</p>
                </div>
            </div>
            <div className='text-xl flex gap-5 btn-add-edit'>
                <div className='cursor-pointer'>
                    <i class="fa-solid fa-pen-to-square"></i>
                </div>
                <div className='cursor-pointer'>
                    <i class="fa-solid fa-trash"></i>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
