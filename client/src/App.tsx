import React from 'react';
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import ContactUs from "./components/ContactUs";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/*" element={<Body/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
