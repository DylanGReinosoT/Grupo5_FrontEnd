import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Header from './Header';
import Home from './pages/Home';
import About from './pages/About';
import Animals from './pages/Animals';



function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/conocenos' element={<About/>}/>
        <Route path='/animales' element={<Animals/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
