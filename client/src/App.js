import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from '../src/components/navbar/Navbar.jsx'
import { Todo } from '../src/components/content/Todo.jsx'
import { Login } from './components/user/Login';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/login" element={<Login />}/>
        </Routes>
      </Router>
      <Todo></Todo>
    </>
  );
}

export default App;
