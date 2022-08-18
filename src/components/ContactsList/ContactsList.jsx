import {
  ContactInfo,
  ContactItem,
  ContactRemoveBtn,
} from './ContactsList.styled';
// import { selectFilter } from 'redux/filterSlice';
import {
  useGetContactsQuery,
  useRemoveContactMutation,
} from 'redux/contactsApi';
// import { useSelector } from 'react-redux';
import { Spinner } from 'components/Spinner/Spinner';

const ContactsList = () => {
  const { data, isFetching } = useGetContactsQuery();
  const [removeContact, { isLoading: isRemoving }] = useRemoveContactMutation();
  // const filter = useSelector(selectFilter);

  console.log(data);

  // const filtered = data.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <ul>
      {isFetching && <Spinner />}
      {data &&
        data.map(({ name, id, phone }) => {
          return (
            <ContactItem key={id}>
              <ContactInfo>
                {name}: {phone}
              </ContactInfo>
              <ContactRemoveBtn type="button" onClick={() => removeContact(id)}>
                {isRemoving && <Spinner />} X
              </ContactRemoveBtn>
            </ContactItem>
          );
        })}
    </ul>
  );
};

export default ContactsList;
