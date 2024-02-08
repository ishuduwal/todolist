import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from '../src/components/navbar/Navbar.jsx'
import { Todo } from '../src/components/content/Todo.jsx'
import { Login } from './components/user/Login';
import { Signup } from './components/user/Signup';


function App() {
  return (
    <>
      <div className='app'>
        <Router>
        <Navbar />
        <div className='body'>
        <Routes>
          <Route path='/' element={<Todo />} />
          <Route path="/login" element={<Login />}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
        </div>
        </Router>
      </div>
    </>
  );
}

export default App;
