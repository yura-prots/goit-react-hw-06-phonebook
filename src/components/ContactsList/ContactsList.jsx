import { useSelector } from 'react-redux';

import ListItem from 'components/ListItem';
import { List } from './ContactsList.styled';

const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const visibleContacts = contacts.filter(contact => {
    const contactName = contact.name.toLowerCase().trim();
    const filterName = filter.toLowerCase().trim();

    return contactName.includes(filterName);
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
