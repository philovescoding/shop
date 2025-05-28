import "./icons.css"
import React, { useState,useEffect } from "react"
import { useToasts } from "react-toast-notifications"
import useStore from "../ZustandManager/zustand.js"
const Icons = (props) => {
    let url = "localhost:8080"
     const [ready, setReady] = useState([])
     
     let hours = useStore((state) => state.hours)
     const GetIcon = (value) => {
        
        switch (value) {
            
            case 1:
                 return <div className="iconsunny" ></div>
            case 2:
                 return <div className="iconsunny" ></div>
            case 3:
                 return <div className="iconcloudsandsun" ></div>
            case 4:
                 return <div className="iconcloudsandsun" ></div>
            case 5:
                 return <div>{value}</div>
            case 6:
                 return <div className="iconmostlycloudy" ></div>
            case 7:
                 return <div className="iconcloudy" ></div>
            case 8:
                 return <div>{value}</div>
            case 9:
                 return <div>{value}</div>
            case 10:
                 return <div>{value}</div>
            case 11:
                 return <div>{value}</div>
            case 12:
                 return <div className="iconshowers" ></div>
            case 13:
                 return <div className="iconmostlycloudywsun" ></div>
            case 14:
                 return <div className="iconmostlycloudywsun" ></div>
            case 15:
                 return <div className="iconstorm" ></div>
            case 16:
                 return <div className="iconstormwithsun" ></div>
            case 17:
                 return <div className="iconstormwithsun" ></div>
            case 18:
                 return <div className="iconrain" ></div>
            case 19:
                 return <div>{value}</div>
            case 20:
                 return <div>{value}</div>
            case 21:
                 return <div>{value}</div>
            case 22:
                 return <div className="iconsnowy" ></div>
            case 23:
                 return <div className="iconmostlycloudywsnow" ></div>
            case 24:
                 return <div className="iconice" ></div>
            case 25:
                 return <div>{value}</div>
            case 26:
                 return <div className="iconmostlycloudy" ></div>
            case 27:
                 return <div>{value}</div>
            case 28:
                 return <div>{value}</div>
            case 29:
                 return <div>{value}</div>
            case 30:
                 return <div className="iconhot" ></div>
            case 31:
                 return <div className="iconcold" ></div>
            case 32:
                 return <div className="iconsunny" ></div>
            case 33:
                 return <div className="iconclear" ></div>
            case 34:
                 return <div className="iconmostlyclear" ></div>
            case 35:
                 return <div className="iconmostlycloudynight" ></div>
            case 36:
                 return <div className="iconmostlycloudynight" ></div>
            case 37:
                 return <div>{value}</div>
            case 38:
                 return <div className="iconcloudy" ></div>
            case 39:
                 return <div className="iconmostlycloudywrainnight" ></div>
            case 40:
                 return <div className="iconmostlycloudywrainnight" ></div>
            case 41:
                 return <div className="iconstormnight" ></div>
            case 42:
                 return <div className="iconstormnight" ></div>
            case 43:
                 return <div>{value}</div>
            case 44:
                 return <div>{value}</div>
            default:
                return <div>{value}</div>
       }
        
   }
     return (
         <div className="icons">
          { hours[2] &&  <div >
               
               <div className="card auth-card input-field">
                    
                    <div className="weathergridicon">
                        
                        <span  className=" firstrow icon">{GetIcon(hours[0].icon)}</span>
                        

                        
                        <span  className=" secondrow icon">{GetIcon(hours[1].icon)}</span>
                        
                        
                        
                        <span  className=" thirdrow icon">{GetIcon(hours[2].icon)}</span>
                        

                        
                        <span  className=" forthrow icon">{GetIcon(hours[3].icon)}</span>
                        

                        
                        <span  className=" fiftrow icon">{GetIcon(hours[4].icon)}</span>
                        

                        
                        <span  className=" sixthrow icon">{GetIcon(hours[5].icon)}</span>
                        

                        
                        <span  className=" seventrow icon">{GetIcon(hours[6].icon)}</span>
                        

                        
                        <span  className=" eightrow icon">{GetIcon(hours[7].icon)}</span>
                        

                        <span className="ninerow icon" >
                        {GetIcon(hours[8].icon)}
                        </span>
                        <span className="tenrow icon" >
                        {GetIcon(hours[9].icon)}
                        </span>
                        <span className="elevenrow icon" >
                        {GetIcon(hours[10].icon)}
                        </span>
                        <span className="twelferow icon" >
                        {GetIcon(hours[11].icon)}
                        </span>
                    </div>
               </div>
          </div>}</div>
     )
}
export default Icons