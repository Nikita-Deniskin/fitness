// import { Link } from 'react-router-dom';
import './main.css'

export default function MainPage() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

    return (
        <div>
            <header className="center">
                <nav className="header__nav">
                    <div className="logo__img" />
                    {/* <Link to='/login'> */}
                    <div className="loginButton"><p>Войти</p></div>
                    {/* </Link> */}
                    
                </nav>
                <section className="header-title">
                    <section className="header-title__text">
                        <p className="small-title-txt">Онлайн-тренировки для занятий дома</p>
                        <h1 className="big-title-txt">Начните заниматься спортом и улучшите качество жизни</h1>
                    </section>
                    <figure className="header-title__img" />
                </section>
            </header>
            <article className="center content">
                <ul className="content__grid">
                    <li className="content__grid-item content__grid-item1"><h3 className="card-courses-title">Йога</h3></li>
                    <li className="content__grid-item content__grid-item2"><h3 className="card-courses-title">Стретчинг</h3></li>
                    <li className="content__grid-item content__grid-item3"><h3 className="card-courses-title">Танцевальный фитнес</h3></li>
                    <li className="content__grid-item content__grid-item4"><h3 className="card-courses-title">Степ-аэробика</h3></li>
                    <li className="content__grid-item content__grid-item5"><h3 className="card-courses-title">Бодифлекс</h3></li>
                </ul>
            </article>
            <footer className="center">
                <button onClick={scrollToTop} className="footer__button" type='button'>Наверх ↑</button>
            </footer>
        </div>
    )
}