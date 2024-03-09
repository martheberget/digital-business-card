import "./Footer.css";
import icon_twitter from "../assets/twitter.png";
import icon_facebook from "../assets/facebook.png";
import icon_instagram from "../assets/instagram.png";
import icon_github from "../assets/github.png";

export function Footer() {
  return (
    <>
      <div className="footer__container">
        <img src={icon_twitter} alt="twitter icon" className="footer__icon" />
        <img src={icon_facebook} alt="facebook icon" className="footer__icon" />
        <img src={icon_instagram} alt="instagram icon" className="footer__icon" />
        <img src={icon_github} alt="github icon" className="footer__icon" />
      </div>
    </>
  );
}
