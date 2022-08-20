import {
  ContactInfo,
  ContactItems,
  ContactRemoveBtn,
} from '../ContactItem/ContactsItem.styled';
import { useRemoveContactMutation } from 'redux/contactsApi';

import { Spinner } from 'components/Spinner/Spinner';
import { Notify } from 'notiflix';

export const ContactItem = ({ name, number, id }) => {
  const [removeContact, { isLoading: isRemoving, isSuccess }] =
    useRemoveContactMutation();

  return (
    <ContactItems key={id}>
      <ContactInfo>
        {name}: {number}
      </ContactInfo>
      <ContactRemoveBtn type="button" onClick={() => removeContact(id)}>
        {isRemoving ? <Spinner /> : 'X'}
        {isSuccess && Notify.success('Contact deleted')}
      </ContactRemoveBtn>
    </ContactItems>
  );
};
