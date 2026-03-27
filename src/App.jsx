import { BrowserRouter, Routes, Route} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import './App.css'
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

function App() {

  return (
    <>
      <BrowserRouter future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }} >
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
