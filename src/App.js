import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


 const Count =(props)=>{
  return(
    <button onClick={()=>props.handleClick(props.name)}>{props.name}</button>
  );
 };


function App() {
 
    // const [counter, setCounter]=useState(0);
  //   const handleOnIncrementClick=()=>{
   //counter=counter+1 is wrong. we can can state value only through setter
  //   console.log("Increment counter click called");
  //   setCounter(counter+1);
  // };
  //   const handleOnDecrementClick =()=>{
  //     console.log("Decrement counter click called");
  //     setCounter(counter-1);
  //   }
    // const handleOnClick =(value)=>{
    //   console.log("onclick the value of argument",value);
    //   if(value==="Increment"){
    //   setCounter(counter+1)
    // }else{
    //   setCounter(counter-1)
    // }
    // }
    const [count,setCount]=useState(0);
    const handleClick =(value)=>{
      console.log('The value from child component',value);
      if(value==='Increment'){
        setCount(count+1);
      }else{
        setCount(count-1);
      }
    
    }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

          {/* <button onClick={()=>handleOnClick('Increment')}>Counter Increment</button>
          <button onClick={()=>handleOnClick('Decrement')}>Counter Decrement</button> */}
          {/* <button onClick={handleOnIncrementClick}> Counter Increment</button>
          here call back function has reference that's why you don't directly pass arg from it,
           you have to write in an arrow function when you are passing arg as shown above. 
          <button onClick={handleOnDecrementClick}> Counter Decrement </button> */}
          {/* <div> {counter} </div> */}
          <Count count={count} handleClick={handleClick} name='Increment'/>
          <Count count={count} handleClick={handleClick} name='Decrement'/>
          <div> Counter: {count}</div>
         
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
