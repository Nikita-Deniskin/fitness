import LogoSvg from "../../svg image/logo-svg/logoSvg";
import '../loginpage/login.css'


export default function NewLogin () {
    return (
        <div className="login">
        <div className="login__box login__new ">
        <LogoSvg/>
          <div className="login__text">
            <h3>Новый логин:</h3>
          </div>
        
          <div className="login__form login__form-new">
            <input placeholder="Логин" type="text" className="login__form-text"/>
          </div>
          <button className="get__btn_new  __btn " type='button'>Сохранить</button>
        </div>
        
        </div>
    )
}

