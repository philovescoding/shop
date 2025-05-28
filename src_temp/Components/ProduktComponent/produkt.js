import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Farben from "../FarbenComponent/farben"
import Order from "../OrderComponent/order"
import Picture from "../PictureComponent/picture"
import useStore from "../ZustandManager/zustand.js"
import "./produkt.css"
//{test.imgUrl && <img src={test.imgUrl[0]} />}
function Produkt() {
     let [test, setTest] = useState({})
     let params = useParams()
     let größe = useStore((state) => state.größe)
     let farbe = useStore((state) => state.farbe)
     let preis = useStore((state) => state.preis)
     let warenkorb = useStore((state) => state.warenkorb)
     const hinzufügen = useStore((state) => state.hinzufügen)
     const setPreis = useStore((state) => state.setPreis)
     url = "localhost:8080"
    

     function calcpreis(gewähltegröße) {
          switch (gewähltegröße) {
               case "none":
                    return "none"
               case 56:
                    return "klein"
               case 62:
                    return "teuer"
               case 68:
                    return "groß"
               case 74:
                    return "teuer"
               case 80:
                    return "billig"
               case 86:
                    return "teuer"
               case 92:
                    return "billig"
               case 98:
                    return "teuer"
               case 104:
                    return "billig"
               case 110:
                    return "teuer"
               case 116:
                    return "billig"
               case 122:
                    return "teuer"
               default:
                    break
          }
     }

     function displayprize() {
          if (test.großen) {
               setPreis(calcpreis(größe))
               return <div className="preisd">{calcpreis(größe)}</div>
          } else {
               test.preis && setPreis(test.preis.toFixed(2))
               return <div className="preisd"> Preis: {test.preis && test.preis.toFixed(2)} € </div>
          }
     }
     function ready() {
          if (größe !== "none" || farbe !== "none") {
               return true
          } else {
               return false
          }
     }

     useEffect(() => {
          ;(async () => {
               const response = await fetch("http://" + url + "/api/produkt/" + params.id)
               const data = await response.json()
               //console.log(data.großen)
               console.log(data.id)
               setTest(data)
          })()
     }, [params.id])

     if (test === null) {
          // Render loading state ...
     } else {
          return (
               <div className="grid">
                    <div className="prodwrapper">
                         <h1 className="headlineprod"># {test.name} </h1>

                         <div className="picture"> {test.imgUrl && <Picture property={test.imgUrl} />}</div>
                         <div className="sidetext">
                              <div className="row1">{test.description}</div>
                              <div className="row2">
                                   <h5>Materialzusammensetzung:</h5>
                                   {test.material && test.material.map((material, index) => <article key={index}>{material}</article>)}
                              </div>
                              {test.großen && (
                                   <div>
                                        <Order size={test.großen} identificator={test.id} />
                                        
                                   </div>
                              )}
                              {test.wählbar > 0 && (
                                   <div>
                                        <Farben farben={test.farben} identificator={test.id} />
                                   </div>
                              )}
                              {displayprize()}

                              {ready() && (
                                   <button
                                        className="warenkorb"
                                        onClick={() => {
                                             hinzufügen([test.name, test.detail, test.imgUrl, preis, test.id, größe, farbe])
                                        }}>
                                        zum Warenkorb hinzufügen
                                   </button>
                              )}
                              <div>{warenkorb}</div>
                         </div>
                    </div>
               </div>
          )
     }
}
export default Produkt
