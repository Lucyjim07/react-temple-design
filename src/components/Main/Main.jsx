import './Main.css'
import backgroundImg from '../../assets/img-bg.svg'
import lantern1 from '../../assets/lantern-1.svg'
import lantern2 from '../../assets/lantern-2.svg'
import img1 from '../../assets/img-1.svg'
import img2 from '../../assets/img-2.svg'
import img3 from '../../assets/img-3.svg'
import img4 from '../../assets/img-4.svg'
import img5 from '../../assets/img-5.svg'
import img6 from '../../assets/img-6.svg'

const Main = () => {
  return (
    <main className="main">
      <section className="home">
        <img src={backgroundImg} alt="Imagen de fondo" className="home__bg" />

        <div className="home__container container">
          <div className="home__data">
            <h1 className="home__title">
              Welcome <br /> Temple
            </h1>
            <p className="home__description">
              The temple is an attractive touristic place where you could visit
              and connect to the pure land of the environment, you will
              experience peace and harmony.
            </p>

            <a href="#" className="home__button">
              Explore Place
            </a>

            <img
              src={lantern1}
              alt="lantern image"
              className="home__lantern-1"
            />
            <img
              src={lantern2}
              alt="lantern image"
              className="home__lantern-2"
            />
          </div>

          <div className="home__images">
            <img src={img1} alt="image-1" className="home__img-1" />
            <img src={img2} alt="image-2" className="home__img-2" />
            <img src={img3} alt="image-3" className="home__img-3" />
            <img src={img4} alt="image-4" className="home__img-4" />
            <img src={img5} alt="image-5" className="home__img-5" />
            <img src={img6} alt="image-6" className="home__img-6" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main