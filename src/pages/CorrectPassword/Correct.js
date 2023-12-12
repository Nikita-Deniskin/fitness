import { createGlobalStyle } from 'styled-components'
import * as S from './CorrectStyle'


export default function CorrectPassword({ onClick, setNew }) {
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
        <S.LoginName>Новый пароль:</S.LoginName>
        <S.Inputs>
          <S.ModalInput
            type="password"
            name="password"
            placeholder="Пароль"
            onChange={(event) => setDataOnChange(event, setNew)}
          />
          <S.ModalInput
            type="password"
            name="repeat-password"
            placeholder="Повторите пароль"
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
