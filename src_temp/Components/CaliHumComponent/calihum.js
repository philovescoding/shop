import "./calihum.css"
import React, { useState,useEffect } from "react"
import { useToasts } from "react-toast-notifications"
const CaliHum = (props) => {
    let url = "localhost:8080"
     const [ready, setReady] = useState(0)
     const [change, setChange] = useState(0)
     const [hump, setHump] = useState(0)
     const [humm, setHumm] = useState(256)
     
     const restore = () => {

          fetch("http://" + url + "/controller/humcorr/", {
              method: "POST",
              headers: {
                   "Content-Type": "application/json"
              },
  
              
         })
              .then((data) => data.json())
              .then((text) => {
                  alert(text._status) 
              })
       }
     

     useEffect( () => {
        GetData()
        
   }, [change])


   var hum = 0
   
   const calccorr = () => {
     if(hump !== 0){
          
          
          hum =hump
          
     }else if(humm !== 256){
          hum =humm
          

     }
     
     }
     
     

     function humcalc(humidity) {
          var corr = 0.0
          if(humidity <= 127){
               
               
               corr = (humidity  * 0.2)
               
          }else if(humidity >= 128){
               corr = (256 - humidity) * -0.2
               
     
          }

               return corr
     }
     function humcalc2(humidity) {
          
          var corr2 = 0.0
          if(humidity <= 127){
               
               
               corr2 = (humidity  * 0.2)
               
          }else if(humidity >= 128){
               corr2 = (256 - humidity) * -0.2
               
     
          }

               return corr2
     }

     
     const GetData = async () => {
          

          const response = await fetch("http://" + url + "/controller/loadbaseline/", {
               method: "GET",
               headers: {
                    "Content-Type": "application/json"
               },

               
          })
          const baseline = await response.json()
          setReady(baseline)
          
          console.log(baseline)
     }

     

       const sendhum = async () => {

          if(hum == "" ){
              alert("Fill out all Values")
              
  
          }else{
  
              
  
               const response = await fetch("http://" + url + "/controller/setcalihum/", {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json"
                  },
  
                  body: JSON.stringify({
                      hum
                   }) 
              })
              const status = await response.json()
              setChange(change+1)
              console.log(status._status)
          }
     }
     
     return (
         <div>
             
               { (ready.tempcorr) &&  <div className="cali paddingtop">
                         <div className="infotext2 paddinglinks2 beautyc bigger">
                         Wähle eine Aktion für den Feuchtichkeitswert des Luftsensors     
                         </div>
                         <br/>
                         <div className="gridd infotext2 breite2 paddingtop3">
                         <span className="button1 beautyc bigger paddinglinks2 breite"  >Minus</span>
                         
                         <span className="button5">
                              <input type="range" min="128" max="256" value={humm} className="slider" id="myRange2" 
                              onChange={(e) => {
                                   setHumm(e.target.value)
                                   calccorr() 
                                   if(hump !== 0){
                                        setHump(0)
                                        
                                   }
                              }
                              }/>
                         </span>
                         </div>
                         <div className="slidecontainer button1 paddingtop3">
                              <input type="range" min="0" max="127" value={hump} className="slider" id="myRange" 
                              onChange={(f) => {
                                   setHump(f.target.value) 
                                   calccorr()
                                   if(humm !== 256){
                                        setHumm(256)
                                        
                                        }
                              }
                              }/>
                         </div> <div className="beautyc bigger paddinglinks2 paddingtop3"  >Plus</div>
                         <br/>


                         {calccorr() }
                         
                         <div className="infotext2 paddinglinks2 beautyc gridtemp bigger">
                          Der Feuchtichkeits Korrekturwert:   
                          </div>
                           
                          <span className="marginleft beautyc bigger" >
                          <div className="bigger" >Ist:
                          <span className="marginleft2">
                          { ready.tempcorr && (humcalc2(ready.humcorr))}
                          </span>
                          </div>
                          <div className="bigger">Soll:
                          <span className="marginleft2">
                          {humcalc(hum)}
                          </span>
                          </div>
                          </span>
                         



                        <button className="btnn button2" onClick={() => sendhum()}>
                            Speichern
                        </button>
                        <button className="bigger btnn button2" onClick={() => restore()}>
                            Kalibrieren
                        </button>
                        

                         
               
               </div>}
          </div>
     )
}
export default CaliHum