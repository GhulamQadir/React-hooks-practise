import React, { useState } from 'react'




function App() {

  const [name, setName] = useState();
  const [bool, setBool] = useState(false)
  const [previousVal, setPreviousVal] = useState()
  const [count, setCount] = useState(0)




  // Using useState with array
  const [progLanguages, setProgLanguages] = useState()





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



  return (
    <div style={{ textAlign: "center" }}>
      <p>useState example 1</p>
      <h1>My name is {bool ? name : ""}</h1>
      <button onClick={changeName}>Change Name</button>
      <hr />
      <br />
      <br />


      {/*                         Counter App with (useState)                    */}
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button disabled={count === 0} onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={undo}>Undo</button>
      <hr />
      <br />
      <br />





    </div>
  )
}
export default App;