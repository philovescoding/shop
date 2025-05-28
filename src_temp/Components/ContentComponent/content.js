import { useEffect, useState } from "react"
import { ToastProvider } from "react-toast-notifications"
import Email from "../EmailComponent/email"
import "./content.css"

function Content() {
     let [test, setTest] = useState([])
     let url = "localhost:8080"
     
     useEffect(() => {
          fetch("http://" + url + "/controller/")
               .then((medias) => medias.json())
               .then((media) => {
                    setTest(media)
               })
     }, [])

     return (
          <div className="instagram">
               <div className="wrapperinsta">
                    <h3 className="headlinee">Instagram</h3>
                    {test.map((media, index) => (
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

/*



{test.map((video, index) => ( 
          <article key = { index } >
              <img className="imgfeed" alt = "media" title = { index } height = "200" width = "auto" src = { video.data.user.edge_owner_to_timeline_media.edges[6].node.display_resources[0].src } >
              </img> 

              <img className="imgfeed" alt = "media" title = "zwei" height = "200" width = "auto" src = { video.data.user.edge_owner_to_timeline_media.edges[7].node.display_resources[0].src } >
              </img> 

              <img className="imgfeed" alt = "media" title = "drei" height = "200" width = "auto" src = { video.data.user.edge_owner_to_timeline_media.edges[8].node.display_resources[0].src } >
              </img>
<br></br>
              <img className="imgfeed" alt = "media" title = "vier" height = "200" width = "auto" src = { video.data.user.edge_owner_to_timeline_media.edges[9].node.display_resources[0].src } >
              </img>

              <img className="imgfeed" alt = "media" title = "funf" height = "200" width = "auto" src = { video.data.user.edge_owner_to_timeline_media.edges[10].node.display_resources[0].src } >
              </img>

              <img className="imgfeed" alt = "media" title = "sechs" height = "200" width = "auto" src = { video.data.user.edge_owner_to_timeline_media.edges[11].node.display_resources[0].src } >
              </img>     
          </article>
          
          ))

*/
