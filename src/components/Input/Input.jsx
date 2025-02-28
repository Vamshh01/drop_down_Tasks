 import React from 'react'
 import { useState } from 'react';
 
 const Input = ({onSubmit}) => {
    const [input,setInput] = useState("")

    const handleSubmit = ()=>{
        if(!input)return;
        onSubmit(input);
        setInput(""); 
    
    };
   return ( 
     <div className='container'>

        <input type='text' className='input' value={input} onChange={e=>setInput(e.target.value)}/> 
        <button className="button" onClick={handleSubmit}>Add</button> 
     </div> 
   )
 }
 
 export default Input