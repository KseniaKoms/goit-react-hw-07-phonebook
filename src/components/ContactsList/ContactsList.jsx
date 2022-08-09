import React from 'react';
import PropTypes from 'prop-types';
import {
  ContactInfo,
  ContactItem,
  ContactRemoveBtn,
} from './ContactsList.styled';
import { deleteContact } from 'components/redux/contacktsSlice';
import { useDispatch } from 'react-redux/es/exports';

const ContactsList = ({ contacts }) => {
  const dispatch = useDispatch();
  return (
    <ul>
      {contacts.map(({ name, id, number }) => {
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

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
