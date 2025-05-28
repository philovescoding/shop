import React, { useState } from "react";
import "./email.css";
const Message = () => {
     var url="";
     
     url = "localhost:8080"
     
     const [name, setName] = useState("")
     const [email, setEmail] = useState("")
     const [message, setMessage] = useState("")
     const [subject, setSubject] = useState("")
     const PostData = () => {
          fetch("http://" + url + "/api/kontakt", {
               method: "POST",
               headers: {
                    "Content-Type": "application/json"
               },

               body: JSON.stringify({
                    name,
                    email,
                    subject,
                    message
               })
          })
               .then((data) => data.json())
               .then((text) => {
                    alert(text._status)
                    setMessage("")
                    setName("")
                    setSubject("")
                    setEmail("")
               })
     }
     return (
          <div className="kontakt">
               <h3 className="headline">Kontakt</h3>
               <div className="card auth-card input-field">
                    <h2 className="headline2">
                         Bei Fragen oder individuellen Bestellungen,<br></br> schreib mir doch einfach eine e-mail
                    </h2>
                    <input type="text" className="form-control" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" className="form-control" placeholder="Betreff" value={subject} onChange={(e) => setSubject(e.target.value)} />
                    <textarea type="text" className="form-control-text" placeholder="Nachricht" value={message} onChange={(e) => setMessage(e.target.value)} />
                    <button className="btn" onClick={() => PostData()}>
                         Senden
                    </button>
               </div>
          </div>
     )
}
export default Message
