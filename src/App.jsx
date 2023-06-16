// CSS
import "./App.css";
// packages
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
