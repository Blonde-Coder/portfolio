import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "../assets/images/myPics.jpeg"
function Portfolio() {
  const navigate = useNavigate();

  return (
    <div className="mainDiv">
      <Header />
      
      <section>
        <div className="section-div-one">
          {/* <img className="my-image" src={myPics} alt="my image" /> */}
        </div>
        <div className="section-div-two">
          <p className="line"></p>

          <h1>Welcome to my portfolio</h1>

          <p className="note">
            I thrive on turning ideas into impactful digital solutions
            while continuously growing in tech and creativity.
          </p>

          <button
            className="click header-b"
            onClick={() => navigate("/home")}
          >
            Click me
          </button>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;