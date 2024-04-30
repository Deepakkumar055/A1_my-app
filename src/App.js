import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Poster from './components/Poster';
import About from './components/About';
import Team from './components/Team';
import OurWork from './components/OurWork';
import Price from './components/Price';
import Contact from './components/Contact';
function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/poster" element={<Poster />} />
            <Route path="/about" element={<About />} />
            <Route path="/ourwork" element={<OurWork />} />
            <Route path="/team" element={<Team />} />
            <Route path="/price" element={<Price />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
