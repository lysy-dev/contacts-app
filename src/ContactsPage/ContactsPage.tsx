import { observer } from "mobx-react-lite";
import List from "@mui/material/List";
import { ContactCard } from "./components/ContactCard/ContactCard";
import HourglassTopOutlinedIcon from '@mui/icons-material/HourglassTopOutlined';
import Divider from '@mui/material/Divider';
import { SearchBar } from "./components/SearchBar/SearchBar";
import { ContactsPageState } from "./state";

const cachedState: { [key: string]: ContactsPageState | undefined } = {};

const getCachedState = (key: string): ContactsPageState => {
  const oldState = cachedState[key];
  if (oldState) return oldState;
  const state = new ContactsPageState();
  cachedState[key] = state;
  return state;
};

const _ContactsPage = () => {
  const contactsPageState = getCachedState("contacts");
  const { contacts, searchBarState, filteredCardsState } = contactsPageState;
  if (contacts === undefined) return <div><HourglassTopOutlinedIcon/></div>;
  return (
    <div style={{}}>
      <SearchBar state={searchBarState} />
      <List>
        {filteredCardsState.map((cardState,i) => {
          return <>
          <ContactCard state={cardState} />
          {i<filteredCardsState.length && 
      <Divider variant="inset" component="li" />}
          </>
        })}
      </List>
    </div>
  );
};

export const ContactsPage = observer(_ContactsPage);
