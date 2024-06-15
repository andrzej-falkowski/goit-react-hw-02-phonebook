import { nanoid } from "nanoid";
import { Component } from "react";

export default class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      name: "",
      number: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState((prev) => {
      const list = [...prev.contacts];
      list.push({
        id: nanoid(),
        name: this.state.name,
        number: this.state.number,
      });
      return { contacts: list };
    });
    
  };

  render() {
    const nameId = nanoid();
    const numId = nanoid();
    return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={nameId}>Name</label>
          <input
            id={nameId}
            type="text"
            name="name"
            pattern="^([a-zA-Zа-яА-Я]+[ ]?[a-zA-Zа-яА-Я]+)*$"
            // pattern="^[a-zA-Z]+(([' -][a-zA-Z])?[a-zA-Z]*)*$"
            // pattern="^(?:[A-Z][a-z]{3,9}\x20){1,2}[A-Z]\.\x20[A-Z][a-z]{3,9}$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <label htmlFor={numId}>Phone number</label>
          <input
            id={numId}
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Add contact</button>
        </form>
    );
  }
}