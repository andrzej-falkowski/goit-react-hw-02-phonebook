import React, { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handleChange = ev => {
    const { name, value } = ev.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  addContact = newContact => {

    const isInContacts = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
  
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

    // if (this.contacts.filter.length > 0) {
    //   window.alert(JSON.stringify(`${name} is already in contacts`));
    //   return;
    // }
  //   this.setState(prev => {
  //     const list = [...prev.contacts];
  //     list.push({
  //       id: nanoid(),
  //       [name]: name,
  //       [number]: number,
  //     });
  //     return { contacts: list };
  //   });
  // };

  handleFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  handleDelete = event => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== event),
      };
    });
  };

  render() {
    const { filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} handleChange={this.handleFilter}/>
        <ContactList
           filter={this.state.filter}
           contacts={this.state.contacts}
           removeContact={this.handleDelete}
        />
      </div>
    );
  }
}