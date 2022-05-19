import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from './pages/Main';
import About  from './pages/About';
import List from './pages/List';
import NotFound from './pages/NotFound';
import Service from "./pages/Sevice"


import { BrowserRouter,Routes,Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
<Routes>
  <Route path='/' element={<Main/>}/>
  <Route path='/list' element={<List/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/service' element={<Service/>}/>
  <Route path='/*' element={<NotFound/>}/>

</Routes>
    
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
