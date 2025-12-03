import { useState } from 'react'
import './App.css'
import Description from './Description/Description'
import Notification from './Notification/Notification'

function App() {


  return (
    <div className="container">
      <Description />
      <Notification />
    </div>
  );
}

export default App
