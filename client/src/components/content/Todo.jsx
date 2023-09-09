import './Todo.scss'
import React,{ useState, useEffect, useRef } from 'react'

export const Todo = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [todos, setTodos] = useState([]);
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
        if (title.trim() !== '' && description.trim() !== '') {
            setTodos([...todos, { title, description }]);
            setTitle('');
            setDescription('');
            setIstoggleTodoVisible(false);
        }
    }

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
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
               <input type="text" className='h-8' value={title} onChange={handleTitleChange } />
            </div>
            <div className='grid'>
               <label>Description:</label>
               <textarea className='h-40' value={description} onChange={handleDescriptionChange}/>
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
                    <p>{title}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-bold'>Description:</p>
                    <p>{description}</p>
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
