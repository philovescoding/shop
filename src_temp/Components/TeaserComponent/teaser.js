import "./teaser.css"
import { Link } from "react-router-dom"
function Teaser() {
     return (
          <div className="teaser">
               <div className="ad">
                    <div className="ad-entry">
                         <Link className="link" to="/gallerie/all">
                              <div className="imageteaser1">
                                   <div className="contentt">
                                        <h3>Bären und Drachen</h3>
                                   </div>
                              </div>
                         </Link>
                    </div>
                    <div className="ad-entry">
                         <Link className="link" to="/gallerie/kleidung">
                              <div className="imageteaser2">
                                   <div className="contentt">
                                        <h3>Baby- und Kinderbekleidung</h3>
                                   </div>
                              </div>
                         </Link>
                    </div>
                    <div className="ad-entry">
                         <Link className="link" to="/gallerie/stuff">
                              <div className="imageteaser3">
                                   <div className="contentt">
                                        <h3 className="shift">Accessoires</h3>
                                   </div>
                              </div>
                         </Link>
                    </div>
               </div>
          </div>
     )
}
export default Teaser
