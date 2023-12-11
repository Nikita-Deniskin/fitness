import { createGlobalStyle } from 'styled-components'
import * as S from './CorrectLoginStyle'


export default function CorrectLogin({ onClick, setNew }) {
  const setDataOnChange = (event, setData) => {
    setData(event.target.value)
  }

  return (
    <S.PageContainer>
      {/* <GlobalStyle /> */}
      <S.ModalForm>
        <S.ModalLogo>
          <S.ModalLogoImage src="../../img/logo.png" alt="logo" />
        </S.ModalLogo>

        <S.LoginName>Новый логин:</S.LoginName>
        <S.Inputs>
          <S.ModalInput
            type="text"
            name="login"
            placeholder="Логин"
            onChange={(event) => setDataOnChange(event, setNew)}
          />
        </S.Inputs>
        <S.Buttons>
          <S.PrimaryButton onClick={onClick}>Сохранить</S.PrimaryButton>
        </S.Buttons>
      </S.ModalForm>
    </S.PageContainer>
  )
}
