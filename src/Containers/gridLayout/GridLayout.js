import { Link } from "react-router-dom";
import "./GridLayout.css";

const GridLayout = (props) => {
  return (
    <div className="grid-layout">
      <div className="grid-unit grid-unit-1">
        <div className="grid-image-box">
          <img
            className="grid-image"
            src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/198211447/original/7db576021e56c93f47a94ee0b6389ca47d36095b/you-a-realistic-digital-portrait.jpg"
            alt="Realistic portrait"
          />
        </div>
        <Link className="grid-layout-link" to="/#">
          <div className="grid-image-overlay">
            <p className="grid-unit-title">Realistic</p>
          </div>
        </Link>
      </div>

      <div className="grid-unit grid-unit-2">
        <div className="grid-image-box">
          <img
            className="grid-image"
            src="https://i.pinimg.com/originals/bc/cd/f6/bccdf6579d062f6ce4553b8737f6b107.jpg"
            alt="Manga Style portrait"
          />
        </div>
        <Link className="grid-layout-link" to="/#">
          <div className="grid-image-overlay">
            <p className="grid-unit-title">Manga Style</p>
          </div>
        </Link>
      </div>

      <div className="grid-unit grid-unit-3">
        <div className="grid-image-box">
          <img
            className="grid-image"
            src="https://s3.amazonaws.com/artistsnclients/13lh/samples/1ako_800.jpg"
            alt="Digital Oil portrait"
          />
        </div>
        <Link className="grid-layout-link" to="/#">
          <div className="grid-image-overlay">
            <p className="grid-unit-title">Digital Oil</p>
          </div>
        </Link>
      </div>

      <div className="grid-unit grid-unit-4">
        <div className="grid-image-box">
          <img
            className="grid-image"
            src="https://i.pinimg.com/originals/d0/51/ed/d051ed769a1634f289501935dfefbe7c.jpg"
            alt="Line Art"
          />
        </div>
        <Link className="grid-layout-link" to="/#">
          <div className="grid-image-overlay">
            <p className="grid-unit-title">Line Art</p>
          </div>
        </Link>
      </div>

      <div className="grid-unit grid-unit-5">
        <div className="grid-image-box">
          <img
            className="grid-image"
            src="https://blog.tubikstudio.com/wp-content/uploads/2020/04/Pennine-Alps-illustration-tubikarts.png"
            alt="Atmospheric Illustrations"
          />
        </div>
        <Link className="grid-layout-link" to="/#">
          <div className="grid-image-overlay">
            <p className="grid-unit-title">Atmospheric Illustrations</p>
          </div>
        </Link>
      </div>

      <div className="grid-unit grid-unit-6">
        <div className="grid-image-box">
          <img
            className="grid-image"
            src="https://i.pinimg.com/originals/50/bf/93/50bf93cc8888ab9294569604aeb042c9.jpg"
            alt="Character Design"
          />
        </div>
        <Link className="grid-layout-link" to="/#">
          <div className="grid-image-overlay">
            <p className="grid-unit-title">Character Design</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default GridLayout;
