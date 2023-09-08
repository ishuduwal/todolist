import './App.css';
import { Navbar } from '../src/components/navbar/Navbar.jsx'
import { Todo } from '../src/components/content/Todo.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Todo />
    </>
  );
}

export default App;
