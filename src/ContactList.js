const ContactList = () => {

    const contactArr= [
        {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        },
        {
          "id": 2,
          "name": "Ervin Howell",
          "username": "Antonette",
          "email": "Shanna@melissa.tv",
          "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
              "lat": "-43.9509",
              "lng": "-34.4618"
            }
          },
          "phone": "010-692-6593 x09125",
          "website": "anastasia.net",
          "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
          }
        }
      ];

    const contacts = contactArr.map(
        (contact) =>
            <tr>
                <td>{contact.name}<br/>{contact.phone}<br/>{contact.email}</td>
                <td><i>{contact.username}</i><br/>{contact.website}</td>
                <td>{contact.company.name}<br/><i>"{contact.company.catchPhrase}"<br/>{contact.company.bs}</i></td>
                <td>{contact.address.suite} {contact.address.street}<br/>{contact.address.city} {contact.address.zipcode}</td>
            </tr>
        );


    return (
        
        <div className="contact-list">
            <table className="table">

                <tr className="table-header">
                    <th>Contact Details</th>
                    <th>User Details</th>
                    <th>Company</th>
                    <th>Address</th>
                </tr>
                
                {contacts}
                

            </table>
        </div>
    );
};


export default ContactList