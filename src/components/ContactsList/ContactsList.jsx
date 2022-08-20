import { useGetContactsQuery } from 'redux/contactsApi';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/filterSlice';
import { Spinner } from 'components/Spinner/Spinner';

const ContactsList = () => {
  const { data, isLoading } = useGetContactsQuery();
  const filter = useSelector(selectFilter);
  return (
    <ul>
      {isLoading && <Spinner />}
      {data &&
        data
          .filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(({ name, id, phone }) => {
            return <ContactItem key={id} name={name} number={phone} id={id} />;
          })}
    </ul>
  );
};

export default ContactsList;
