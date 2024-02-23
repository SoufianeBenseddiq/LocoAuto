import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <div className="App mx-auto">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
