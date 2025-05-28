import "./header.css"
import { Link, NavLink } from "react-router-dom"

function Header() {
     return (
          <div className="Header">
               <nav id="header">
                    <Link to="/" className="nav-link home">
                         Home
                    </Link>
                    <div
                         className="nav-link gal dropdown"
                         onClick={() => {
                              const dropdownParent = document.getElementById("dropdownshop")
                              if (dropdownParent.classList.contains("expande")) {
                                   dropdownParent.classList.remove("expande")
                              } else {
                                   dropdownParent.classList.add("expande")
                              }
                         }}>
                         Shop
                         <div className="dropdown-menu-shop dropdownparentshop" id="dropdownshop">
                              <Link className="noline" to="/gallerie/bears">
                                   <div className="dropdownelementshop">Bären und Drachen </div>
                              </Link>

                              <Link className="noline" to="/gallerie/kleidung">
                                   <div className="dropdownelementshop">Baby- und Kinderbekleidung </div>
                              </Link>

                              <Link className="noline" to="/gallerie/stuff">
                                   <div className="dropdownelementshop">Accessoires</div>
                              </Link>
                         </div>
                    </div>
                    <Link to="/" className="logo">
                         <img className="img" src="/img/Logo_mit_farbe.png" alt="logo" />
                    </Link>
                    <div
                         id="dropdownabout"
                         className="nav-link about dropdown"
                         onClick={() => {
                              const dropdownParent = document.getElementById("dropdownparentabout")
                              if (dropdownParent.classList.contains("expande")) {
                                   dropdownParent.classList.remove("expande")
                              } else {
                                   dropdownParent.classList.add("expande")
                              }
                         }}>
                         About Me
                         <div className="dropdown-menu-shop dropdownparentabout" id="dropdownparentabout">
                              <Link className="dropd" to="/about">
                                   Me
                              </Link>
                              <br></br>
                              <Link className="dropd" to="awards">
                                   Awards
                              </Link>
                              <br></br>
                              <Link className="dropd" to="/presse">
                                   Presse
                              </Link>
                         </div>
                    </div>
                    <Link to="/kontakt" className="nav-link impr">
                         Kontakt
                    </Link>

                    <div id="social">
                         <a className="social-icon" data-tooltip="email@gmail.com" data-toggle="tooltip" data-placement="top" title="E-mail" href="mailto:email@gmail.com">
                              <i className="fa fa-envelope" aria-hidden="true"></i>
                         </a>

                         <a className="social-icon" data-tooltip="Facebook" data-toggle="tooltip" data-placement="top" title="facebook" href="https://www.facebook.com/andreamaria.mazzitellikohler">
                              <i className="fa fa-facebook" aria-hidden="true"></i>
                         </a>

                         <a className="social-icon" data-tooltip="Instagram" data-toggle="tooltip" data-placement="top" title="instagram" href="https://www.instagram.com/drelibears/">
                              <i className="fa fa-instagram" aria-hidden="true"></i>
                         </a>

                         <Link to="/warenkorb" className="social-icon">
                              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                         </Link>
                    </div>
               </nav>
          </div>
     )
}

export default Header
