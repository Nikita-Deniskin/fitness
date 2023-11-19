import ArrowSvg from "../../svg image/arrow-svg/arrowSvg";
import LogoSvg from "../../svg image/logo-svg/logoSvg";

import "./video-page.css"

export default function VideoPage() {
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
  
      <div className="workout__header center">
                <h1 className="big-title">Йога</h1>
                <h2 className="small-title"> Красота и здоровье / Йога на каждый день / 2 день</h2>
      </div>

      <div className="workout__video center">
        <img className="workout__video-active" src="../img/workout-video.png" alt=""/>
        <img className="button-play" src="../img/button-play.svg" alt=""/>
      </div>

      <div className="workout__text center">
        <div className="workout-description">
          <h2 className="workout-description__title">Упражнения</h2>
          <ul  className="workout-description__text">
              <li>Наклон вперед (10 повторений)</li>
              <li>Наклон назад (10 повторений)</li>
              <li>Поднятие ног, согнутых в коленях (5 повторений)</li>
          </ul>
          <button className="progress__btn __btn" type="button">Заполнить свой прогресс</button>
        </div>
      <div className="workout__progress">
          <h2 className="workout-progress__title">Мой прогресс по тренировке 2:</h2>
          <div className="workout-progress__item">
              <div className="workout-progress__text">
                  <p className="workout-progress__text-p">Наклоны вперед</p>
                  <p className="workout-progress__text-p">Наклоны назад</p>
                  <p className="workout-progress__text-p">Поднятие ног, согнутых в коленях</p>
              </div>
              <div className="workout__block-progress-bar">
                  <div className="first-range">
                      <span className="first-number">45%</span>
                          <input type="range" className="input-loader blue"
                          min="0" max="100" step="5" value='45' disabled />
                  </div>
                  <div className="first-range">
                      <span className="first-number">45%</span>
                      <input type="range" className="input-loader orange"
                      min="0" max="100" step="5" value='45' disabled />
              </div>
              <div className="first-range">
                  <span className="first-number">45%</span>
                  <input type="range" className="input-loader purple"
                  min="0" max="100" step="5" value='45' disabled />
          </div>
              </div>
          </div>
      </div>
    </div>
   </div>
  )
 }