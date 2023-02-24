import React from 'react'

function Result({ correct, questions }) {
  const info = () => {
    if (correct <= 3) {
      return `Вы вообще смотрите фильмы? Попробуйте снова`
    } else if (correct <= 5) {
      return `Не плохо, но стоит всё же чаще смотреть фильмы!`
    } else if (correct <= 12) {
      return `Круто, да Вы почти киноман!`
    } else if (correct <= 16) {
      return `Вы случайно не чемпион мира по разгадыванию фильмов?`
    } else if (correct <= 18) {
      return `Кто-то частенько любит смотреть фильмы, киноман, поздравляю!`
    }
  }
  return (  
    <div className='result'>
      <img alt='img' src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png' />
      <h2>Вы отгадали {correct} из {questions.length}</h2>
      <h3>{info()}</h3>
      <a href='/'>
        <button>Попробовать снова</button>
      </a>
    </div>
  )
}

export default Result