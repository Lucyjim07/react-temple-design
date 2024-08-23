import './Main.css'
import backgroundImg from '../../assets/img-bg.svg'
import HomeData from '../HomeData/HomeData'
import HomeImages from '../HomeImages/HomeImages'

const Main = () => {
  return (
    <main className="main">
      <section className="home">
        <img src={backgroundImg} alt="Imagen de fondo" className="home__bg" />

        <div className="home__container container">
          <HomeData />
          <HomeImages />
        </div>
      </section>
    </main>
  );
}

export default Main