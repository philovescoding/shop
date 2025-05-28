import "./day.css"
import React, { useState,useEffect } from "react"
const Day = (props) => {
    let url = "localhost:8080"
     const [days, setDays] = useState([])
     
     
    

     const GetData = () => {
          fetch("http://" + url + "/controller/weatherdays/", {
               method: "GET",      
          })
          .then((data) => data.json())
          .then((text) => {        
               setDays(text) 
         
          })
     }

     useEffect(() => {
          GetData()
     }, [])

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
         <div className="iconsday">
          { days[2] &&  <div >
               
               <div className="card auth-card input-field">
                    
                    <div className="weatherdaygridicon">
                        
                        <span  className=" firstrow icon bordertop">{GetIcon(days[0].iconday)}</span>
                        

                        
                        <span  className=" secondrow icon border">{GetIcon(days[0].iconnight)}</span>
                        
                        
                        <span  className=" thirdrow icon">{GetIcon(days[1].iconday)}</span>
                        
                        

                        
                        <span  className=" forthrow icon border">{GetIcon(days[1].iconnight)}</span>
                        

                        
                        <span  className=" fiftrow icon">{GetIcon(days[2].iconday)}</span>

                        <span  className=" sixthrow icon border">{GetIcon(days[2].iconnight)}</span>
                        

                        
                        <span  className=" seventrow icon">{GetIcon(days[3].iconday)}</span>
                        
                        
                        
                        <span  className=" eightrow icon border">{GetIcon(days[3].iconnight)}</span>
                        

                        
                        <span  className=" ninerow icon">{GetIcon(days[4].iconday)}</span>
                        

                        
                        <span  className=" tenrow icon border">{GetIcon(days[4].iconnight)}</span>
                        

                        
                
                    </div>
               </div>
          </div>}</div>
     )
}
export default Day