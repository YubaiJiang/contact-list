import React, {useState} from "react"
import SearchBar from "./SearchBar"
import ContactList from "./ContactList"
import Title from "./Title"

import "./ContactPanel.css"

const ContactPanel = () => {

    const [contactArr, setContactArr] = useState([]);
    const [search, setSearch] = useState("");

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => setContactArr(json))

    let keyWords = search.split(" ");

    let dispArr = [];

    if (keyWords.length !== 0 && contactArr.length !== 0) {
        for (let i = 0; i < contactArr.length; i++) {
            let contact = contactArr[i];
            for (let j = 0; j < keyWords.length; j++) {
                let word = keyWords[j];
                word = word.trim().toLowerCase();
                if (word === "") continue;
                if (contact.name.toLowerCase().includes(word) ||
                    contact.email.toLowerCase().includes(word) ||
                    contact.phone.toLowerCase().includes(word) ||
                    contact.username.toLowerCase().includes(word) ||
                    contact.website.toLowerCase().includes(word) ||
                    contact.address.street.toLowerCase().includes(word) ||
                    contact.address.suite.toLowerCase().includes(word) ||
                    contact.address.city.toLowerCase().includes(word) ||
                    contact.address.zipcode.toLowerCase().includes(word) ||
                    contact.company.name.toLowerCase().includes(word) ||
                    contact.company.catchPhrase.toLowerCase().includes(word) ||
                    contact.company.bs.toLowerCase().includes(word)) {
                        dispArr.push(contact);
                        break;
                    }

            }
        }
    }

    if (dispArr.length === 0) dispArr = contactArr;

    dispArr.sort( function( a, b ) {
        a = a.name.toLowerCase();
        b = b.name.toLowerCase();
    
        return a < b ? -1 : a > b ? 1 : 0;
    });

    return (
        
        <div className="contact-panel">
            <Title />
            <SearchBar setSearch = {setSearch}/>
            <ContactList contacts = {dispArr}/>
        </div>
    );
};


export default ContactPanel