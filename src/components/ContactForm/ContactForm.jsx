import { Notify } from 'notiflix';
import { FormInput, FormSubmitBtn, FormLabel } from './ContactForm.styled';
import { useAddContactMutation, useGetContactsQuery } from 'redux/contactsApi';

const ContactForm = () => {
  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading: adding }] = useAddContactMutation();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (contacts.some(item => item.name.toLowerCase() === name.toLowerCase())) {
      Notify.warning(`${name} is already in contacts!`);
    } else {
      addContact(name, number);
    }
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormLabel htmlFor="name">Name:</FormLabel>
      <FormInput
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        autoComplete="off"
      />

      <FormLabel htmlFor="number">Tel:</FormLabel>
      <FormInput
        type="tel"
        name="number"
        autoComplete="off"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <FormSubmitBtn type="submit">
        {adding ? <p>adding...</p> : <p>+ add contact</p>}
      </FormSubmitBtn>
    </form>
  );
};

export default ContactForm;
