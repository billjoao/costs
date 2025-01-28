import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import Newproject from './components/pages/Newproject'

import Container from './components/layout/Container'
import Navbar from "./components/layout/navbar"
import Footer from "./components/layout/footer"
import Projects from "./components/pages/Projects"

function App() {
  return (
    <Router>

      <Navbar/>

      <Container customClass="min-height">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Projects" element={<Projects/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/Newproject" element={<Newproject/>} />
      <Route path="/Company" element={<Company/>} />
      </Routes>
      </Container>

      <Footer/>
    </Router>
  );
}

export default App;
