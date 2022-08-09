import Container from './Container';
import ContactsList from './ContactsList';
import Title from './Title';
import Filter from './Filter';
import ContactForm from './ContactForm';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import {
  setFilter,
  selectFilter,
  selectContact,
  addContact,
} from './redux/contacktsSlice';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContact);
  const dispatch = useDispatch();

  const handleSubmit = ({ name, number }) => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      Notify.warning(`${name} is already in contacts!`);
    } else {
      dispatch(
        addContact({
          id: nanoid(),
          name,
          number,
        })
      );
    }
  };
  const handleChange = e => {
    dispatch(setFilter(e.target.value));
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
      <Filter filter={filter} onChange={handleChange} />
      <ContactsList contacts={getFilteredItems()} />
    </Container>
  );
};

export default App;
