import "./calitemp.css"
import React, { useState,useEffect } from "react"
const Calitemp = (props) => {
    let url = "localhost:8080"
     const [ready, setReady] = useState(0)
     const [change, setChange] = useState(0)
     const [tempp, setTempp] = useState(0)
     const [tempm, setTempm] = useState(256)
     
     const restore = () => {
          fetch("http://" + url + "/controller/tempcorr/", {
              method: "POST",
              headers: {
                   "Content-Type": "application/json"
              },        
         })
              .then((data) => data.json())
              .then((text) => {
              })
       }
     
     useEffect( () => {
        GetData()       
   }, [change])

   var temp = 0
   
   const calccorr = () => {
     if(tempp !== 0){
          
          
          temp =tempp
          
     }else if(tempm !== 256){
          temp =tempm
          

     }
     
     }

     function tempcalc(temperatur) {
          var corr = 0.0
          if(temperatur <= 127){
               
               
               corr = (temperatur  * 0.16)
               
          }else if(temperatur >= 128){
               corr = (256 - temperatur) * -0.16
               
     
          }

               return corr
     }
     function tempcalc2(temperatur) {
          
          var corr2 = 0.0
          if(temperatur <= 127){
               
               
               corr2 = (temperatur  * 0.16)
               
          }else if(temperatur >= 128){
               corr2 = (256 - temperatur) * -0.16
               
     
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

     

       const sendtemp = async () => {

          if(temp == "" ){
              alert("Fill out all Values")
              
  
          }else{
  
              
  
               const response = await fetch("http://" + url + "/controller/setcalitemp/", {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json"
                  },
  
                  body: JSON.stringify({
                      temp
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
                         Wähle eine Aktion für den Temperaturwert des Luftsensors     
                         </div>
                         <br/>
                         <div className="gridd infotext2 breite2 paddingtop3">
                         <span className="button1 beautyc bigger paddinglinks2 breite"  >Minus</span>
                         
                         <span className="button5">
                              <input type="range" min="128" max="256" value={tempm} className="slider" id="myRange2" 
                              onChange={(e) => {
                                   setTempm(e.target.value)
                                   calccorr() 
                                   if(tempp !== 0){
                                        setTempp(0)
                                        
                                   }
                              }
                              }/>
                         </span>
                         </div>
                         <div className="slidecontainer button1 paddingtop3">
                              <input type="range" min="0" max="127" value={tempp} className="slider" id="myRange" 
                              onChange={(f) => {
                                   setTempp(f.target.value) 
                                   calccorr()
                                   if(tempm !== 256){
                                        setTempm(256)
                                        
                                        }
                              }
                              }/>
                         </div> <div className="beautyc bigger paddinglinks2 paddingtop3"  >Plus</div>
                         <br/>


                         {calccorr() }
                         
                         <div className="infotext2 paddinglinks2 beautyc gridtemp bigger">
                          Der Temperatur Korrekturwert:   
                          </div>
                           
                          <span className="marginleft beautyc bigger" >
                          <div className="bigger" >Ist:
                          <span className="marginleft2">
                          { ready.tempcorr && (tempcalc2(ready.tempcorr))}
                          </span>
                          </div>
                          <div className="bigger">Soll:
                          <span className="marginleft2">
                          {tempcalc(temp)}
                          </span>
                          </div>
                          </span>
                         



                        <button className="btnn button2" onClick={() => sendtemp()}>
                            Speichern
                        </button>
                        <button className="bigger btnn button2" onClick={() => restore()}>
                            Kalibrieren
                        </button>
                        

                         
               
               </div>}
          </div>
     )
}
export default Calitemp