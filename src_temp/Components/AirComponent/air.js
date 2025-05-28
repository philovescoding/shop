import React, { useEffect, useState } from "react"
import Chart from "react-google-charts"
import Cali from "../CaliComponent/cali"
import CaliHum from "../CaliHumComponent/calihum"
import Calitemp from "../CaliTempComponent/calitemp"
import Pic from "../PicComponent/pic"
import "./air.css"
const options = {
     title: "CO2 Wert",
     curveType: "function",
     backgroundColor: '#677B63',
     legend: { position: "bottom" }
}

const options2 = {
     title: "Temperatur",
     curveType: "function",
     backgroundColor: '#677B63',
     legend: { position: "bottom" }
}

const options3 = {
     title: "Humidity",
     curveType: "function",
     backgroundColor: '#677B63',
     legend: { position: "bottom" }
}

const options4 = {
     title: "tVOC Wert",
     curveType: "function",
     backgroundColor: '#677B63',
     legend: { position: "bottom" }
}


let data = [
     ["Hour", "Temp","Humidity", "CO2", "tVOC"],
     [new Date(1), 2,3,4,5]
]
function Air(props) {
     const [visible, setVisible] = useState("")
     let [test, setTest] = useState([])


     


     useEffect(async () => {
          const table = [["Hour", "CO2"]]
          const table2 = [["Hour", "Temp"]]
          const table3 = [["Hour", "Humidity"]]
          const table4 = [["Hour", "tVOC"]]
          const url = "localhost:8080"
          const response = await fetch("http://" + url + "/controller/loadairdata/")
          const datapoints = await response.json()

          datapoints.forEach((point) => {

               if(table.length > 3){
                    if( parseFloat(point.humidity)>=  20.0 && parseFloat(point.humidity)!=0){            //((parseFloat(point.humidity)/1.2)<=  getlast(table3))
                        
                        
                        
                         if(((parseFloat(point.temp)/1.2)<=  getlast(table2)) && parseFloat(point.temp)!=0){  
                                  
                              
                              
                              if( parseInt(point.co2)>=400 && parseInt(point.co2)<=8000){
                                       
                                   
                                   
                                   if((parseInt(point.tVOC)-getlast(table4)<= 500) ){
                                             const date = new Date(point.time)
                                             table3.push([date, parseFloat(point.humidity)])
                                             table2.push([date, parseFloat(point.temp)])
                                             table.push([date, parseInt(point.co2)])
                                             table4.push([date, parseInt(point.tVOC)])
                                             }else{


                                             }
                                   }else{


                                   }
                              }else{


                              }         
                    }else{

                         
                    }

                    //parseInt(point.co2)<= 20000;
               
               }else{

                    if(table.length >= 2){

                         
                         if(getlast(table)>=3000){
                              if((((parseInt(point.co2)+getlast(table))/2)<=  (getlast(table)+100)) && parseInt(point.co2)!=400 && ((parseInt(point.co2)+getlast(table))/2)<=  (parseInt(point.co2)+100) && parseInt(point.co2)!=0  ){
                              const date = new Date(point.time)
                              table3.push([date, parseFloat(point.humidity)])
                              table2.push([date, parseFloat(point.temp)])
                              table.push([date, parseInt(point.co2)])
                              table4.push([date, parseInt(point.tVOC)])
                              }else{

                                   table3.pop()
                                   table2.pop()
                                   table.pop()
                                   table4.pop() 
                              }
                         }else{

                              const date = new Date(point.time)
                         table3.push([date, parseFloat(point.humidity)])
                         table2.push([date, parseFloat(point.temp)])
                         table.push([date, parseInt(point.co2)])
                         table4.push([date, parseInt(point.tVOC)])  
                         }







                    }else{

                         const date = new Date(point.time)
                         table3.push([date, parseFloat(point.humidity)])
                         table2.push([date, parseFloat(point.temp)])
                         table.push([date, parseInt(point.co2)])
                         table4.push([date, parseInt(point.tVOC)])  
                    }
          
          }
               
          })
          setTest([table, table2,table3, table4])
     }, [])
     function tvoc() {
          return (<div>  
               {test.length > 0 && (
                         <Chart
                              className="ec background"
                              chartType="LineChart"
                              width="100%"
                              data={test[3]}
                              options={options4}
                              controls={[
                                   {
                                        controlType: "ChartRangeFilter",
                                        controlPosition: "bottom",
                                        options: {
                                             filterColumnLabel: "Hour",
                                             ui: {
                                                  label: "",
                                                  chartType: "LineChart"
                                             }
                                        }
                                   }
                              ]}
                         />
                    )}
                </div>
          )
     }

     function temp() {
          return (<div>  
                  {test.length > 0 && (
                         <Chart
                              className="ec background"
                              chartType="LineChart"
                              width="100%"
                              data={test[1]}
                              options={options2}
                              controls={[
                                   {
                                        controlType: "ChartRangeFilter",
                                        controlPosition: "bottom",
                                        options: {
                                             filterColumnLabel: "Hour",
                                             ui: {
                                                  label: "",
                                                  chartType: "LineChart"
                                             }
                                        }
                                   }
                              ]}
                         />
                         
                         


                    )}
       
               </div>
          )
     }


     function humidity() {
          return (<div>  
                 {test.length > 0 && (
                         <Chart
                              className="ec background"
                              chartType="LineChart"
                              width="100%"
                              data={test[2]}
                              options={options3}
                              controls={[
                                   {
                                        controlType: "ChartRangeFilter",
                                        controlPosition: "bottom",
                                        options: {
                                             filterColumnLabel: "Hour",
                                             ui: {
                                                  label: "",
                                                  chartType: "LineChart"
                                             }
                                        }
                                   }
                              ]}
                         />
                         
                         


                    )}        
               </div>
          )
     }

     function co2() {
          return (<div>

                    {test.length > 0 && (
                         <Chart
                              className="ec background"
                              chartType="LineChart"
                              width="100%"
                              data={test[0]}
                              options={options}
                              controls={[
                                   {
                                        controlType: "ChartRangeFilter",
                                        controlPosition: "bottom",
                                        options: {
                                             filterColumnLabel: "Hour",
                                             ui: {
                                                  label: "",
                                                  chartType: "LineChart"
                                             }
                                        }
                                   }
                              ]}
                         />
                         
                         


                    )}
               </div>
          )}

          function getlast(array) {
               let last = array[array.length-1]
               let lastvalue = last[1]
               return lastvalue

          }   

     if (test === null) {
          // Render loadiing state ...
     } else {
          return (
               <div className="background" >
                    
                    <div  className="dropdownitem centercontent">

                    <button
                                        className="btnnnn smallbtn"
                                        onClick={() => {
                                             
                                             const dropdownitem = document.getElementById("dropdownitemair")
                                             if (dropdownitem.classList.contains("expanditemair")) {
                                                  dropdownitem.classList.remove("expanditemair")
                                                  
                                                  
                                                  
                                                  
                                             } else {
                                                  
                                                  dropdownitem.classList.add("expanditemair")
                                                  
                                             }
                                        }}>
                                        {test.length > 2 && getlast(test[0])} ppm
                                   </button>
                                   <button
                                        className="btnnnn smallbtn"
                                        onClick={() => {
                                             const dropdownitemm = document.getElementById("dropdownitemair2")
                                             if (dropdownitemm.classList.contains("expanditemair")) {
                                                  dropdownitemm.classList.remove("expanditemair")
                                                  
                                             } else {
                                                  
                                                  dropdownitemm.classList.add("expanditemair")
                                                  
                                                 
                                             }
                                        }}>
                                         {test.length > 2 && getlast(test[1]).toFixed(2)} °C
                                   </button>
                                   <button
                                        className="btnnnn smallbtn"
                                        onClick={() => {
                                             const dropdownitem = document.getElementById("dropdownitemair3")
                                             if (dropdownitem.classList.contains("expanditemair")) {
                                                  dropdownitem.classList.remove("expanditemair")
                                                 
                                             } else {
                                                  
                                                  dropdownitem.classList.add("expanditemair")
                                                  
                                                  
                                             }
                                        }}>
                                        {test.length > 2 && getlast(test[2]).toFixed(0)} %
                                   </button>
                                   <button
                                        className="btnnnn smallbtn"
                                        onClick={() => {
                                             const dropdownitem = document.getElementById("dropdownitemair4")
                                             if (dropdownitem.classList.contains("expanditemair")) {
                                                  dropdownitem.classList.remove("expanditemair")
                                                  
                                                  
                                             } else {
                                                  
                                                  dropdownitem.classList.add("expanditemair")
                                                  
                                                  
                                             }
                                        }}>
                                        {test.length > 2 && getlast(test[3])} ppb
                                   </button>

                    </div>
                    
                     

                    <div id="dropdownitemair" className="dropdownitemair"> 
                    
                    {test.length > 3 && co2()}
                    
                    </div>
                    <div id="dropdownitemair2" className="dropdownitemair"> 
                    
                    {test.length > 3 && temp()}
                    
                    </div>
                    <div id="dropdownitemair3" className="dropdownitemair"> 
                    {test.length > 3  && humidity()}
                    
                    
                    </div>
                    <div id="dropdownitemair4" className="dropdownitemair"> 
                    
                    {test.length > 3 && tvoc()}
                    
                    </div>
        
                    <div className="optgrid">
                         <button
                                             className="btnnn optionsbutton"
                                             onClick={() => {
                                                  
                                                  const dropdownitem = document.getElementById("dropdownitemair5")
                                                  if (dropdownitem.classList.contains("expanditemair2")) {
                                                       dropdownitem.classList.remove("expanditemair2")
                                                       
                                                       
                                                       
                                                       
                                                  } else {
                                                       
                                                       dropdownitem.classList.add("expanditemair2")
                                                       
                                                  }
                                             }}>Optionen
                    </button>
                    </div>
                    <div id="dropdownitemair5" className="dropdownitemair"> 
                    
                    <Cali  /> 
                    <Calitemp  />
                    <CaliHum  />
                    <Pic />
                    </div>              
                                   
                                   
                                   
                                   



                    
                   
                   
                                  





               </div>
          )
     }
}
export default Air

