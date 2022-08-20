import { Notify } from 'notiflix';
import { FormInput, FormSubmitBtn, FormLabel } from './ContactForm.styled';
import { useAddContactMutation, useGetContactsQuery } from 'redux/contactsApi';
import { useState, useEffect } from 'react';

const ContactForm = () => {
  const { data } = useGetContactsQuery();
  const [addContact, { isLoading: adding, isSuccess }] =
    useAddContactMutation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (isSuccess) {
      Notify.success('Contact is setting to your phonebook');
      setName('');
      setPhone('');
    }
  }, [isSuccess]);

  const handleSubmit = e => {
    e.preventDefault();

    if (data.some(item => item.name.toLowerCase() === name.toLowerCase())) {
      Notify.warning(`${name} is already in contacts!`);
      return;
    }

    addContact({ name, phone });
  };

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setPhone(e.target.value);
        break;
      default:
        return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormLabel htmlFor="name">Name:</FormLabel>
      <FormInput
        onChange={handleChange}
        value={name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        autoComplete="off"
      />

      <FormLabel htmlFor="number">Tel:</FormLabel>
      <FormInput
        onChange={handleChange}
        value={phone}
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
