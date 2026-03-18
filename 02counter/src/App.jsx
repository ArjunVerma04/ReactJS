import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
 

  // let counter = 5

  const addValue  = () => {
    setCounter((counter) =>
      counter < 20 ? counter + 1 : counter
    )
    console.log("clicked", counter)
  }

  const removeValue = () => {
    setCounter((counter) => 
      counter > 0 ? counter - 1 : counter
    )
  };

  return (
    <>
     <h1>React on YouTube</h1>
     <h2>Counter Value: {counter}</h2>

     <button 
     onClick={addValue}
     >Add value: {counter}</button>

     <button 
     onClick={removeValue}
     >Remove value {counter}</button>
    </>
  )
}

export default App