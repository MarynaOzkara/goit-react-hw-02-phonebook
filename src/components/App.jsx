import ContactForm from "./ContactForm/ContactForm";
import { nanoid } from "nanoid";

export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
       <ContactForm/>
      <h2>Contacts</h2>
      <ul>
        <li>
          <p>Eden Clements: 645-17-79</p>
        </li>
        <li>
          <p>Eden Clements: 645-17-79</p>
        </li>
        <li>
          <p>Rosi Simpson: 645-17-79</p>
        </li>
      </ul> 
    </div>
       
  );
};
