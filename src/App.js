import React, { useState } from 'react'
import './App.css'
import UseEffectExampleComponent from './hooks/useEffectExample';



function App() {

  const [name, setName] = useState();
  const [bool, setBool] = useState(false)
  const [previousVal, setPreviousVal] = useState()
  const [count, setCount] = useState(0)

  // Using useState with array
  const [language, setLanguage] = useState([])
  const [languages, setLanguages] = useState([])








  function changeName() {
    setBool(!bool)
    setName("Ghulam Qadir Sakaria")
  }




  /////////                Counter App Functionality           ////////
  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setPreviousVal(count)
    setCount(count - 1)
  }

  function reset() {
    setPreviousVal(count)
    setCount(0)
  }

  function undo() {
    setCount(previousVal)
  }



  // useState with array of objects
  function addLanguage() {
    setLanguages([...languages, { language }])     // getting languages array and adding new language in an array
    setLanguage("")
  }



  return (
    <div style={{ textAlign: "center" }}>
      <p>useState example 1</p>
      <h1>My name is {bool ? name : ""}</h1>
      <button onClick={changeName}>Change Name</button>
      <hr />
      <br />
      <br />


      {/*                         Counter App with (useState)                    */}
      {/* <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button disabled={count === 0} onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={undo}>Undo</button>
      <hr />
      <br />
      <br /> */}





      {/* (useState) with array of objects */}
      <h1>Add Your Favourite Languages</h1>
      <br />
      <input type="text" value={language} placeholder='add lang'
        onChange={(e) => {
          setLanguage(e.target.value)
        }} />

      <button onClick={addLanguage}>Add lang</button>
      <br />
      <br />
      {languages.map((value, index) => {
        return <h2 key={index}>{`${index + 1}: ${value.language}`}</h2>
      })}
      <hr />
      <br />
      <br />
      <br />



      {/*               UseState Example Component                   */}
      <button onClick={() => setBool(!bool)} className='useEffect_comp_btn'>Show (useEffect) example component</button>
      {bool ? <UseEffectExampleComponent /> : ""}
    </div>
  )
}
export default App;