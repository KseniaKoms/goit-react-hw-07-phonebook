import { React, useState, useEffect } from 'react';
import Container from './Container';
import ContactsList from './ContactsList';
import Title from './Title';
import Filter from './Filter';
import ContactForm from './ContactForm';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
// import { CalculateTeamFinanceReport } from './function';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? defaultContacts;
  });

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = ({ name, number }) => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      Notify.warning(`${name} is already in contacts!`);
    } else {
      const contact = {
        id: nanoid(),
        name,
        number,
      };
      setContacts([...contacts, contact]);
    }
  };

  const handleDeleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleFilter = e => {
    setFilter(e.target.value);
  };

  const getFilteredItems = () => {
    const normilized = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilized)
    );
  };

  return (
    <Container>
      <Title title="Phonebook" />
      <ContactForm onSubmit={handleSubmit} />
      <Title title="Contacts" />
      <Filter filter={filter} onChange={handleFilter} />
      <ContactsList
        contacts={getFilteredItems()}
        handleDelete={handleDeleteContact}
      />
      {/* <CalculateTeamFinanceReport /> */}
    </Container>
  );
};

export default App;
