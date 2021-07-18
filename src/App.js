// import logo from './logo.svg';
// import './App.css';

import React from "react";
// import shortid from "shortid";

import Section from "./components/Section";
import Form from "./components/Form";
import ContactsList from "./components/ContactsList";

class App extends React.Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };

  formSubmitHandler = (data) => {
    console.log(data);
    this.setState((prev) => {
      return { contacts: [...prev.contacts, data] };
    });
  };
  render() {
    // console.log(this.state.contacts[0]);
    // console.log(this.state.contact.name);
    console.log(ContactsList);
    // console.log()
    return (
      <>
        <Section title="Phonebook">
          <Form propOnSubmit={this.formSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <ul>
            {/* <ContactsList> */}
            {this.state.contacts.map((contact) => (
              // console.log(this.state.contacts);
              // console.log(contact)

              <li key={contact.id}>
                {contact.name}:{contact.number}
              </li>
            ))}
            {/* </ContactsList> */}
          </ul>
        </Section>
      </>
    );
  }
}
export default App;
