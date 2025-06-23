import * as React from 'react'
import { useState } from 'react';


function App() {
  const [Count, setCount] = useState(0);

    function increment() {
      setCount(Count + 1);
    }

    function decrement() {
      setCount(Count - 1);
    };

    function reset() {
      setCount(0);
    }

  return (
    <>
        <div className="
        flex flex-col items-center  gap-2 p-2 md:gap-10 rounded-2xl
        ">
        <h1 className="text-2xl font-bold">Counter App</h1>
        <Counterapp  Count={Count} onIncrement={increment} onDecrement={decrement} reset={reset}/>

        </div>

      </>
  )
}

function Counterapp({Count, onIncrement, onDecrement, reset}) {
  return (
    <>
      <h2 className='text-2xl font-bold'>{Count}</h2>
      <button className='bg-sky-200 size-32 rounded-full'onClick={onIncrement}>
        Increment
      </button>
      <button className='bg-sky-200 size-32 rounded-full' onClick={reset}>
        Reset
      </button>
      <button className='bg-sky-200 size-32 rounded-full'onClick={onDecrement}>
        Decrement
      </button>

    </>
  )
}

export default App
