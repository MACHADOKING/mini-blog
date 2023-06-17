// CSS
import "./App.css";
// packages
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// context
import { AuthProvider } from "./context/AuthContext";
// components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <main className="container">
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </main>
  );
}

export default App;
