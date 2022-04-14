import {useState} from "react"
import SearchBar from "./SearchBar"
import ContactList from "./ContactList"
import Title from "./Title"

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
                if (contact.name.includes(word) ||
                    contact.email.includes(word) ||
                    contact.phone.includes(word) ||
                    contact.username.includes(word) ||
                    contact.website.includes(word) ||
                    contact.address.street.includes(word) ||
                    contact.address.suite.includes(word) ||
                    contact.address.city.includes(word) ||
                    contact.address.zipcode.includes(word) ||
                    contact.company.name.includes(word) ||
                    contact.company.catchPhrase.includes(word) ||
                    contact.company.bs.includes(word)) {
                        dispArr.push(contact);
                        break;
                    }

            }
        }
    }

    return (
        
        <div className="contact-panel">
            <Title />
            <SearchBar setSearch = {setSearch}/>
            <ContactList contacts = {dispArr}/>
        </div>
    );
};


export default ContactPanel