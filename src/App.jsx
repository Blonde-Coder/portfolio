import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import './App.css';
import  myPics from  "./assets/images/myPics.jpeg"
function App() {
  return ( 
    <div className="mainDiv">
    <div>
      <Header />
      <About />
      <Skills />
      <section>
        <div className="section-div-one">
             <img  className="my-image" src={myPics} alt="my image"/>
          </div> 
          
          <div className="section-div-two">
    <h1> welcome to my portifolio</h1>
          </div>
        
      </section> 
    </div>
    </div>
  );
}
export default App;