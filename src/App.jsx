import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Home from "./components/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;