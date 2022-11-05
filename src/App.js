import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AppState from './context/AppState';
import Blog from './Pages/Blog';
import Courses from './Pages/Courses';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Mailing from './Pages/Mailing';



function App() {
  return (
    <BrowserRouter>
      <AppState>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/mailing' element={<Mailing />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </AppState>
    </BrowserRouter>
  );
}

export default App;
