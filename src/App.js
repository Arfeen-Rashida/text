//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');// whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
      setAlert({
         msg: message,
         type: type 
      })
      setTimeout(() => {
         setAlert(null);
      }, 1500);
  }
  const toggleMode = ()=>{
     if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode';
     // setInterval(() => {                               //for attention seeking
       //  document.title = 'TextUtils is amazing';
     // }, 2000);
     // setInterval(() => {
       //  document.title = 'Install TextUtils now';
     // }, 1500);
     }
     else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtils - Light Mode';
     }
  }
  
   return (
      <>
         {/*<BrowserRouter>*/}
         
         <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
         <Alert alert={alert}/>
         <div className="container my-3">
         {/*<Routes>
         
                  <Route exact path="/about" element={<About/>}>                   
                  </Route>
                  <Route exact path="/" element={*/}
                     <TextForm showAlert={showAlert} heading="Enter the text" mode={mode}/>  
                 {/* }>    
                  </Route>
                  
         </Routes>*/}
         </div>
         
         {/*</BrowserRouter>*/}
      </>
      );
}

export default App;
