import {
  ContactInfo,
  ContactItem,
  ContactRemoveBtn,
} from './ContactsList.styled';
// import {
//   deleteContact,
//   selectContact,
//   selectFilter,
// } from 'redux/contactsSlice';
// import { useDispatch } from 'react-redux';
import {
  useGetContactsQuery,
  useRemoveContactMutation,
} from 'redux/contactsApi';

const ContactsList = () => {
  // const dispatch = useDispatch();

  const { data, error, isFetching } = useGetContactsQuery();
  const [removeContact, { isLoading: isRemoving }] = useRemoveContactMutation();

  console.log(data);
  console.log(error);
  console.log(isFetching);

  // const filteredItems = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <ul>
      {isFetching && <p>Is loading...</p>}
      {data &&
        data.map(({ name, id, phone }) => {
          return (
            <ContactItem key={id}>
              <ContactInfo>
                {name}: {phone}
              </ContactInfo>
              <ContactRemoveBtn type="button" onClick={() => removeContact(id)}>
                {isRemoving && <p>deleting...</p>} X
              </ContactRemoveBtn>
            </ContactItem>
          );
        })}
    </ul>
  );
};

export default ContactsList;
