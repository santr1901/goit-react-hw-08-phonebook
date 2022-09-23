import { List, ListItem, Button } from '@mui/material';
import css from './ContactList.module.css';

const ContactList = ({ contacts, removeContact }) => {
  return (
    <List className={css.contacts_list}>
      {contacts.map(contact => (
        <ListItem className={css.list_item} key={contact.id}>
          <p>
            <span className={css.name}>{contact.name}:</span>{' '}
            <span className={css.number}>{contact.number}</span>
          </p>
          <Button
            variant="contained"
            className={css.delete_btn}
            type="button"
            onClick={() => removeContact(contact.id)}
          >
            delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
