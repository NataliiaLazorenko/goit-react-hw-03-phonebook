import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.name === '') {
      return;
    }

    this.props.onFormSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label className="label">
          Name
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={this.handleChange}
            className="input-field"
          />
        </label>
        <label className="label">
          Phone Number
          <input
            type="tel"
            placeholder="Enter phone number"
            name="number"
            value={number}
            onChange={this.handleChange}
            className="input-field"
          />
        </label>
        <button
          type="submit"
          className={[`button ${styles['form-btn']}`]}
          disabled={name === '' || number === '' ? true : false}
        >
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
