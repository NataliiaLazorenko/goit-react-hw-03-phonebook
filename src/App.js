import React, { Component } from 'react';
import shortid from 'shortid';

import Container from './components/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  contactId = shortid.generate();

  addContact = ({ name, number }) => {
    const isInContacts = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (isInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  filterContacts = event => {
    const { value } = event.target;

    this.setState({
      filter: value,
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;

    const normalizedFilter = this.state.filter.toLowerCase();
    const contactsToShow = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onFormSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.filterContacts} />
        <ContactList
          contacts={contactsToShow}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
