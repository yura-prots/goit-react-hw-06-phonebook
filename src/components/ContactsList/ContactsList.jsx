import { useSelector } from 'react-redux';

import ListItem from 'components/ListItem';
import { List } from './ContactsList.styled';

const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);

  return (
    <div>
      <List>
        {contacts.map(contact => (
          <ListItem key={contact.id} contact={contact} />
        ))}
      </List>
    </div>
  );
};

export default ContactsList;
