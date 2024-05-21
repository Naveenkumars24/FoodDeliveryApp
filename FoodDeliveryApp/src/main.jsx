import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Route, Router, Routes } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

import Nav from './components/Nav.jsx';
import Trichy from './components/Trichy.jsx';
import Namakkal from './components/Namakkal.jsx';
import Cbe from './components/Cbe.jsx';
import Menu from './Menu.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element= {<Nav/>} />
    <Route path='/cbe' element= {<Cbe/>} />
    <Route path='/trichy' element= {<Trichy/>} />
    <Route path='/namakkal' element= {<Namakkal/>} />
    <Route path='/menupage' element= {<Menu/>} />
  </Routes>
  </BrowserRouter>
)