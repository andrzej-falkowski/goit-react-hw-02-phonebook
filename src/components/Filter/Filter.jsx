import PropTypes from "prop-types";
import { nanoid } from "nanoid";

const Filter = ({ filter, onChange }) => {
  const searchId = nanoid();

  return (
    <div>
      <label>
        Find contacts by name <br />
        <input type="text" 
        placeholder="Filter list" 
        onChange={onChange}
        id={searchId}
        value={filter}
         />
      </label>
    </div>
  );
};
export default Filter;

Filter.propTypes = {
  filter: PropTypes.string,
};
