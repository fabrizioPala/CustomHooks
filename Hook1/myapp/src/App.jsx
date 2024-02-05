import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HookCounter from './HookCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
<> 
<HookCounter/>
</>
)}
      
  

export default App
