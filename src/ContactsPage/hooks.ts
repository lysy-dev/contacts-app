import { useEffect, useMemo, useState } from "react";
import { ContactsList } from "./types";
import { fetchContacts, filterContacts } from "./utils";

export const useFetcher = () => {
  const [contacts, setContacts] = useState<ContactsList | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchContacts().then(({ contacts }) => {
      setLoading(false);
      setContacts(contacts);
    });
  }, []);
  return { loading, contacts };
};

export const useSearchBarState = (fullContactsList: ContactsList | null) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchInProgress, setSearchInProgress] = useState<boolean>(false);
  const filteredContactList = useMemo(() => {
    if (fullContactsList === null) return [];
    return filterContacts(searchInput, fullContactsList);
  }, [searchInput]);
  return { searchInProgress, filteredContactList, searchInput, setSearchInput };
};
