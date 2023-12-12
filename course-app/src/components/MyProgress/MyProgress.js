import { createGlobalStyle } from 'styled-components'
import * as S from './MyProgressStyle'
import { useGetExercisesByIdQuery } from '../../Store/Service/Service'
import { useState } from 'react'


export default function MyProgress({ exercises, setIsModalOpen, setProgress }) {
  const { data, isLoading } = useGetExercisesByIdQuery()

  const filteredExercises = {}
  for (const key in data) {
    if (exercises.includes(key)) {
      filteredExercises[key] = data[key]
    }
  }

  if (isLoading) return <div>pfuheprf</div>

  const [userValues, setUserValues] = useState(
    Object.values(filteredExercises).map(() => 0),
  )

  const NumberArray = Object.values(filteredExercises).map(
    (exercise, index) => exercise.number_of_repetitions,
  )

  const handleInputChange = (value, index) => {
    const newValues = [...userValues]

    if (Number(value) <= NumberArray[index]) {
      newValues[index] = Number(value)
      setUserValues(newValues)
    } else {
      return
    }
  }

  const handleClickSend = () => {
    const ProgressArray = Object.values(filteredExercises).map(
      (exercise, index) => {
        return { id: exercise._id, number_of_repetitions: userValues[index] }
      },
    )
    setProgress(ProgressArray)
    setIsModalOpen(false)
  }

  return (
    <S.Wrapper>
      <S.BlockProgress>
        <S.TitleProgress>Мой прогресс</S.TitleProgress>
        {Object.values(filteredExercises).map((exercise, index) => (
          <S.BlockProgressBox key={index}>
            <S.BlockProgressBoxText>
              Сколько вы сделали: {exercise.question} (не более{' '}
              {NumberArray[index]})?
            </S.BlockProgressBoxText>
            <S.Inputs
              type={'number'}
              value={userValues[index]}
              onChange={(event) => handleInputChange(event.target.value, index)}
            />
          </S.BlockProgressBox>
        ))}
        <S.Button onClick={handleClickSend}>Отправить</S.Button>
      </S.BlockProgress>
    </S.Wrapper>
  )
}
