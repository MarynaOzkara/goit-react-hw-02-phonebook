import { ListItem, Name, Number } from "./ContactItem.styled";

const ContactItem = ({contacts}) => (
    <ListItem>
        <Name>{contacts.name}</Name>
        <Number>{contacts.number}</Number>
  </ListItem>
)
export default ContactItem;