// import { Link } from "react-router-dom";
import LogoSvg from "../../svg_image/logo-svg/logoSvg";
import './login.css'

// надо реализовать переключение между регистрацией и входм

export default function SignInPage({isLoginMod = false}) {

  

    

    return (
        <div className="login">
    <div className="login__box">
        {/* <Link to="/login"> */}
         <LogoSvg/>
        {/* </Link> */}
      {isLoginMod ? (<>
      <div className="login__form">
        <input name="login" placeholder="почта" type="text" className="login__form-text"
        />
      <input name="password" placeholder="Пароль" type="text" className="login__form-text"/>
      <input name="password" placeholder="Повторите пароль" type="text" className="login__form-text/"/>
      </div>
       <button className="get__btn __btn" type="button">Зарегистрироваться</button>
      
      </>) : (<>
      
      </>
        )}
      <div className="login__form">
        <input name="login" placeholder="Почта" type="text" className="login__form-text"/>
      <input name="password" placeholder="Пароль" type="password" className="login__form-text"/>
      </div>
       <button className="get__btn __btn" type='button'>Войти</button>
       <button className="reg__btn __btn" type='button'>Зарегистрироваться</button>
    </div>
</div>

    )

}