/*


<div className="wrapstream" >
                     <Day/>
                         <div className="image">
                              
                         <Weather/>  
                         </div>
                            <Icons/>
                               
                         
                    </div>



##############################
{test[1] && (
                    <img className="img" src="http://phillovescoding.ddns.net:8081" controls></img>
                         <Chart
                              chartType="LineChart"
                              width="100%"
                              height="200px"
                              data={test[1]}
                              options={options2}
                              controls={[
                                   {
                                        controlType: "ChartRangeFilter",
                                        controlPosition: "bottom",
                                        options: {
                                             filterColumnLabel: "Hour",
                                             ui: {
                                                  label: "",
                                                  chartType: "LineChart"
                                             }
                                        }
                                   }
                              ]}
                         />
                    )}


#############################
import "./chart.css"
import Chart from "react-google-charts"

import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"

function Charte() {
     let [test, setTest] = useState([])
     let params = useParams()
     let data= []
     const google = window.google;
     google.charts.setOnLoadCallback(drawChart);
     

     
          var url = "localhost:8080"
     
     function headline() {
          switch (params.id) {
               case "phil":
                    return "#Das ist"+ params.id+" growbox"

               
               default:
                    break
          }
     }
     function drawChart() {
        fetch("http://" + url + "/api/loaddata/" + params.id )
        .then((points) => points.json())
        .then((point) => {
         //console.log(point);
         point.map((datapoint,index) => {
             //console.log(table);
             data.push([
                parseInt(index),
             //new Date(data.time),
             parseFloat(datapoint.ec)
             //parseFloat(data.ph),
             //parseFloat(data.temp)
             
           ])}
           
           )
         
        })
        
        console.log(data);

        var table = google.visualization.arrayToDataTable(data);
        table.addColumn('number', 'index');
        //table.addColumn('date', 'date');
        table.addColumn('number', 'ec');
        var options = {
          title: 'Company Performance',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.Table(document.getElementById('curve_chart'));

        chart.draw(table, options);
      }

     function drawChart2() {

        var table = new google.visualization.DataTable();
        table.addColumn('number', 'index');
        //table.addColumn('date', 'date');
        table.addColumn('number', 'ec');
        //table.addColumn('number', 'ph');
        //table.addColumn('number', 'temp');
        
          var options = {
            title: 'Wasserwerte',
            curveType: 'function',
            legend: { position: 'bottom' }
      
          };
  
          fetch("http://" + url + "/api/loaddata/" + params.id )
          .then((points) => points.json())
          .then((point) => {
           //console.log(point);
           point.map((data,index) => {
               //console.log(table);
               table.addRow([
                   index,
               //new Date(data.time),
               parseFloat(data.ec)
               //parseFloat(data.ph),
               //parseFloat(data.temp)
               
             ])}
             
             )
           
          })
          //setTest(table)
          console.log(table);
          
          

          var chart = new google.visualization.Table(document.getElementById('curve_chart'));
  
          chart.draw(table, options);

        }

       
        
     return (
          
                    
                    <div className="wrapperchart">
                         <h1 className="welcomechart"> {headline()} </h1>
                         <div id="curve_chart" styles="width: 900px; height: 500px"></div>
                        
                    </div>
            
     )
}
export default Charte

 */
