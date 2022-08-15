import {
  ContactInfo,
  ContactItem,
  // ContactRemoveBtn,
} from './ContactsList.styled';
// import {
//   deleteContact,
//   selectContact,
//   selectFilter,
// } from 'redux/contactsSlice';
// import { useDispatch } from 'react-redux';
import { useGetContactsQuery } from 'redux/contactsApi';

const ContactsList = () => {
  // const dispatch = useDispatch();

  const { data, error, isLoading } = useGetContactsQuery();

  console.log(data);
  console.log(error);
  console.log(isLoading);

  // const filteredItems = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <ul>
      {data.map(({ name, id, phone }) => {
        return (
          <ContactItem key={id}>
            <ContactInfo>
              {name}: {phone}
            </ContactInfo>
            {/* <ContactRemoveBtn
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              X
            </ContactRemoveBtn> */}
          </ContactItem>
        );
      })}
    </ul>
  );
};

export default ContactsList;
