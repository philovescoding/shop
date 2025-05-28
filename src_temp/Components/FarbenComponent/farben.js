import "./farben.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import useStore from "../ZustandManager/zustand.js"
function Farben(props) {
     
     const setfarbe = useStore(state => state.setFarbe)
     let farbe = useStore(state => state.farbe)
     function status(value) {
          if (value > 0) {
               return "black"
          } else {
               return "invisible"
          }
     }
     function wählen(value) {
          if (value !== "none") {
               return <div className="große">Ihre gewählte Farbe: {farbe}</div>
          } else {
               return <div>Bitte wählen Sie eine Farbe</div>
          }
     }

     const farben = ["rosa", "blau" ,"pink", "grau", "rosa/grün","grün" , "gelb"]

     return (
          <div>
               <div className="dropdownorder">
                    <div className="ordersize">{wählen(farbe)}</div>

                    <button className="btn btn-größe" type="button" onClick={() => {
                         const dropdownParent = document.getElementById('dropdownparentcolor');
                          if(dropdownParent.classList.contains('expand')){
                               dropdownParent.classList.remove('expand');
                         }
                         else{
                                dropdownParent.classList.add('expand');
                          }
                         }}>
                         Farbe wählen
                    </button>
                    <div className="dropdown-menu dropdownparent" id="dropdownparentcolor" >
                         <article className="dropdownelement">
                              <div id="size0" onClick={() => {
                                   setfarbe(farben[0])
                                   const dropdownParent= document.getElementById('dropdownparentcolor');
                                   if(dropdownParent.classList.contains('expand')){
                                        dropdownParent.classList.remove('expand');
                                      }
                                      
                                   }} className={status(props.farben[0])}>
                                   {farben[0]}
                              </div>
                         </article>
                         <article className="dropdownelement">
                              <div id="size1" onClick={() => {
                                   setfarbe(farben[1])
                                   const dropdownParent= document.getElementById('dropdownparentcolor');
                                   if(dropdownParent.classList.contains('expand')){
                                        dropdownParent.classList.remove('expand');
                                      }
                                      
                                   }} className={status(props.farben[1])}>
                                   {farben[1]}
                              </div>
                         </article>
                         <article className="dropdownelement">
                              <div id="size1" onClick={() => {
                                   setfarbe(farben[2])
                                   const dropdownParent= document.getElementById('dropdownparentcolor');
                                   if(dropdownParent.classList.contains('expand')){
                                        dropdownParent.classList.remove('expand');
                                      }
                                      
                                   }} className={status(props.farben[2])}>
                                   {farben[2]}
                              </div>
                         </article>
                         <article className="dropdownelement">
                              <div id="size1" onClick={() => {
                                   setfarbe(farben[3])
                                   const dropdownParent= document.getElementById('dropdownparentcolor');
                                   if(dropdownParent.classList.contains('expand')){
                                        dropdownParent.classList.remove('expand');
                                      }
                                      
                                   }} className={status(props.farben[3])}>
                                   {farben[3]}
                              </div>
                         </article>
                         <article className="dropdownelement">
                              <div id="size1" onClick={() => {
                                   setfarbe(farben[4])
                                   const dropdownParent= document.getElementById('dropdownparentcolor');
                                   if(dropdownParent.classList.contains('expand')){
                                        dropdownParent.classList.remove('expand');
                                      }
                                      
                                   }} className={status(props.farben[4])}>
                                   {farben[4]}
                              </div>
                         </article>
                         <article className="dropdownelement">
                              <div id="size1" onClick={() => {
                                   setfarbe(farben[5])
                                   const dropdownParent= document.getElementById('dropdownparentcolor');
                                   if(dropdownParent.classList.contains('expand')){
                                        dropdownParent.classList.remove('expand');
                                      }
                                      
                                   }} className={status(props.farben[5])}>
                                   {farben[5]}
                              </div>
                         </article>
                         <article className="dropdownelement">
                              <div id="size1" onClick={() => {
                                   setfarbe(farben[6])
                                   const dropdownParent= document.getElementById('dropdownparentcolor');
                                   if(dropdownParent.classList.contains('expand')){
                                        dropdownParent.classList.remove('expand');
                                      }
                                      
                                   }} className={status(props.farben[6])}>
                                   {farben[6]}
                              </div>
                         </article>
                        
                         

                         <Link to="/kontakt" className="noline">
                              <article className="dropdownelement">andere Farbe anfragen</article>
                         </Link>
                    </div>
               </div>
          </div>
     )
}

export default Farben
