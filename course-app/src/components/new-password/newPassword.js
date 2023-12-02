import LogoSvg from "../../svg_image/logo-svg/logoSvg";
import '../../pages/sign_inup/login.css'


export default function NewPassword ({onClick, setNew}) {

  const setDataChange = (event, setData) => {
    setData(event.target.value)
  }

    return (
        <div className="login">
        <div className="login__box password">
            <LogoSvg/>
        
          <div className="login__text">
            <h3>Новый пароль:</h3>
          </div>
    
          <div className="login__form login__form-new">
            <input name="password" placeholder="Проль" type="password" className="login__form-text" onChange={(event) => setDataChange(event, setNew)}/>
          <input name="password" placeholder="Повторите пароль" type="password" className="login__form-text"
          onChange={(event) => setDataChange(event, setNew)}/>
          </div>
          <button onClick={onClick} className="get__btn_new  __btn" type="button">Сохранить</button>
        </div>
        
    </div>
    )
}