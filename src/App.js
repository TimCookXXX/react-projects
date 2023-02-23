import React, { useState } from 'react'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  const onClickPlus = () => {
    setCount(count + 1)
  }

  const onClickMinus = () => {
    if (count <= 0) {
      return count
    } else {
      setCount(count - 1)
    }
  }

  return (  
    <div className='counter'>
      <h2 className='counter__title'>Счётчик:</h2>
      <h1 className='counter__result'>{count}</h1>
      <button className='counter__btn' onClick={onClickMinus}>Минус</button>
      <button className='counter__btn' onClick={onClickPlus}>Плюс</button>
    </div>
  )
}

export default App