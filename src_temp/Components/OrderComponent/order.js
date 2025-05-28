import "./order.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import useStore from "../ZustandManager/zustand.js"
function Order(props) {
     let [statesize, setSize] = useState("none")
     const setgroße = useStore((state) => state.setGröße)
     let größe = useStore((state) => state.größe)
     function status(value) {
          if (value > 0) {
               return "black"
          } else {
               return "invisible"
          }
     }
     function wählen(value) {
          if (value !== "none") {
               return <div className="große">Ihre gewählte Größe: {größe}</div>
          } else {
               return <div>Bitte wählen Sie eine Größe</div>
          }
     }

     const size = [56, 62, 68, 74, 80, 86, 92, 98, 104, 110, 116, 122]

     return (
          <div>
               <div className="dropdownorder">
                    <div className="ordersize">{wählen(größe)}</div>

                    <button
                         className="btn btn-größe"
                         type="button"
                         onClick={() => {
                              const dropdownParent = document.getElementById("dropdownparent")
                              if (dropdownParent.classList.contains("expand")) {
                                   dropdownParent.classList.remove("expand")
                              } else {
                                   dropdownParent.classList.add("expand")
                              }
                         }}>
                         Größe wählen
                    </button>
                    <div className="dropdown-menu dropdownparent" id="dropdownparent">
                         <article className="dropdownelement">
                              <div
                                   id="size0"
                                   onClick={() => {
                                        setgroße(size[0])
                                        const dropdownParent = document.getElementById("dropdownparent")
                                        if (dropdownParent.classList.contains("expand")) {
                                             dropdownParent.classList.remove("expand")
                                        }
                                   }}
                                   className={status(props.size[0])}>
                                   {size[0]}
                              </div>
                         </article>
                         <article className="dropdownelement">
                              <div
                                   id="size1"
                                   onClick={() => {
                                        setgroße(size[1])
                                        const dropdownParent = document.getElementById("dropdownparent")
                                        if (dropdownParent.classList.contains("expand")) {
                                             dropdownParent.classList.remove("expand")
                                        }
                                   }}
                                   className={status(props.size[1])}>
                                   {size[1]}
                              </div>
                         </article>
                         <article className="dropdownelement">
                              <div
                                   id="size1"
                                   onClick={() => {
                                        setgroße(size[2])
                                        const dropdownParent = document.getElementById("dropdownparent")
                                        if (dropdownParent.classList.contains("expand")) {
                                             dropdownParent.classList.remove("expand")
                                        }
                                   }}
                                   className={status(props.size[2])}>
                                   {size[2]}
                              </div>
                         </article>
                         <article className="dropdownelement">
                              <div
                                   id="size1"
                                   onClick={() => {
                                        setgroße(size[3])
                                        const dropdownParent = document.getElementById("dropdownparent")
                                        if (dropdownParent.classList.contains("expand")) {
                                             dropdownParent.classList.remove("expand")
                                        }
                                   }}
                                   className={status(props.size[3])}>
                                   {size[3]}
                              </div>
                         </article>
                         <article className="dropdownelement">
                              <div
                                   id="size1"
                                   onClick={() => {
                                        setgroße(size[4])
                                        const dropdownParent = document.getElementById("dropdownparent")
                                        if (dropdownParent.classList.contains("expand")) {
                                             dropdownParent.classList.remove("expand")
                                        }
                                   }}
                                   className={status(props.size[4])}>
                                   {size[4]}
                              </div>
                         </article>
                         <article className="dropdownelement">
                              <div
                                   id="size1"
                                   onClick={() => {
                                        setgroße(size[5])
                                        const dropdownParent = document.getElementById("dropdownparent")
                                        if (dropdownParent.classList.contains("expand")) {
                                             dropdownParent.classList.remove("expand")
                                        }
                                   }}
                                   className={status(props.size[5])}>
                                   {size[5]}
                              </div>
                         </article>
                         <article className="dropdownelement">
                              <div
                                   id="size1"
                                   onClick={() => {
                                        setgroße(size[6])
                                        const dropdownParent = document.getElementById("dropdownparent")
                                        if (dropdownParent.classList.contains("expand")) {
                                             dropdownParent.classList.remove("expand")
                                        }
                                   }}
                                   className={status(props.size[6])}>
                                   {size[6]}
                              </div>
                         </article>
                         <article className="dropdownelement">
                              <div
                                   id="size1"
                                   onClick={() => {
                                        setgroße(size[7])
                                        const dropdownParent = document.getElementById("dropdownparent")
                                        if (dropdownParent.classList.contains("expand")) {
                                             dropdownParent.classList.remove("expand")
                                        }
                                   }}
                                   className={status(props.size[7])}>
                                   {size[7]}
                              </div>
                         </article>
                         <article className="dropdownelement">
                              <div
                                   id="size1"
                                   onClick={() => {
                                        setgroße(size[8])
                                        const dropdownParent = document.getElementById("dropdownparent")
                                        if (dropdownParent.classList.contains("expand")) {
                                             dropdownParent.classList.remove("expand")
                                        }
                                   }}
                                   className={status(props.size[8])}>
                                   {size[8]}
                              </div>
                         </article>
                         <article className="dropdownelement">
                              <div
                                   id="size1"
                                   onClick={() => {
                                        setgroße(size[9])
                                        const dropdownParent = document.getElementById("dropdownparent")
                                        if (dropdownParent.classList.contains("expand")) {
                                             dropdownParent.classList.remove("expand")
                                        }
                                   }}
                                   className={status(props.size[9])}>
                                   {size[9]}
                              </div>
                         </article>
                         <article className="dropdownelement">
                              <div
                                   id="size1"
                                   onClick={() => {
                                        setgroße(size[10])
                                        const dropdownParent = document.getElementById("dropdownparent")
                                        if (dropdownParent.classList.contains("expand")) {
                                             dropdownParent.classList.remove("expand")
                                        }
                                   }}
                                   className={status(props.size[10])}>
                                   {size[10]}
                              </div>
                         </article>
                         <article className="dropdownelement">
                              <div
                                   id="size1"
                                   onClick={() => {
                                        setgroße(size[11])
                                        const dropdownParent = document.getElementById("dropdownparent")
                                        if (dropdownParent.classList.contains("expand")) {
                                             dropdownParent.classList.remove("expand")
                                        }
                                   }}
                                   className={status(props.size[11])}>
                                   {size[11]}
                              </div>
                         </article>

                         <Link to="/kontakt" className="noline">
                              <article className="dropdownelement">andere Größe anfragen</article>
                         </Link>
                    </div>
               </div>
          </div>
     )
}

export default Order
