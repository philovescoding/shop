import "./fertilizer.css"
import React, { useState,useEffect } from "react"
import { useToasts } from "react-toast-notifications"
const Fertilizer = (props) => {
    let url = "localhost:8080"
     const [ready, setReady] = useState([])
     const [change, setChange] = useState([])
     const [grow, setGrow] = useState("")
     const [bloom, setBloom] = useState("")
     const [rootbooster, setRootb] = useState("")
     const [bloombooster, setBloomb] = useState("")
     const [seaweed, setSeaweed] = useState("")
     const [fulvic, setFulvic] = useState("")
     const [phdown, setPhdown] = useState("")
     const [water, setWater] = useState("")

     useEffect(() => {
        GetData()
   }, [change])

     const GetData = () => {
          fetch("http://" + url + "/controller/getfertilizer/", {
               method: "GET",
               headers: {
                    "Content-Type": "application/json"
               },

               
          })
               .then((data) => data.json())
               .then((text) => {
                    //alert("geht")
                    //setGrow(text.grow)
                    //setBloom(text.bloom)
                    //setRootb(text.rootbooster)
                    //setBloomb(text.bloombooster)
                    //console.log(bloombooster)
                    //console.log(text)
                    setReady(text)
                    //console.log(text)
               })
     }

     const gießen = () => {

        fetch("http://" + url + "/controller/giesen/", {
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

     const spulen = () => {

          fetch("http://" + url + "/controller/spulen/", {
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


     const PostData = () => {

        if(grow == "" || bloom== "" || rootbooster== "" ||bloombooster== ""){
            alert("Fill out all Values")
            

        }else{

            

            fetch("http://" + url + "/controller/postfertilizer/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    grow,
                    bloom,
                    rootbooster,
                    bloombooster,
                    fulvic,
                    seaweed,
                    phdown,
                    water
            }) 
            })
                .then((data) => data.json())
                .then((text) => {
                    setGrow("")
                    setBloom("")
                    setRootb("")
                    setBloomb("")
                    setFulvic("")
                    setSeaweed("")
                    setPhdown("")
                    setWater("")
                    setChange(text)
                    
                })
        }
   }
     return (
         <div>
          { (ready.bloombooster || ready.grow || ready.bloom) &&  <div className="dunger">
               
               <div className="middle">
                    <h2 className="headline4">
                         Gib deine Düngermenge pro Liter Wasser ein:
                    </h2>
                    <div className="smallgrid beauty">
                        <span  className="firstcol firstrow">Grow </span>
                        <span  className="secondcol firstrow beauty">{ready.grow}ml</span>
                        <input type="text" className="thirdcol  firstrow beauty" value={grow}  onChange={(e) => setGrow(e.target.value)} />

                        <span className="firstcol secondrow">Bloom</span>
                        <span  className="secondcol secondrow beauty">{ready.bloom}ml</span>
                        <input type="text" className="thirdcol secondrow beauty"  value={bloom} onChange={(e) => setBloom(e.target.value)} />
                        
                        <span className="firstcol thirdrow">Rootbooster</span>
                        <span  className="secondcol thirdrow beauty">{ready.rootbooster}ml</span>
                        <input type="text" className="thirdcol thirdrow beauty"  value={rootbooster} onChange={(e) => setRootb(e.target.value)} />

                        <span className="firstcol forthrow">Bloombooster</span>
                        <span  className="secondcol forthrow beauty">{ready.bloombooster}ml</span>
                        <input type="text" className="thirdcol forthrow beauty" value={bloombooster}  onChange={(e) => setBloomb(e.target.value)} />

                        <span className="firstcol fiftrow">Fulvic</span>
                        <span  className="secondcol fiftrow beauty">{ready.fulvic}ml</span>
                        <input type="text" className="thirdcol fiftrow beauty" value={fulvic}  onChange={(e) => setFulvic(e.target.value)} />

                        <span className="firstcol sixthrow">Seaweed</span>
                        <span  className="secondcol sixthrow beauty">{ready.seaweed}ml</span>
                        <input type="text" className="thirdcol sixthrow beauty" value={seaweed}  onChange={(e) => setSeaweed(e.target.value)} />

                        <span className="firstcol seventrow">PhDown</span>
                        <span  className="secondcol seventrow beauty">{ready.phdown}ml</span>
                        <input type="text" className="thirdcol seventrow beauty" value={phdown}  onChange={(e) => setPhdown(e.target.value)} />

                        <span className="firstcol eightrow">Water</span>
                        <span  className="secondcol eightrow beauty">{ready.water}l</span>
                        <input type="text" className="thirdcol eightrow beauty" value={water}  onChange={(e) => setWater(e.target.value)} />

                        <button className="btn ninerow gießen" onClick={() => gießen()}>
                            Gießen
                        </button>
                        <button className="btn ninerow secondcol" onClick={() => spulen()}>
                            Spülen
                        </button>
                        <button className="btn ninerow senden" onClick={() => PostData()}>
                            ändern
                        </button>
                    </div>
               </div>
          </div>}</div>
     )
}
export default Fertilizer