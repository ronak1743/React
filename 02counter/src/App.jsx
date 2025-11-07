import { useState } from 'react'
import './App.css'

function App(){
  let [counter,serCounter]=useState((Math.floor(Math.random()*(20))));
  return(
    <>
    <h1>Counter value:{counter}</h1>

    <button onClick={()=>{
      
      counter=counter+1;
      if(counter>20){
        counter=0;
      }
      serCounter(counter);
      }}>Increse counter value {counter}</button>

      <br />
      <br />

      <button onClick={()=>{

      counter=counter-1;
      if(counter<0){
        counter=20;
      }
      serCounter(counter);
      }}>Decrese counter value {counter}</button>
    </>
    
  )
}
export default App
