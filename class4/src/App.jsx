import { useState } from 'react'

import React, { useEffect } from 'react'
import { use } from 'react';

function App() {
  const [Text, setText] = useState('');
  const changeHandler = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  }

  // useEffect(() => {
  //   console.log("ui rendering done");

  // })



  // 2nd variation

  // useEffect(() => {
  //   console.log("ui rendering done one time");
   
  // }, [])

  // 3rd variation
  // useEffect(() => {
  //   console.log("ui rendering done one time");
  //   return () => {
  //     console.log("clean up code");
  //   }
  // }, [])

  // 4th variation

  // useEffect(() => {
  // useEffect(() => {
  //   console.log("ui rendering done one time");
  //   return () => {
  //     console.log("clean up code");
  //   }
  // }, [Text])
  
  // 5th variation handle unmounting of component
   
  useEffect(() => { 
    console.log("ui rendering done one time");
    return () => {
      console.log("clean up code");
    }
  }
  , [])



  return (
    <>
      <input type="text"  onChange={changeHandler} />
     
    </>
  )
}

export default App
