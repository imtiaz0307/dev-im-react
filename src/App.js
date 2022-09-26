import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AppState from './context/AppState';
import Home from './Pages/Home';



function App() {
  return (
    <BrowserRouter>
      <AppState>
        <Routes>
          <Route path='/' element={<Home />} />

          {/* courses */}
          <Route path='/courses' element={
            <>
              <Navbar />
              <h1>COURSES WILL BE SHOWN HERE</h1>
            </>
          } />
          {/* blog */}
          <Route path='/blog' element={
            <>
              <Navbar />
              <h1>BLOG WILL BE SHOWN HERE</h1>
            </>
          } />
          {/* mailing */}
          <Route path='/mailing' element={
            <>
              <Navbar />
              <h1>MAILING FORM WILL BE SHOWN HERE</h1>
            </>
          } />



        </Routes>
      </AppState>
    </BrowserRouter>
  );
}

export default App;
