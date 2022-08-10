import { FilterLabel, FilterInput } from './Filter.styled';
import { selectFilter, setFilter } from '../../redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
      />
    </>
  );
};

export default Filter;
