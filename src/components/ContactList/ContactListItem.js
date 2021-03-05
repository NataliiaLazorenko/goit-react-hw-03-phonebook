import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

const ContactListItem = ({ name, number, onDeleteContact }) => (
  <>
    <p>
      <span className={styles['contact-name']}>{name}: </span>
      {number}
    </p>

    <button
      type="button"
      onClick={onDeleteContact}
      className={[`button ${styles['delete-contact-btn']}`]}
    >
      Delete
    </button>
  </>
);

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
