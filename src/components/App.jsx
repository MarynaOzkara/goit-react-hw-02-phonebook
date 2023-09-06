
export const App = () => {
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <ul>
          <li>
            <label htmlFor="name">Name</label>
            <input type="text" name="name"/>
          </li>
          <li>
            <label htmlFor="number">Number</label>
            <input type="tel" name="number"/>
          </li>
        </ul>
        <button type="button">Add contact</button>
      </div>
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
