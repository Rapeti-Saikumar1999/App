import React ,{useEffect, useRef, useState}from 'react'
// accessing the DOM elements using useRef hook
function App() {
  const [text,setText] = useState("");
  const userDom = useRef('');

  const focus =()=>
  {
    userDom.current.focus();
  }

  // first commit
 
  return (
    <div>
      <input type="text" onChange={(e)=>setText(e.target.value)} ref={userDom}></input>
      <h4>{text}</h4>
      <button onClick={focus}>click</button>
    </div>
  )
}

export default App
