import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Contacts from "./components/Contacts";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="gallery" element={<Gallery />} />

          
          
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
