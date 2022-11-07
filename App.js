import React from 'react'
import './App.css';
import JSONDATA from './MOCK_DATA.json';
import { useState } from 'react';
export const App = () => {
  const [searchValue, setSearchValue] = useState("")
  return (
    <div className='main'>
      <input className='searchBar' type="text" placeholder='Search...' onChange={(event)=>{
        setSearchValue(event.target.value);
      }}/>
      
      {JSONDATA.filter((val)=> {
        
        if (searchValue==="") {
          return val;
        } else if(val.first_name.toLowerCase().includes(searchValue.toLowerCase())){
          return val;
        }
      })
     
      .map((value, key)=>{
            return <div><p>{value.first_name}</p></div>
      })}
    </div>
  )
}
export default App;