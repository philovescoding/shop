import "./home.css"
import Teaser from "../TeaserComponent/teaser"
import Content from "../ContentComponent/content"

function Home() {
     return (
          <div className="Home">
               <div className="intro">
                    <h1 className="welcome"> Lass dich Inspirieren </h1>
               </div>
               <Teaser></Teaser>
          </div>
     )
}

export default Home
