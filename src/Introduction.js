import React from "react";

import "./Introduction.css";

const Introduction = () => {

    return (
        
        <div className="introduction">
            <h1>Welcome to Yubai's Contact List Example</h1>
            <p>This is a contact list web app show case. The interaction is limited to view contacts at this stage.</p>
            <p>Type keywords (case insensitive) in the search bar to find contacts. If more than one keywords are in there, contacts fitting any of them would be displayed.</p>
        </div>
    );
};


export default Introduction