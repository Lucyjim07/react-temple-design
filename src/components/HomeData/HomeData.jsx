import './HomeData.css'
import lantern1 from '../../assets/lantern-1.svg'
import lantern2 from '../../assets/lantern-2.svg'

const HomeData = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Welcome <br /> Temple
      </h1>
      <p className="home__description">
        The temple is an attractive touristic place where you could visit and
        connect to the pure land of the environment, you will experience peace
        and harmony.
      </p>

      <a href="#" className="home__button">
        Explore Place
      </a>

      <img src={lantern1} alt="lantern image" className="home__lantern-1" />
      <img src={lantern2} alt="lantern image" className="home__lantern-2" />
    </div>
  );
};

export default HomeData;
