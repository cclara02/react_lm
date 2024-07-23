import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './compontens/Header'; //no colocar la extension js
// traeme el componente header desde ruta para llegar al js
import Nav from './compontens/Nav';
import Footer from './compontens/Footer';
import HomePage from './pages/Homepage';
import Ejemplo1 from './pages/Ejemplo1';
import Ejemplo2 from './pages/Ejemplo2';
import Ejemplo3 from './pages/Ejemplo3';
import CargaJson from './pages/Ejemplo4';
import DatosApi from './pages/Ejemplo5';

function App() {
  return (
    <div className="App">
      {/* {<Header></Header>} */}
      <Header/>
      <BrowserRouter>
        <Nav/>
       <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/ejemplo1' element={<Ejemplo1/>}/>
        <Route path='/ejemplo2' element={<Ejemplo2/>}/>
        <Route path='/ejemplo3' element={<Ejemplo3/>}/>
        <Route path='/ejemplo4' element={<CargaJson/>}/>
        <Route path='/ejemplo5' element={<DatosApi/>}/>
        {/* aca van los links */}
        </Routes> 
      </BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default App;
