import React from "react";
import Navbar from './components/Navbar';
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Home />
      <AboutMe />
      <Experience />
      <Footer />
    </div>
  )
}
