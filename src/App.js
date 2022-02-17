
import './App.css';
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom"
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          
        <Route path='/' element={<Home/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
          
          

         
        </Routes >
      </Router >

    </div>
  );
}

export default App;
