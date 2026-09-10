import { useState } from "react";
import "./Contacts.css";

const Contacts = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [contacts, setContact] = useState([
    { id: "1", name: "ahmed", phone: "772527" },
    { id: "2", name: "mohammed", phone: "727275" },
  ]);

  const handleAddContacts = () => {
    const addNewContact = {
      id: Date.now(),
      name: name,
      phone: phone,
    };

    setContact([...contacts, addNewContact]);
    setName("");
    setPhone("");
  };

  const handleDelete = (id) => {
    setContact(contacts.filter((i) => i.id !== id));
  };

  return (
    <div className="container">
      <h2>Contacts List</h2>

      <div className="inputs">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Name"
        />
        <input
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          type="text"
          placeholder="Phone"
        />
        <button onClick={handleAddContacts}>Add New Contact</button>
      </div>

      <div className="contacts-container">
        {contacts.map((contact) => {
          return (
            <div key={contact.id} className="contact-details">
              <div className="info">
                <p className="id">id:#{contact.id}</p>
                <p>Name:{contact.name} </p>
                <p> Phone:{contact.phone}</p>
              </div>
              <button onClick={() => handleDelete(contact.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contacts;
