import detectBrowserLanguage from "detect-browser-language"
import useStore from "../ZustandManager/zustand.js"
import "./warenkorb.css"
import React, { useState } from "react"



function Warenkorb() {
     let warenkorb = useStore((state) => state.warenkorb)
     const [name, setName] = useState("")
     const [email, setEmail] = useState("")
     const [message, setMessage] = useState("")
     const [subject, setSubject] = useState("")
     const setLanguage = useStore((state) => state.setLanguage)
     let lang = detectBrowserLanguage()
     let language = useStore((state) => state.language)
     let url = "nutribot.ddns.net:8090"
     let zeugs =""
     let i =1
     warenkorb.map((item) => {
        zeugs =  zeugs  +  "artikel" + i + " : " + item[0]  + check(item[5]) + check(item[6]) + item[3] + "\n"
        i++              
     })
     
     const PostData = () => {
          fetch("https://" + url + "/api/kontakte", {
               method: "POST",
               headers: {
                    "Content-Type": "application/json"
               },
     
               body: JSON.stringify({
                    zeugs,
                    name,
                    email,
                    subject,
                    message
           } )
          })
               .then((data) => data.json())
               .then((text) => {
                    alert(text._status)
                    setMessage("")
                    setName("")
                    setSubject("")
                    setEmail("")
               })
     }     
     
     function check(value) {
     if (value === "none") {
               return
          } else {
               return value
          }
     
       
     }
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

     function kontakt() {
          if (language !== "none") {
               if (language === "de") {
                    return "Kontakt"
               } else if (language === "en") {
                    return "contact"
               } else if (language === "it") {
                    return "contatto"
               } else {
                    return "contact"
               }
          }
     }

     function button() {
          if (language !== "none") {
               if (language === "de") {
                    return "Senden"
               } else if (language === "en") {
                    return "send"
               } else if (language === "it") {
                    return "invia"
               } else {
                    return "send"
               }
          }
     }

     function namen() {
          if (language !== "none") {
               if (language === "de") {
                    return "Name"
               } else if (language === "en") {
                    return "name"
               } else if (language === "it") {
                    return "nome"
               } else {
                    return "name"
               }
          }
     }

     function betreff() {
          if (language !== "none") {
               if (language === "de") {
                    return "Betreff"
               } else if (language === "en") {
                    return "reference"
               } else if (language === "it") {
                    return "oggetto"
               } else {
                    return "reference"
               }
          }
     }

     function nachricht() {
          if (language !== "none") {
               if (language === "de") {
                    return "Nachricht"
               } else if (language === "en") {
                    return "message"
               } else if (language === "it") {
                    return "messaggio"
               } else {
                    return "message"
               }
          }
     }
     function spezialorder() {
          if (language !== "none") {
               if (language === "de") {
                    return (
                         <div>
                              <div className="headline2">Um Die Bestellung zu übermitteln,</div>
                              <br></br>
                              <div className="headline2"> schreib mir doch einfach eine e-mail</div>
                         </div>
                    )
               } else if (language === "en") {
                    return (
                         <div>
                              <div className="headline2">To order what`s in your chart,</div>
                              <br></br>
                              <div className="headline2"> write an e-mail to me</div>
                         </div>
                    )
               } else if (language === "it") {
                    return (
                         <div>
                              <div className="headline2">Per domande o ordine speciali,</div>
                              <br></br>
                              <div className="headline2"> scrivimi un e-mail</div>
                         </div>
                    )
               } else {
                    return (
                         <div>
                              <div className="headline2">If you have questions or individual needs,</div>
                              <br></br>
                              <div className="headline2"> write me an e-mail</div>
                         </div>
                    )
               }
          }
     } 

   return (
          <div className="wrapperw">
               <div className="contentw">
                    <div className="description descriptgrid">
                         <div className="detailgrid secondcola">
                              <div className="beautifulwarenkorb firstcola">Artikelbezeichnung</div>
                              <div className="beautifulwarenkorb secondcola">Größe</div>
                              <div className="beautifulwarenkorb thirdcola">Farbe</div>
                         </div>
                         <div className="beautifulwarenkorb thirdcola">Preis</div>
                    </div>
                    {warenkorb &&
                         warenkorb.map((item) => {
                              return (
                                   <article className="article-warenkorb">
                                        <img className="card-image firstcola" src={item[2][0]} alt="notfound" />
                                        <div className="detailgrid secondcola margin">
                                             <div className="beautifulwarenkorb firstcola">{item[0]}</div>
                                             <div className="beautifulwarenkorb secondcola">{check(item[5])}</div>
                                             <div className="beautifulwarenkorb thirdcola">{check(item[6])}</div>
                                        </div>
                                        <div className="beautifulwarenkorb thirdcola margin">{item[3]} €</div>
                                   </article>
                              )
                         })}
               </div>

               <div className="kontakt">
               <h3 className="headline">{kontakt()}</h3>
               <div className="card auth-card input-field">
                    {spezialorder()}
                    <input type="text" className="form-control" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" className="form-control" placeholder={namen()} value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" className="form-control" placeholder={betreff()} value={subject} onChange={(e) => setSubject(e.target.value)} />
                    <textarea type="text" className="form-control-text" placeholder={nachricht()} value={message} onChange={(e) => setMessage(e.target.value)} />
                    <button className="btn" onClick={() => PostData()}>
                         {button()}
                    </button>
               </div>
          </div>

               
          
          </div>
     )
}
export default Warenkorb
