import React from 'react'

function Game({ question, onClickVariants, step, questions }) {
  const percentage = Math.round(step / questions.length * 100)
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <img alt='1' src={question.img} />
      <ul>
        {
          question.variants.map((text, index) => (
            <li onClick={() => onClickVariants(index)} key={text}>{text}</li>
          ))
        }
      </ul>
    </>
  )
}

export default Game
