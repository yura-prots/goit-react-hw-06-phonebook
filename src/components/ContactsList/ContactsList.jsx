// import PropTypes from 'prop-types';

import ListItem from 'components/ListItem';
import { List } from './ContactsList.styled';

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <div>
      <List>
        {contacts.map(contact => (
          <ListItem key={contact.id} contact={contact} toDelete={onDelete} />
        ))}
      </List>
    </div>
  );
};

// ContactsList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };

export default ContactsList;
