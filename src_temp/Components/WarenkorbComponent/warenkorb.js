import "./warenkorb.css"
import useStore from "../ZustandManager/zustand.js"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
function Warenkorb() {
     let [test, setTest] = useState({})
     let warenkorb = useStore((state) => state.warenkorb)
     return (
          <div>
               {warenkorb &&
                    warenkorb.map((item) => {
                         return (
                              <article className="article-warenkorb">
                                   <Link className="noline" to={item[1]}>
                                        <img className="card-img" src={item[2][0]} alt="notfound" />
                                        <h3 className="beautiful">{item[0]}</h3>
                                        <h3 className="beautiful">{item[5]}</h3>
                                        <h3 className="beautiful">{item[6]}</h3>
                                   </Link>
                              </article>
                         )
                    })}
          </div>
     )
}
export default Warenkorb
