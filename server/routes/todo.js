import express from 'express'
import { getTodo, addTodo, editTodo, deleteTodo } from '../controller/Todo.js';
const router = express.Router();

router.get('/', getTodo)
router.post('/add', addTodo)
router.post('/edit', editTodo)
router.post('/delete', deleteTodo)

export default router;