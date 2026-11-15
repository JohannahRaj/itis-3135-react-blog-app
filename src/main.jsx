import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import {useState} from "react";
import "./index.css"
import App from './App.jsx'

//const MAXIMUM_LENGTH = 270;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

