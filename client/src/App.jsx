import { Routes, Route, Navigate } from "react-router-dom";
import { Theme } from "./context/Theme";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import About from "./pages/About";
import { useContext } from "react";
import Navbar from "./components/Navbar";

function App() {
  const { theme } = useContext(Theme);
  return (
    <div className={`bg-[${theme}] min-h-screen`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
