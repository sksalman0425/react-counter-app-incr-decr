import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//Here Count Componant is formed.
 const Count =(props)=>{
  //in props object we get all attributes which are passed from parent to child through props. customcount,customhandleClick,customname.
  return(
    <button onClick={()=>props.customhandleClick(props.customname)}>{props.customname}</button>
  );
 };


function App() {
 
    // const [counter, setCounter]=useState(0);
  //   const handleOnIncrementClick=()=>{
   //counter=counter+1 is wrong because we can set state value .i.e variable value only through setter function of useState().
  //   console.log("Increment counter click called");
  //   setCounter(counter+1);// this is rigth way of setting value of state in React.
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
    //we put count state here because app.js is parent componant of Count componant 
    //and we want state of both button should be depend on each other. 
    //if we put these useSate in Count componant then each componant have their own variable with lexical enviroment
    const handleClick =(value)=>{
      //here value get Increment/dercrement  from count componant's callback function
      // i.e.customhandleClick(props.customname). here data passed from child to parent through callback function 
      console.log('The value from child component to parent componant',value);
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

          
          {/* <button onClick={handleOnIncrementClick}> Counter Increment</button>
          <button onClick={handleOnDecrementClick}> Counter Decrement </button> */}
          {/* <div> {counter} </div> */}
          
          {/* <button onClick={()=>handleOnClick('Increment')}>Counter Increment</button>
          <button onClick={()=>handleOnClick('Decrement')}>Counter Decrement</button> 
          here call back function has reference that's why you don't directly pass arg from it,
           you have to write in an arrow function when you are passing arg as shown above.*/}
          {/* here Count componant called twice.here data is passed to props through custom attribute like customcount,customhandleClick,customname*/}
          <Count customcount={count} customhandleClick={handleClick} customname='Increment'/>
          <Count customcount={count} customhandleClick={handleClick} customname='Decrement'/>
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
