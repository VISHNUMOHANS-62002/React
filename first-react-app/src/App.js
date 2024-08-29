
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionComponent  from './components/FunctionComponent'
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import BaseHoc from './hoc/BaseHoc';
function App() {
  const author="rk";
  const [name,setName]=useState("DT");
  return (
    <Routes>
      <Route path='/' element={<BaseHoc><ClassComponent/></BaseHoc>}/>
      <Route path='/function-component' element={<BaseHoc><FunctionComponent
      name={name} 
      age={10}
      author={author}
      setName={setName}
      /></BaseHoc>}></Route>
    </Routes>
   
  );
}

export default App;
// {
  /* <div className="App">
<p>Class Components</p>
<ClassComponent/>
<p>Function Components</p>
{/* 
<FunctionComponent name="Devtown" age={20} author={author}/> */
// }
// {
  /* <FunctionComponent name={name} age={20} author={author} setName={setName} />
    </div> */
  // } */}