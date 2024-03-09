import img from "../assets/portrait.png";
import icon_mail from "../assets/mail.png";
import icon_linkedin from "../assets/linkedin.png";
import "./Info.css";

export function Info() {
  return (
    <>
      <img className="info__image" src={img} alt="picture" />
      <h1 className="info__title">Marthe Berget</h1>
      <h2 className="info__subtitle">Frontend Developer</h2>
      <p className="info__email">martheberget.website</p>
      <div className="info__button-group">
        <button className="info__button info__button--white">
          <img src={icon_mail} alt="mail icon" className="info__button-icon" />
          Email
        </button>
        <button className="info__button info__button--blue">
          <img src={icon_linkedin} alt="linkedin icon" className="info__button-icon" />
          LinkedIn
        </button>
      </div>
    </>
  );
}
