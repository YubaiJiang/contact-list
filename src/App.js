import React, {useState} from "react";
import Introduction from "./Introduction";
import ContactPanel from "./ContactPanel";

const App = () => {

    document.title = "Contact List";

    const [contacts, setContacts] = useState();

    fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()).then(json => setContacts(json));


 
    return (
        
        <div className="app-container">
            <Introduction />
            <ContactPanel contacts = {contacts} setContacts = {setContacts} />
        </div>
    );
};


export default App