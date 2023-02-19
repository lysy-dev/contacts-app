import CssBaseline from "@mui/material/CssBaseline";
import { ContactsPage } from "./ContactsPage/ContactsPage";

import CardHeader from '@mui/material/CardHeader';

function App() {
  return (
    <div className="App">
      <CssBaseline enableColorScheme />
      <CardHeader title="Contacts" style={{textAlign:"center",backgroundColor:"#B6E0E0"}}/>
      <ContactsPage />
    </div>
  );
}

export default App;
