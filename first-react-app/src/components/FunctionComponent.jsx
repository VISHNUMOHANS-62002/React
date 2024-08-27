
import React,{useState} from 'react';


function FunctionComponent({name,age,author,setName}) {
  
  const[changeName,setChangeName]=useState("");
  const reduceCount=()=>{
    setCount(count-1)
  }
  const[count,setCount]=useState(0);
    return (
      <div className="App">
         <p>Functional Components </p>
         <button onClick={()=>setCount(count+1)}>Click here to increment/add</button>
         <button onClick={reduceCount}>Click here to decrement</button>
         <h2>{count}</h2>
         <h4>My company name is {name} it is of {age} yrs old and the author is {author}</h4>
         <input onChange={(e)=>setChangeName(e.target.value)}/>
         <button onClick={()=>setName(changeName)}>Change name to ...</button>
      </div>
    );
  }
  
  export default FunctionComponent;
  