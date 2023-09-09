import Todo from "../models/Todo.js";

export const getTodo = async (req, res) => {
    try {
        const todo = await Todo.find()
        res.status(200).json(todo)
    } catch (error) {
     res.status(401).json({message:error.message})   
    }
}

export const addTodo = async (req, res) => {
    try {
        const { title, description } = req.body;

        const newTodo = new Todo({
            title, description
        });
        await newTodo.save();
        res.status(201).json({ message: 'Todo added successfully', todo: newTodo });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const editTodo = async (req, res) => {
    try {
        const { id, title, description } = req.body;
        if (!id) {
            return res.status(400).json({ message: 'provide an id' })
        }
        const todoToedit = await Todo.findByIdAndUpdate(id, { title, description }, { new: true })
        
        if (!todoToedit) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json({ message: 'Todo edited', todo: todoToedit })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Server error' });
    }
}
export const deleteTodo = async (req, res) => {
    try {
      const { id } = req.body; 
      if (!id) {
        return res.status(400).json({ message: 'Please provide an ID for the todo to delete' });
      }
      const deletedTodo = await Todo.findByIdAndDelete(id);
      if (!deletedTodo) {
        return res.status(404).json({ message: 'Todo not found' });
      }
      res.status(200).json({ message: 'Todo deleted successfully', todo: deletedTodo });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };