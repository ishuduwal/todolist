import mongoose from "mongoose"

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        require:true
    },
    description: {
        type: String,
        require:true
    }
})
const Todo = new mongoose.model("Todo", TodoSchema)
export default Todo;