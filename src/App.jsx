import { useState } from "react";
import "../styles/reset.css";
import "../styles/index.css";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { MainContent } from "./components/MainContent.jsx";

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
