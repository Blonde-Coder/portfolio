import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import './App.css';
import myImage from "../src/assets/images/myImage.jpg";

function App() {
  return ( 
    <div className="mainDiv">
    <div>
      <Header />
      <About />
      <Skills />
      <section>
         <div>
        <img className="myImage" src={myImage} alt="My Image" />
      </div>
        <h2>Projects</h2>
        <p>My first React portfolio project</p>
      </section> 
    </div>
    </div>
  );
}

export default App;