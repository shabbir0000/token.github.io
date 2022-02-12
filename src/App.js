//import logo from './logo.svg';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import NAV from './navbar';
import Footer from './Footer';
import Token from './Token';
import Roadmap from './Roadmap';

function App() {
  return (
    // <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        {/* <div className="flex w-full justify-center items-center">
          <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
            <div className="flex flex-1 justify-start items-start flex-col mf:mr-10"> */}
              <NAV/>
           <Routes>         
           <Route path="/*" element={ <Home/>} />         
           <Route path="/about" element={ <About/>} /> 
           <Route path="/token" element={ <Token/>} /> 
           <Route path='/roadmap' element={<Roadmap/>}/>
             
        </Routes>    
        <Footer/>
            </div>   
          // </div>  
    //      </div>
    //    </div>
    //  </div>
  );
}

export default App;
