import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import About from "./Components/AboutComponent/about"
import Admin from "./Components/AdminComponent/admin"
import Email from "./Components/EmailComponent/email"
import Footer from "./Components/FooterComponent/footer"
import Gallerie from "./Components/GallerieComponent/gallerie"
import Header from "./Components/HeaderComponent/header"
import Home from "./Components/HomeComponent/home"
import Messe from "./Components/MesseComponent/messe"
import Produkt from "./Components/ProduktComponent/produkt"
import Warenkorb from "./Components/WarenkorbComponent/warenkorb"

function App() {
     return (
          <BrowserRouter>
               <Header />
               <Routes>
               <Route exact path="/" element={<Home/>} />
               <Route path="/gallerie/:id" element={<Gallerie/>} />
               <Route path="/produkt/:id" element={<Produkt/>} />
               <Route exact path="/kontakt" element={<Email/>} />
               <Route exact path="/about" element={<About/>} />
               <Route exact path="/messe" element={<Messe/>} />
               <Route exact path="/warenkorb" element={<Warenkorb/>} />
               <Route exact path="/admin" element={<Admin/>} />
               </Routes>
               <Footer/>
          </BrowserRouter>
     )
}

export default App
