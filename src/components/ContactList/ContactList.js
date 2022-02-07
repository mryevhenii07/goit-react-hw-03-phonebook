import { UlContainer } from ".././styledComponents/Container.styled";
import { ToDoListItem } from "../styledComponents/Container.styled";
import s from "./ContactList.module.css";
const ContactList = ({ contacts, onDeleteList }) => {
  return (
    <UlContainer>
      {contacts.map(({ id, name, number }) => (
        <ToDoListItem key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            type="button"
            className={s.ContactListBtn}
            onClick={() => onDeleteList(id)}
          >
            Delete
          </button>
        </ToDoListItem>
      ))}
    </UlContainer>
  );
};
export default ContactList;
