import LogoSvg from "../../svg_image/logo-svg/logoSvg";
import "./course.css"



export default function CourseInfo() {
    return (
        <>
        <header className="center">
        <nav className="header__nav">
          <div className="nav__logo">

            <LogoSvg/>
           
          </div>
        </nav>
      </header>
  
      <main className="course center">
        <div className="course__box">
          <h1 className="course__yoga">Йога</h1>
          <div className="course__img-box">
          <img className="course__img" src="../img/card-violet.png" alt=""/>
        </div>
        </div>
      </main>
  
      <div className="tender center">
        <h2 className="tender__title">Подойдет для вас, если:</h2>
        <div className="tender__offers offers">
          <div className="offers__box">
            <div className="offers__number"><p>1</p></div>
            <div className="offers__text">
              <p>Давно хотели попробовать йогу, но не решались начать.</p>
            </div>
          </div>
          <div className="offers__box">
            <div className="offers__number"><p>2</p></div>
            <div className="offers__text">
              <p>
                Хотите укрепить позвоночник, избавиться от болей в спине и
                суставах.
              </p>
            </div>
          </div>
          <div className="offers__box">
            <div className="offers__number"><p>3</p></div>
            <div className="offers__text">
              <p>Ищете активность, полезную для тела <br/>и души.</p>
            </div>
          </div>
        </div>
      </div>
  
      <div className="directions center">
        <div className="directions__box">
          <h2 className="directions__title">Направления:</h2>
  
          <div className="directions__line">
            <ul className="directions__text">
              <li>Йога для новичков</li>
              <li>Классическая йога</li>
              <li>Йогатерапия</li>
            </ul>
  
            <ul className="directions__text">
              <li>Кундалини-йога</li>
              <li>Хатха-йога</li>
              <li>Аштанга-йога</li>
            </ul>
          </div>
        </div>
      </div>
  
      <div className="describe center">
        <p className="describe__text">
          Благодаря комплексному воздействию упражнений происходит проработка всех
          групп мышц, тренировка суставов, улучшается циркуляция крови. Кроме
          того, упражнения дарят отличное настроение, заряжают бодростью и
          помогают противостоять стрессам.
        </p>
      </div>
  
      <div className="register center">
        <div className="register__box">
          <div className="register__application application">
            <h3 className="application__text">
              Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
              выбором направления и тренера, с которым тренировки принесут
              здоровье и радость!
            </h3>
            <button className="application__btn" type="button">Записаться на тренировку</button>
          </div>
          <img className="register__img" src="../img/phone.png" alt="phone" />
        </div>
      </div>
      </>
    )
}