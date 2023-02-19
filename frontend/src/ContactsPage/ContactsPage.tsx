import HourglassTopOutlinedIcon from "@mui/icons-material/HourglassTopOutlined";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { useAddContact, useFetcher, useSearchBarState } from "./hooks";
import { memo, useState } from "react";
import { ContactsListComponent } from "./components/ContactsList/ContactsList";
import { ContactsList } from "./types";

const _ContactsPage = memo(() => {
  const [contacts, setContacts] = useState<ContactsList | null>(null);

  const { loading } = useFetcher(setContacts);
  const { searchInput, setSearchInput, filteredContactList } =
    useSearchBarState(contacts);
  const { processing, addContact } = useAddContact(setContacts, contacts);
  if (loading || processing)
    return (
      <div>
        <HourglassTopOutlinedIcon />
      </div>
    );
  return (
    <div>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <ContactsListComponent
        filteredContactList={filteredContactList}
        addContact={addContact}
      />
    </div>
  );
});

export const ContactsPage = _ContactsPage;
