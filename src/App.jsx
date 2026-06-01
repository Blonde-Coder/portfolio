import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Home from "./components/Home";
import About from "./components/About";
function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;