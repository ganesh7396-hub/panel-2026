import React from 'react';
import { useState,useEffect } from 'react'

function App() {
  
  const [users,setUsers]=useState([]);
  
  useEffect(()=>{
    
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((data)=>setUsers(data))
    
  },[])


  return (
    <div >
      
     {users.map((item)=>(
     <li key={item.id}>{item.name} - {item.email}</li>
     
     )
     
       
     )}
  
    </div>
  )
}

export default App
