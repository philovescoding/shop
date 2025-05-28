import { useEffect, useState } from "react"
import { ToastProvider } from "react-toast-notifications"
import Email from "../EmailComponent/email"
import "./content.css"

function Content() {
     let [test, setTest] = useState([])
     var url = "localhost:8080"
     useEffect(() => {
          fetch("http://" + url + "/api/")
               .then((medias) => medias.json())
               .then((media) => {
                    setTest(media)
               })
     }, [])

     return (
          <div className="instagram">
               <div className="wrapperinsta">
                    <h3 className="headlinee">Instagram</h3>
                    {test[2] &&
                         test.map((media, index) => (
                              <article className="center" key={index}>
                                   <img alt="media" className="media" title={index + media.id} src={media.url}></img>
                              </article>
                         ))}
               </div>
               <ToastProvider>
                    <Email />
               </ToastProvider>
          </div>
     )
}
export default Content

