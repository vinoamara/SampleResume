import React from 'react';
import {Routes,Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/content/Home/Home';
import Aboutus from './components/content/About/Aboutus';
import Temp1 from './components/content/Templete/Templete1/Temp1'
import Temp2 from './components/content/Templete/Templete2/Temp2'
import Temp3 from './components/content/Templete/Templete3/Temp3'
import Temp4 from './components/content/Templete/Templete4/Temp4'

function App() {
  return (
    // <Developing/>
  <>
    
   
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<Aboutus/>}/>
      <Route path ='home/temp1' element={<Temp1/>}/>
      <Route path ='home/temp2' element={<Temp2/>}/>
      <Route path ='home/temp3' element={<Temp3/>}/>
      <Route path ='home/temp4' element={<Temp4/>}/>
    </Routes> 
    <Temp3/>
    </>
  );
}

export default App;

