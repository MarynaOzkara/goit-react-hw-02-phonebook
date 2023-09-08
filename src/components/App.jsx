import ContactForm from "./ContactForm/ContactForm";
import { Container } from "./App.styled";
// import { nanoid } from "nanoid";
import ContactList from "./ContactList/ContactList";



export const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
       <ContactForm/>
      <h2>Contacts</h2>
      <ContactList/> 
    </Container>
       
  );
};
