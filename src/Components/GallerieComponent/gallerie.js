import detectBrowserLanguage from "detect-browser-language"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import useStore from "../ZustandManager/zustand.js"
import "./gallerie.css"
function Gallerie() {
     let [test, setTest] = useState([])
     let params = useParams()
     
     const setLanguage = useStore((state) => state.setLanguage)
     let lang = detectBrowserLanguage()

     if (lang === "de-AT") {
          setLanguage("de")
     } else if (lang === "en-US") {
          setLanguage("en")
     } else if (lang === "de") {
          setLanguage("de")
     } else if (lang === "it-IT") {
          setLanguage("it")
     } else if (lang === "it") {
          setLanguage("it")
     } else {
          setLanguage("en")
     }
     function headline() {
          switch (params.id) {
               case "kleidung":
                    return "#Baby- und Kinderbekleidung"

               case "bears":
                    return "#Bären und Drachen"

               case "stuff":
                    return "#Accessoires"
               default:
                    break
          }
     }

     
     function ab() {
          switch (params.id) {
               case "kleidung":
                    return "ab"

               default:
                    break
          }
     }
     useEffect(() => {
          fetch("https://nutribot.ddns.net:8090/api/gallerie/" + params.id)
               .then((bears) => bears.json())
               .then((text) => {
                    setTest(text)
               })
     },[params.id])
     return (
          <div className="Gallerie">
               <div id="userstories">
                    <div className="wrapper">
                         <h1 className="welcomee"> {headline()} </h1>
                         {test.map((bear, index) => (
                              <article className="article" key={index}>
                                   <Link className="noline" to={bear.detail}>
                                        <img className="card-img" alt="gone" src={bear.imgUrl[0]}>
                                             
                                        </img><h3 className="beautiful">{bear.name}</h3>
                                   </Link>
                                   <div className="preis">
                                        {ab()} {bear.preis[0].toFixed(2)}€
                                   </div>
                              </article>
                         ))}
                    </div>
               </div>
          </div>
     )
}export default Gallerie
