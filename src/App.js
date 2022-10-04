import logo from './logo.svg';
import './App.css';
import 'animate.css';
import Login from './components/connection';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/home';
import Caisse from './components/caisse/caisse';
import SheetGoogleApi from './utils/Services/googleSheetApi';
import Caiss from './components/caisse/c';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Login />}/>
 
      <Route exact path="/dashboard" element={<Home />}/>
      <Route exact path="/8" element={<Caiss />}/>
      <Route exact path="/1" element={<SheetGoogleApi />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
