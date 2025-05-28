import "./pic.css"
import React, { useState,useEffect } from "react"
const Pic = (props) => {
    let url = "localhost:8080"
     const [ready, setReady] = useState([])
     const [change, setChange] = useState([])
     const [hours, setHours] = useState("")
     const [min, setMins] = useState("")
     const [hoursd, setHoursd] = useState("")
     const [mind, setMinsd] = useState("")
     const GetData = () => {
        fetch("http://" + url + "/controller/getpic/", {
             method: "GET",
             headers: {
                  "Content-Type": "application/json"
             },

             
        })
             .then((data) => data.json())
             .then((text) => {
                  setReady(text)
                  console.log(text)
             })
   }

     useEffect(() => {
        GetData()
        
   }, [change])

     

     

     const PostData = () => {

          if(hours == "" || min== "" ){
              alert("Fill out all Values")
              
  
          }else{
  
              
  
              fetch("http://" + url + "/controller/setpic/", {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json"
                  },
  
                  body: JSON.stringify({
                      hours,
                      min
                   }) 
              })
                  .then((data) => data.json())
                  .then((text) => {
                      setHours("")
                      setMins("")
                      
                      setChange(text)
                      alert(text._status)
                      
                  })
          }
     }

     const DeleteData = () => {

          if(hoursd == "" || mind== "" ){
              alert("Fill out all Values")
              
  
          }else{
  
              
  
              fetch("http://" + url + "/controller/deletepic/", {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json"
                  },
  
                  body: JSON.stringify({
                      hoursd,
                      mind
                   }) 
              })
                  .then((data) => data.json())
                  .then((text) => {
                      setHoursd("")
                      setMinsd("")
                      
                      setChange(text)
                      alert(text._status)
                      
                  })
          }
     }


     return (
         <div>
             
               { (ready) &&  <div className="cali paddingtop">
                         <div className="infotext2 paddinglinks2 beautyp bigger">
                         Erstelle einen Timer für deine Fotos     
                         </div>
                         <div className="button3">
                         <input type="text" className="inputpic beautyp bigger" placeholder="hour" value={hours} onChange={(e) => setHours(e.target.value)} />
                         <input type="text" className="inputpic beautyp bigger" placeholder="min" value={min} onChange={(e) => setMins(e.target.value)} />
                         </div>
                        <button className="btnn button2 bigger" onClick={() => PostData()}>
                            Senden
                        </button>
                        
                        {ready.map((time, index) => (
                             <div className="gridpic" key={index}>
                             <div className="infotext2 paddinglinks2 beautyp bigger">Timer Nr.: {index}</div>
                             <article className="article beautyp bigger button3" key={index}>
                             <span className="one">{time.hour} H</span>
                              <span className="two">{time.min} Min</span>
                          </article>
                              </div>
                               
                         ))}

                         <div className="infotext2 paddinglinks2 beautyp bigger">
                         Lösche einen Timer für deine Fotos     
                         </div>
                         <div className="button3">
                         <input type="text" className="inputpic beautyp bigger" placeholder="hour" value={hoursd} onChange={(e) => setHoursd(e.target.value)} />
                         <input type="text" className="inputpic beautyp bigger" placeholder="min" value={mind} onChange={(e) => setMinsd(e.target.value)} />
                         </div>
                        <button className="btnn button2 bigger" onClick={() => DeleteData()}>
                            Löschen
                        </button>
                    
               </div>}
          </div>
     )
}
export default Pic