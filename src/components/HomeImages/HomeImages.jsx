import "./HomeImages.css";
import img1 from "../../assets/img-1.svg";
import img2 from "../../assets/img-2.svg";
import img3 from "../../assets/img-3.svg";
import img4 from "../../assets/img-4.svg";
import img5 from "../../assets/img-5.svg";
import img6 from "../../assets/img-6.svg";

const HomeImages = () => {
  return (
    <div className="home__images">
      <img src={img1} alt="image-1" className="home__img-1" />
      <img src={img2} alt="image-2" className="home__img-2" />
      <img src={img3} alt="image-3" className="home__img-3" />
      <img src={img4} alt="image-4" className="home__img-4" />
      <img src={img5} alt="image-5" className="home__img-5" />
      <img src={img6} alt="image-6" className="home__img-6" />
    </div>
  );
};

export default HomeImages;
