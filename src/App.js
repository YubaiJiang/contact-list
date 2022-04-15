import React, {useState} from "react";
import Introduction from "./Introduction";
import ContactPanel from "./ContactPanel";

import "./App.css";

const App = () => {

    document.title = "Contact List";

 
    return (
        
        <div className="app-container">
            <Introduction />
            <ContactPanel />
        </div>
    );
};


export default App