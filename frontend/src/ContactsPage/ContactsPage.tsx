import HourglassTopOutlinedIcon from "@mui/icons-material/HourglassTopOutlined";
import { SearchBar } from "./components/SearchBar/SearchBar";
import {
  ContactsContext,
  useContacts,
  useFetcher,
  useSearchBarState,
} from "./hooks";
import { memo } from "react";
import { ContactsListComponent } from "./components/ContactsList/ContactsList";

const _ContactsPage = memo(() => {
  const { contacts, dispatchContacts } = useContacts();

  const { loading } = useFetcher(dispatchContacts);
  const { searchInput, setSearchInput, filteredContactList } =
    useSearchBarState(contacts);

  if (loading)
    return (
      <div>
        <HourglassTopOutlinedIcon />
      </div>
    );
  return (
    <div>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <ContactsContext.Provider value={dispatchContacts}>
        <ContactsListComponent filteredContactList={filteredContactList} />
      </ContactsContext.Provider>
    </div>
  );
});

export const ContactsPage = _ContactsPage;
