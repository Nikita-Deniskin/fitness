import "./progress.css"


export default function Progress() {
    return (
        <div className="progress">
      <div className="progress__box">
        <h3 className="progress__title">Мой прогресс</h3>
        <div className="progress__form">
          <p className="progress__text">Сколько раз вы сделали наклоны вперед?</p>
          <input
            className="progress__description"
            placeholder="Введите значение"
            type="text"
          />
          <p className="progress__text">Сколько раз вы сделали наклоны назад?</p>
          <input
            className="progress__description"
            placeholder="Введите значение"
            type="text"
          />
          <p className="progress__text">
            Сколько раз вы сделали поднятие ног, согнутых в коленях?
          </p>
          <input
            className="progress__description"
            placeholder="Введите значение"
            type="text"
          />
        </div>
        <button className="post__btn __btn" type="button">Отправить</button>
      </div>
    </div>

    )
}