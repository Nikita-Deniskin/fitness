import LogoSvg from "../svg-img/logo-svg/logoSvg";
import './login.css'



export default function LoginPageComponent () {

    return (
        <div className="login">
    <div className="login__box">
       <LogoSvg/>
      <div className="login__form">
        <input placeholder="Логин" type="text" className="login__form-text"/>
      <input placeholder="Пароль" type="password" className="login__form-text"/>
      </div>
       <button className="get__btn __btn" type='button'>Войти</button>
       <button className="reg__btn __btn" type='button'>Зарегистрироваться</button>
    </div>
</div>

    )

}