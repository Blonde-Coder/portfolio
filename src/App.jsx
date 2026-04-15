import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Skills />

      <section>
        <h2>Projects</h2>
        <p>My first React portfolio project</p>
      </section>
    </div>
  );
}

export default App;