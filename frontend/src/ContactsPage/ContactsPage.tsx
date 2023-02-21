import HourglassTopOutlinedIcon from "@mui/icons-material/HourglassTopOutlined";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { useAddContact, useContacts, useFetcher, useSearchBarState } from "./hooks";
import { memo, useState } from "react";
import { ContactsListComponent } from "./components/ContactsList/ContactsList";
import { ContactsList } from "./types";

const _ContactsPage = memo(() => {
  const {contacts, dispatchContacts} = useContacts();

  const { loading } = useFetcher(dispatchContacts);
  const { searchInput, setSearchInput, filteredContactList } =
    useSearchBarState(contacts);
  const { processing, addContact } = useAddContact(dispatchContacts);
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
