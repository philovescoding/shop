import React, { useEffect, useState } from "react"
import Chart from "react-google-charts"
import { useParams } from "react-router-dom"
import Air from "../AirComponent/air"
import Cali from "../CaliComponent/cali"
import Fertilizer from "../FertilizerComponent/fertilizer"
import "./chart.css"
const options = {
     title: "Leit Wert",
     curveType: "function",
     backgroundColor: '#677B63',
     legend: { position: "bottom" }
}

const options2 = {
     title: "PH Wert",
     curveType: "function",
     legend: { position: "bottom" }
}

let data = [
     ["Hour", "CO2"],
     [new Date(1), 2]
]

function Graph() {
     let params = useParams()
     const [check, setCheck] = useState("")
     const [visible, setVisible] = useState("")
     let [test, setTest] = useState([])


     const dunger= (password) =>{
          if(password==="phil"){
          setVisible("true")
          const hide = document.getElementById("autho")
          if (hide.classList.contains("auth")) {
               hide.classList.remove("auth")
          } else {
               hide.classList.add("auth")
          }
          }
          
          }


     useEffect(async () => {
          const table = [["Hour", "EC"]]
          const table2 = [["Hour", "PH"]]
          const url = "185.164.4.169:80"
          const response = await fetch("http://" + url + "/controller/loaddata/" + params.id)
          const datapoints = await response.json()

          datapoints.forEach((point) => {
               const date = new Date(point.time)
               table.push([date, parseFloat(point.ec)])
               table2.push([date, parseFloat(point.ph)])
          })
          setTest([table, table2])
     }, [])

     if (test === null) {
          // Render loadiing state ...
     } else {
          return (
               <div className="background" >
                    
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

                   

                    <Air id={params.id}/>
                    <div  className="contentfet">
                    <div id="autho" className="itsme">
                         <div className="beauty paddinglinks">Gib deinen Namen ein:</div>
                         <input type="text" className="textfeld"  onChange={(e) => setCheck(e.target.value)} />
                         <button className="btn  buttonfeld" onClick={() => dunger(check)}>
                              It`s Me
                         </button>
                    </div>
                        { visible && <Fertilizer property={params.id} /> } 
                    </div>

                    <div>
                        <Cali id={params.id} /> 
                    </div>


               </div>
          )
     }
}
export default Graph

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
