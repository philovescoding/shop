import "./weather.css"
import React, { useState,useEffect } from "react"



const Weather = (props) => {
     const [ready, setReady] = useState([])
     
     const GetData = () => {
          fetch("http://localhost:8080/controller/weather/", {
               method: "GET",      
          })
               .then((data) => data.json())
               .then((text) => {
                    setReady(text)
               })
     }



     useEffect(() => {
        GetData()
   }, [])

     
     

     
     return (
         <div className="weather">
          { ready[2] &&  <div >
               
               <div className="card auth-card input-field">
                    
                    <div className="weathergrid">
                        
                        <span  className=" firstrow beautynum">{ready[0].temp}°C</span>
                        

                        
                        <span  className=" secondrow beautynum">{ready[1].temp}°C</span>
                        
                        
                        
                        <span  className=" thirdrow beautynum">{ready[2].temp}°C</span>
                        

                        
                        <span  className=" forthrow beautynum">{ready[3].temp}°C</span>
                        

                        
                        <span  className=" fiftrow beautynum">{ready[4].temp}°C</span>
                        

                        
                        <span  className=" sixthrow beautynum">{ready[5].temp}°C</span>
                        

                        
                        <span  className=" seventrow beautynum">{ready[6].temp}°C</span>
                        

                        
                        <span  className=" eightrow beautynum">{ready[7].temp}°C</span>
                        

                        <span className="ninerow beautynum" >
                        {ready[8].temp}°C
                        </span>
                        <span className="tenrow beautynum" >
                        {ready[9].temp}°C
                        </span>
                        <span className="elevenrow beautynum" >
                        {ready[10].temp}°C
                        </span>
                        <span className="twelferow beautynum" >
                        {ready[11].temp}°C
                        </span>
                    </div>
               </div>
          </div>}</div>
     )
}
export default Weather