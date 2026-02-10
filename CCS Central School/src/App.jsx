import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NoticeBar from "./components/NoticeBar";

import Home from "./pages/Home";
import About from "./pages/About";
import Teachers from "./pages/Teachers";
import Admission from "./pages/Admission";
import Gallery from "./pages/Gallery";
import Notice from "./pages/Notice";

function App(){
  return(
    <BrowserRouter>

      <Navbar/>
      <NoticeBar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/teachers" element={<Teachers/>}/>
        <Route path="/admission" element={<Admission/>}/>
        <Route path="/notice" element={<Notice/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
      </Routes>

      <Footer/>

    </BrowserRouter>
  )
}

export default App;
