import {
  ContactInfo,
  ContactItems,
  ContactRemoveBtn,
} from '../ContactItem/ContactsItem.styled';
import { useRemoveContactMutation } from 'redux/contactsApi';
import { Spinner } from 'components/Spinner/Spinner';
import { Notify } from 'notiflix';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

export const ContactItem = ({ name, number, id }) => {
  const [removeContact, { isLoading: isRemoving, isSuccess }] =
    useRemoveContactMutation();
  useEffect(() => {
    if (isSuccess) {
      Notify.success('Contact deleted');
    }
  }, [removeContact, isSuccess]);
  return (
    <ContactItems key={id}>
      <ContactInfo>
        {name}: {number}
      </ContactInfo>
      <ContactRemoveBtn type="button" onClick={() => removeContact(id)}>
        {isRemoving ? <Spinner /> : 'X'}
      </ContactRemoveBtn>
    </ContactItems>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
