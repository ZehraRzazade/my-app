import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import store from './redux/store'
import Posts from './posts';

function App() {
 
   const [input,setInput]=useState('')
   const changeState=(e)=>{
     setInput(e.target.value)
   }
  //   const removeElement =()=>{

  // }
  const addInput=()=>{
   store.dispatch({
    type: "ADD_TO_POSTS" ,
    payload:{
      post:input
    }
   })
  }
  return(
    <div>
      <header>
        <input type="text" onChange={changeState}/>
        <button onClick={addInput}>Add</button>
        
      </header>
      <Posts/>
    </div>
  )
}

export default App;
