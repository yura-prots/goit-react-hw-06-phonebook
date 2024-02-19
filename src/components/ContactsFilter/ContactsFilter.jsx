import { useDispatch, useSelector } from 'react-redux';

import { Filter } from './ContactsFilter.styled';

const ContactsFilter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <div>
      <Filter
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(e.target.value)}
        placeholder="Find contact by name"
      />
    </div>
  );
};

export default ContactsFilter;
