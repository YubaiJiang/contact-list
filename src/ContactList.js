import {useState} from "react";


const ContactList = (props) => {

  let displayArr = props.contacts;

    const contacts = displayArr.map(
        (contact) =>
            <tr key={contact.id}>
                <td><b>{contact.name}</b><br/>{contact.phone}<br/>{contact.email}</td>
                <td><i>{contact.username}</i><br/>{contact.website}</td>
                <td>{contact.company.name}<br/><i>"{contact.company.catchPhrase}"<br/>{contact.company.bs}</i></td>
                <td>{contact.address.suite} {contact.address.street}<br/>{contact.address.city} {contact.address.zipcode}</td>
            </tr>
        );


    return (
      <div>
      {displayArr.length === 0 &&
        <div className = "Loading">
          <h2>Loading Contact List.</h2>
        </div>
      }
      {displayArr.length > 0 && 
        <div className="contact-list">
            <table className="table">
                <thead>
                <tr className="table-header">
                    <th>Contact Details</th>
                    <th>User Details</th>
                    <th>Company</th>
                    <th>Address</th>
                </tr>
                </thead>

                <tbody>
                {contacts}
                </tbody>

            </table>
        </div>
      }
      </div>
    );
};


export default ContactList