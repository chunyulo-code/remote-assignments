import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Banner />
        <Gallery />
      </div>
    </>
  );
}

export default App;
