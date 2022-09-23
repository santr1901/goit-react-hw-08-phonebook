import { Input } from '@mui/material';
import css from './Filter.module.css';
const Filter = ({ filter, onChangeFilter }) => {
  return (
    <label>
      <span className={css.filter_txt}>Search contact:</span>

      <Input
        className={css.filter_input}
        type="text"
        value={filter}
        onChange={onChangeFilter}
        placeholder="Enter the contact name"
      />
    </label>
  );
};

export default Filter;
