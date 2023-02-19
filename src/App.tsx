import CssBaseline from "@mui/material/CssBaseline";
import { ContactsPage } from "./ContactsPage/ContactsPage";
import {DB} from "./db";
function App() {
  const db = DB.getInstance();
  console.log(db.Contact.get(1))
  // db.Contact.set(1,{first_name:"John",last_name:"Doe",gender:"1234567890",email:"d2s3",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"})
  console.log("Product",db.Product.get(1))
  db.Product.set(1,{price:"100.22",name:"misio"})
  console.log(db.Product.get(1))
  return (
    <div className="App">
      <CssBaseline enableColorScheme />
      <ContactsPage />
    </div>
  );
}

export default App;
