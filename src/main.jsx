import React from 'react'
import ReactDOM from 'react-dom/client'
import { ClassCompForm } from './ClassComp/ClassCompForm.jsx'
import FunctionComponentForm from './ClassComp/FunctionComponentForm.jsx'
import { OneCC } from './ClassComp/OneCC.jsx'
import TwoCC from './ClassComp/TwoCC.jsx'
import TestForm from './TestForm.jsx'
import CheckBox from './checkBox.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TestForm />
  </React.StrictMode>,
)