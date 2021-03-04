import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

const ContactListItem = ({ id, name, number, onDeleteContact }) => (
  <li className={styles['list-item']}>
    <p>
      <span className={styles['contact-name']}>{name}: </span>
      {number}
    </p>

    <button
      type="button"
      onClick={() => onDeleteContact(id)}
      className={styles.button}
    >
      Delete
    </button>
  </li>
);

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
