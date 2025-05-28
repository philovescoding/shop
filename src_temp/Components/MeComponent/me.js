import "./me.css"
import { useState, useEffect } from "react"
import Fertilizer from "../FertilizerComponent/fertilizer"

function Me(props) {
     const [check, setCheck] = useState("")
     const [visible, setVisible] = useState("")

     const dunger= (password) =>{
          if(password==="philo"){
          setVisible("true")
          const hide = document.getElementById("autho")
          const show = document.getElementById("autho2")
          if (hide.classList.contains("auth")) {
               hide.classList.remove("auth")
          } else {
               hide.classList.add("auth")
          }
          if (show.classList.contains("hsize")) {
               show.classList.remove("hsize")
          } else {
               show.classList.add("hsize")
          }

          }
          
          }  
          
     return (
                    <div  className="contentfet">
                    <div id="autho" className="itsme">
                         <div className="beauty paddinglinks">Gib deinen Namen ein:</div>
                         <input type="text" className="textfeld"  onChange={(e) => setCheck(e.target.value)} />
                         <button className="btn  buttonfeld" onClick={() => dunger(check)}>
                              It`s Me
                         </button>
                    </div>
                    <div id="autho2" >
                        { visible && <Fertilizer property={props.id} /> }
                        </div> 
                    </div>
     )
}
export default Me
