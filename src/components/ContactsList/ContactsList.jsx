import { useSelector } from 'react-redux';

import ListItem from 'components/ListItem';
import { List } from './ContactsList.styled';

const ContactsList = () => {
  const visibleContacts = useSelector(state => {
    return state.contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .trim()
        .includes(state.filter.toLowerCase().trim())
    );
  });

  return (
    <div>
      <List>
        {visibleContacts.map(contact => (
          <ListItem key={contact.id} contact={contact} />
        ))}
      </List>
    </div>
  );
};

export default ContactsList;
