import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import PHACAV from "./pages/projects/PHACAV"
import Swipe from "./pages/projects/Swipe"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects/PHACAV" element={<PHACAV/>}/>
          <Route path="/projects/Swipe" element={<Swipe/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
