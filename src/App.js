import React, { useState } from 'react'
import Game from './components/Game'
import Result from './components/Result'
import './App.scss'

function App() {
  const questions = [
    {
      title: 'Какой фильм изображён на картинке?',
      img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/42921771-089b-4c19-b87f-31b0bb074f7c/orig',
      variants: ['Рататуй', 'Вкус жизни', 'ВАЛЛ·И', 'Вверх'],
      correct: 0,
    },
    {
      title: 'Какой фильм изображён на картинке?',
      img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/3f4a38c8-020c-43aa-ba31-49faa2e6a08d/orig',
      variants: ['Матрица', 'Тор', 'Железный человек', 'Доктор Стрэндж'],
      correct: 3,
    },
    {
      title: 'Какой фильм изображён на картинке?',
      img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/013df19b-da5b-4d5f-9802-d434733c06bf/orig',
      variants: ['Рататуй', 'Как приручить дракона', 'Вверх', 'Гадкий я'],
      correct: 3,
    },
    {
      title: 'Какой фильм изображён на картинке?',
      img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/59f31cf4-e4b4-47cc-a7f0-b6bf07c9e185/orig',
      variants: [
        'Морской бой',
        'Скайлайн',
        'День независимости',
        'Война миров',
      ],
      correct: 3,
    },
    {
      title: 'Какой фильм изображён на картинке?',
      img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/93803eaa-c8fc-4bf0-9a90-69b066c12b8d/orig',
      variants: [
        'Третий лишний',
        'Гарфилд',
        'Бобер',
        'Миллион способов потерять голову',
      ],
      correct: 0,
    },
    {
      title: 'Какой фильм изображён на картинке?',
      img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/77025ff3-db42-4b86-bbe5-de97b1f0b03e/orig',
      variants: [
        'Богатенький Ричи',
        'Один дома 2: Затерянный в Нью-Йорке',
        'Трудный ребенок 2',
        'Трудный ребенок',
      ],
      correct: 1,
    },
    {
      title: 'Какой фильм изображён на картинке?',
      img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/6f592ffd-4a1a-48e8-8305-c2c6d9e1f54d/orig',
      variants: [
        'Хроники Нарнии: Лев, колдунья и волшебный шкаф',
        'Властелин колец: Возвращение короля',
        'Гарри Поттер и Орден Феникса',
        'Гарри Поттер и Принц-полукровка',
      ],
      correct: 1,
    },
    {
      title: 'Какой фильм изображён на картинке?',
      img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/81cb2717-8999-4085-a4f3-303f2576574c/orig',
      variants: ['Зеленая миля', 'Мотылек', 'Побег из Шоушенка', 'План побега'],
      correct: 2,
    },
    {
      title: 'Какой фильм изображён на картинке?',
      img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/a1576bf7-f1eb-499d-8eb9-fb0b95ed9718/orig',
      variants: ['Ледниковый период', 'Мадагаскар 2', 'Шрэк', 'В поисках Немо'],
      correct: 0,
    },
    {
      title: 'Какой фильм изображён на картинке?',
      img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/5465319e-3bc6-436d-af7e-f69944464972/orig',
      variants: [
        'Хроники Нарнии: Принц Каспиан',
        'Гарри Поттер и Орден Феникса',
        'Мост в Терабитию',
        'Перси Джексон и похититель молний',
      ],
      correct: 1,
    },
    {
      title: 'Какой фильм изображён на картинке?',
      img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/d0e457a3-1677-4c72-9a98-4e5e3374b561/orig',
      variants: ['Шрэк', 'Красавица и чудовище', 'Золушка', 'Холодное сердце'],
      correct: 1,
    },
    {
      title: 'Какой фильм изображён на картинке?',
      img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/9e377743-ba1d-4aca-9990-dfe88ea3320e/orig',
      variants: ['Экзамен', 'Сквозь снег', 'Платформа', 'Куб'],
      correct: 2,
    },
    {
      title: 'Какой фильм изображён на картинке?',
      img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/bb1d3485-1087-4f09-bf08-ae63d613508a/orig',
      variants: ['Вверх', 'Тачки', 'Корпорация монстров', 'Суперсемейка'],
      correct: 0,
    },
    {
      title: 'Какой фильм изображён на картинке?',
      img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/874c2ce9-72c0-44d8-a761-a73bcc62cef8/orig',
      variants: ['Я, робот', 'Суррогаты', 'Трансформеры', 'Особое мнение'],
      correct: 0,
    },
    {
      title: 'Какой фильм изображён на картинке?',
      img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/3afc3a0d-7a66-4b9f-a06b-6fbd533b2d04/orig',
      variants: [
        'Дневник памяти',
        'Авиатор',
        'Великий Гэтсби',
        'Светская жизнь',
      ],
      correct: 2,
    },
    {
      title: 'Какой фильм изображён на картинке?',
      img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/f9c9423e-eddd-4925-a0cf-3d8c90e788e1/orig',
      variants: ['Непослушник', 'Шоу Трумана', 'Холоп', 'Игра'],
      correct: 2,
    },
    {
      title: 'Какой фильм изображён на картинке?',
      img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/7cc10427-c0f3-45c3-9845-3c4c32a1c0f3/orig',
      variants: [
        'Мстители',
        'Мстители: Война бесконечности',
        'Новый Человек-паук: Высокое напряжение',
        'Человек-паук: Возвращение домой',
      ],
      correct: 3,
    },
    {
      title: 'Какой фильм изображён на картинке?',
      img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/77ad136f-ab96-4a9f-947b-39712b5882a9/orig',
      variants: ['Прометей', 'День независимости', 'Обливион', 'Я — легенда'],
      correct: 2,
    },
  ]
  console.log(questions.length)
  const [step, setStep] = useState(0)
  const question = questions[step]
  const [correct, setCorrect] = useState(0)

  const onClickVariants = (index) => {
    console.log(step, index)
    setStep(step + 1)

    if (index === question.correct) {
      setCorrect(correct + 1)
    }
  }
  return (
    <div className="App">
      {step === questions.length ? (
        <Result correct={correct} questions={questions} />
      ) : (
        <Game
          questions={questions}
          step={step}
          question={question}
          onClickVariants={onClickVariants}
        />
      )}
    </div>
  )
}

export default App
