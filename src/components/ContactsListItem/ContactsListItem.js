const ContactsListItem = ({ contacts, onDeleteButtonClick }) => {
  return contacts.map(({ id, name, number }) => (
    <li key={id}>
      {name}:{number}
      <button onClick={() => onDeleteButtonClick(id)}>Delete</button>
    </li>
  ));
};
export default ContactsListItem;
