
import './App.css';
import Catalog from './page/Catalog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detail from './components/Detail';
import Searcing from './components/Searcing';
import Home from './page/Home';

function App() {
  return (
    <>
     <Router>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/catalog' element={<Catalog/>}/>
         <Route path="/movies/:movieId" element={<Detail/>} />
         <Route path="/searching" element={<Searcing/>}/>
       </Routes>
     </Router>
    </>
  );
}

export default App;
