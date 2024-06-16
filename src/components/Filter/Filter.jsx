import PropTypes from "prop-types";
import { nanoid } from "nanoid";

const Filter = ({ value, handleChange }) => {
  const searchId = nanoid();

  return (
    <div>
      <label htmlFor={searchId}>Find contacts by name </label>
      <input
        type="text"
        placeholder="Filter list"
        id={searchId}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};