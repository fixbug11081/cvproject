import { useState } from "react";

import Home from "./components/Home";
import Form from "./components/Form";
import Cv from "./components/Cv";
import Contact from "./components/Contact";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Form />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
