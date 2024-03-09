import { Info } from "./Info";
import { About } from "./About";
import { Interests } from "./Interests";
import { Footer } from "./Footer";
import "./Card.css";

export function Card() {
  return (
    <>
      <div className="card__container">
        <Info></Info>
        <About></About>
        <Interests></Interests>
        <Footer></Footer>
      </div>
    </>
  );
}
