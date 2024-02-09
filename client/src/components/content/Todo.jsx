import './Todo.scss'
import React, { useState, useEffect, useRef } from 'react'
import { getTodo, addTodo, deleteTodo } from '../../api/Todo';

export const Todo = () => {
    const [todo, setTodo] = useState([]);
    const [newTodo, setNewTodo] = useState({
        title: '',
        description: ''
    })

    const fetchData = async () => {
        try {
            const data = await getTodo();
            setTodo(data);
        } catch (error) {
            console.error('Error fetching todo:', error);
        }
    };
    useEffect(() => {
      
        fetchData();
    }, []);
      
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTodo({
            ...newTodo, [name]: value,
        });
    }

    const handleAddTodo = async (e) => {
        e.preventDefault();
        try {
            const response = await addTodo(newTodo);
            setTodo([...todo, response.todo]);
            setNewTodo({
                title: '',
                description: ''
            })
            toggleTodo();
     } catch (error) {
            console.log('Error adding todo:', error);
    }
    }
    const handleDeleteTodo = async (id) => {
        try {
            const deleteID = { id }
            var res = await deleteTodo(deleteID);
            fetchData()
            
        } catch(error) {
            console.error('error deleteing todo:', error);
            if (error.response) {
                console.error('Response data:', error.response.data);
            }
        }
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
                <form onSubmit={handleAddTodo}>
                  <div className='grid'>
                     <label>Title:</label>
                     <input type="text" className='h-8' name='title' value={newTodo.title} onChange={handleInputChange}/>
                  </div>
                  <div className='grid'>
                     <label>Description:</label>
                     <textarea className='h-40' name='description' value={newTodo.description} onChange={handleInputChange}/>
                  </div>
                  <div className='grid flex justify-center items-center'>
                     <button className='add-btn' type='submit'>Add list</button>
                  </div>
                </form>
            </div>     
        )}
        <div className='grid added-todo justify-center items-center mb-8'>
            {todo.map((todo)=>
            <div key={todo._id} className='text-area-todo gap-2 flex justify-between'>
              <div>
                <div className='flex gap-1'>
                    <p className='font-bold'>Title:</p>
                    <p>{todo.title}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-bold'>Description:</p>
                    <p>{todo.description}</p>
                </div>
              </div>
               <div className='text-xl flex gap-5 btn-add-edit justify-center items-center'>
                 <div className='cursor-pointer'>
                    <i class="fa-solid fa-pen-to-square"></i>
                 </div>
                <div className='cursor-pointer' onClick={()=>handleDeleteTodo(todo._id)}>
                    <i class="fa-solid fa-trash"></i>
                </div>
              </div>
            </div>
            )}
        </div>
    </div>
    </>
  )
}
