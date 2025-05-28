


import Home from "./Components/HomeComponent/home"
import Interface from "./Components/UiComponent/ui"
import "./App.css"


//import { ToastProvider } from "react-toast-notifications"
import { BrowserRouter, Route } from "react-router-dom"



function App() {
     return (
          <BrowserRouter >
               
               <Route exact path="/home" component={Home} />
               <Route exact path="/ui" component={Interface} />
               
               
          </BrowserRouter>
     )
}

export default App
