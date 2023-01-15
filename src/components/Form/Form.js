import css from './Form.module.css'
import React from "react";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { nanoid } from 'nanoid'

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
        default:
          break;
    }
  };
  
  const handleSubmit = e => {
    e.preventDefault();
     const existingName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    const existingNumber = contacts.some(contact => contact.number === number);

    if (existingName) {
      alert ('This name is already exist')
      return;
    } else if (existingNumber) {
      alert ('This number is already exist')
      return;
    } else {
   dispatch(addContacts({ id: nanoid(), name, number }));
    }
    reset();
  };


  const reset = () => {
   setName('');
   setNumber('');
  };


    return (
      <form onSubmit={handleSubmit} className={css.form}>
        <label>
          Name
          <input className={css.input}
            value={name}
            type="text"
            name='name'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </label>
        <label>
          Number
          <input className={css.input}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </label>

        <button type="submit" className={css.btn}>Add contact</button>
      </form>
    )
  }
