import React from "react"
import Air from "../AirComponent/air"
import Soil from "../SoilComponent/soil"
import "./ui.css"



function Interface() {

    
          return (
               <div className="background contentfet" >
                    
                   

                   
                    
                    
                    <Soil />
                                 
                    <div>
                        
                    </div>
                    <Air />
                    
                    
               </div>
        )
     
}
export default Interface

/*
<Soil id={params.id} />

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
