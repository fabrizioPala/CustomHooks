import React, { useState } from 'react'

export default function useCounter() {
  const [counter,setCounter]=useState(0)
  function up(){
    setCounter(prevData=>prevData+1)
  }
  function down(){
    setCounter(prevData=>prevData-1)
  }
  function reset(){
    setCounter(0)
  }
  return{
    counter:counter,
    incremento:up,
    decremento:down,
    reset:reset
  }
  


}
