import {
  ContactInfo,
  ContactItem,
  ContactRemoveBtn,
} from './ContactsList.styled';
import {
  deleteContact,
  selectContact,
  selectFilter,
} from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

const ContactsList = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContact);
  const dispatch = useDispatch();

  const filteredItems = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredItems.map(({ name, id, number }) => {
        return (
          <ContactItem key={id}>
            <ContactInfo>
              {name}: {number}
            </ContactInfo>
            <ContactRemoveBtn
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              X
            </ContactRemoveBtn>
          </ContactItem>
        );
      })}
    </ul>
  );
};

export default ContactsList;
