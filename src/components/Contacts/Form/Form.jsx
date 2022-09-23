import { useState } from 'react';
import css from './Form.module.css';
import { Input, Button } from '@mui/material';

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const changeName = event => {
    setName(event.currentTarget.value);
  };

  const changeNumber = event => {
    setNumber(event.currentTarget.value);
  };

  const addToContacts = event => {
    event.preventDefault();
    onSubmit({ name, number });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={addToContacts}>
      <div className={css.form}>
        <label>
          <h4 className={css.input_title}>Name</h4>
          <Input
            className={css.form_input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={changeName}
            value={name}
          />
        </label>
        <label>
          <h4 className={css.input_title}>Number</h4>
          <Input
            className={css.form_input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={changeNumber}
            value={number}
          />
        </label>
      </div>

      <div className={css.button_wrapper}>
        <Button
          variant="contained"
          className={css.add_contact_btn}
          type="subbmit"
        >
          Add contact
        </Button>
      </div>
    </form>
  );
};

export default Form;
