import { ListOfContacts } from "./ContactList.styled";
import ContactItem from "components/ContactList/ContactItem";
import { Component } from "react";


class ContactList extends Component {
  state = { contacts: [], }
  render(){
    return this.state.contacts.map((contact) => (
      <ListOfContacts key={contact.id}>
         <ContactItem contacts={contact}/>
      </ListOfContacts> 
    )) 
  }
}

// const ContactList = ({contacts}) => {
//   return <div>
//       <ListOfContacts>{
//           contacts.map((name, number) =>
//             <ContactItem
//               name={name}
//               number={number}
//             />
//     )}
    
//       </ListOfContacts>
//         </div>
  
// }
  


export default ContactList;