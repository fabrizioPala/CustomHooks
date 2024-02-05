import React, { useState } from 'react'
import useCounter from './useCounter'

function HookCounter() {
    const{counter, incremento , decremento , reset}=useCounter()
  return (
    <div>
        <p>{counter}</p>
        <button onClick={incremento}>Up</button>
        <button onClick={decremento}>Down</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default HookCounter