import PropTypes from "prop-types";
import styles from './ContactList.module.css';

const ContactList = ({ filter, contacts, removeContact }) => {

  return (
    <>
      <ul className={styles.list}>
        {contacts
          .filter(element =>
            element.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(contact => (
            <li key={contact.id} className={styles.li}>
              {contact.name}: {contact.number}
              <button
                className={styles.button}
                type="submit"
                onClick={() => removeContact(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  removeContact: PropTypes.func,
};