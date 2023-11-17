import ArrowSvg from "../../helpers/svg-img/arrow-svg/arrowSvg";
import LogoSvg from "../../helpers/svg-img/logo-svg/logoSvg";

import "./personal.css"


export default function PersonalAccount() {
 return (
    <div>
<header className="center">
    <nav className="header__nav">

      <LogoSvg/>
      
      <div className="header__user-box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
        >
          <circle cx="25" cy="25" r="25" fill="#D9D9D9" />
        </svg>

        <p className="header__user">Сергей</p>

         <ArrowSvg/>

      </div>
    </nav>
  </header>

  <div className="profile center">
    <h2 className="profile__title">Мой профиль</h2>

    <div className="profile__user">
      <p className="profile__user_login">Логин: sergey.petrov96</p>
      <p className="profile__user_pass">Пароль: 4fkhdj880d</p>
    </div>

    <div className="profile__button">
      <button className="button__edit __btn" type="button">Редактировать логин</button>
      <button className="button__edit __btn" type="button">Редактировать пароль</button>
    </div>
  </div>

  <article className="center content user">
    <h2 className="content__title">Мои курсы</h2>
    <ul className="content__grid">
        <li className="content__grid-item content__grid-item1 content__grid_shadow"><h3 className="card-courses-title">Йога</h3><button className="content__btn" type="button">Перейти →</button></li>
        <li className="content__grid-item content__grid-item2 content__grid_shadow"><h3 className="card-courses-title">Стретчинг</h3><button className="content__btn" type="button">Перейти →</button></li>       
        <li className="content__grid-item content__grid-item5 content__grid_shadow"><h3 className="card-courses-title">Бодифлекс</h3><button className="content__btn" type="button">Перейти →</button></li>
    </ul>
</article>
    </div>
    
 )
}