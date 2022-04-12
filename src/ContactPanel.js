import SearchBar from "./SearchBar"
import ContactList from "./ContactList"
import Title from "./Title"

const ContactPanel = () => {

    return (
        
        <div className="contact-panel">
            <Title />
            <SearchBar />
            <ContactList />
        </div>
    );
};


export default ContactPanel