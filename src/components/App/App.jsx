import { useSelector } from 'react-redux';

import ContactsForm from 'components/ContactsForm';
import ContactsFilter from 'components/ContactsFilter';
import ContactsList from 'components/ContactsList';

import { Container, Wrapper, Title } from './App.styled';

const App = () => {
  const contacts = useSelector(state => state.contacts);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactsForm />

      {contacts.length > 0 && (
        <Wrapper>
          <Title>Contacts</Title>
          <ContactsFilter />
          <ContactsList />
        </Wrapper>
      )}
    </Container>
  );
};

export default App;
