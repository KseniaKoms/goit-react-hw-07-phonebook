import Container from './Container';
import ContactsList from './ContactsList';
import Title from './Title';
import Filter from './Filter';
import ContactForm from './ContactForm';

const App = () => {
  return (
    <Container>
      <Title title="Phonebook" />
      <ContactForm />
      <Title title="Contacts" />
      <Filter />
      <ContactsList />
    </Container>
  );
};

export default App;
