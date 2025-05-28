import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import "./gallerie.css"
function Gallerie() {
     let [test, setTest] = useState([])
     let params = useParams()
     let url = "localhost:8080"

     function headline() {
          switch (params.id) {
               case "kleidung":
                    return "#Baby- und Kinderbekleidung"

               case "all":
                    return "Bären und Drachen"

               case "stuff":
                    return "Accessoires"
               default:
                    break
          }
     }
     useEffect(() => {
          fetch("http://localhost:8080/api/gallerie/" + params.id)
               .then((bears) => bears.json())
               .then((text) => {
                    setTest(text)
               })
     }, [params.id])
     return (
          <div className="Gallerie">
               <div id="userstories">
                    <div className="wrapper">
                         <h1 className="welcomee"> {headline()} </h1>
                         {test.map((bear, index) => (
                              <article className="article" key={index}>
                                   <Link className="noline" to={bear.detail}>
                                        <div className="card-img" style={{ backgroundImage: `url(${bear.imgUrl[0]})` }}>
                                             <h3 className="beautiful">{bear.name}</h3>
                                        </div>
                                   </Link>

                                   <div className="preis">{bear.preis.toFixed(2)}€</div>
                              </article>
                         ))}
                    </div>
               </div>
          </div>
     )
}
export default Gallerie