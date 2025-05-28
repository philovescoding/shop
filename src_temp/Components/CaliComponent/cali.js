import "./cali.css"
import React, { useState,useEffect } from "react"
const Cali = (props) => {
    let url = "localhost:8080"
     const [ready, setReady] = useState([])
     const [change, setChange] = useState([])
     

     useEffect(() => {
        GetData()
   }, [change])

     const GetData = () => {
          fetch("http://" + url + "/controller/getcali/", {
               method: "GET",
               headers: {
                    "Content-Type": "application/json"
               },

               
          })
               .then((data) => data.json())
               .then((text) => {
                    setReady(text)
               })
     }

     const kalibrieren = () => {

        fetch("http://" + url + "/controller/kalibrieren/", {
            method: "POST",
            headers: {
                 "Content-Type": "application/json"
            },

            
       })
            .then((data) => data.json())
            .then((text) => {
               setChange("kalibrieren")
                alert(text._status) 
            })
     }

     const readbaseline = () => {

          fetch("http://" + url + "/controller/loadbaseline/", {
              method: "GET",
              headers: {
                   "Content-Type": "application/json"
              },            
                   }
          )
              .then((data) => data.json())
              .then((text) => {
              })
       }

     const restore = () => {

          fetch("http://" + url + "/controller/restore/", {
              method: "POST",
              headers: {
                   "Content-Type": "application/json"
              },
  
              
         })
              .then((data) => data.json())
              .then((text) => {
               setChange("restore")
                  alert(text._status) 
              })
       }


     
     return (
         <div>
             
               { (ready._cali) &&  <div className="cali paddingtop">
                         <div className="infotext2 paddinglinks2 beautyc bigger">
                         Wähle eine Aktion für den Luftsensor     
                         </div>
                        <button className="btnnn button1cali" onClick={() => kalibrieren()}>
                            Kalibrieren
                        </button>
                        <button className="btnn button2 bigger" onClick={() => restore()}>
                            Wiederherstellen
                        </button>
                        
                       
                        
                    
                        


                         
               
               </div>}
          </div>
     )
}
export default Cali