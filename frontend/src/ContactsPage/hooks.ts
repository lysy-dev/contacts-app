import { useCallback, useEffect, useMemo, useState } from "react";
import { AddContact, Contact, ContactsList } from "./types";
import { fetchContacts, filterContacts, uploadContact } from "./utils";

export const useFetcher = (setContacts: (list: ContactsList) => void) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchContacts().then(({ contacts }) => {
      setLoading(false);
      setContacts(contacts);
    });
  }, [setContacts]);
  return { loading };
};

export const useSearchBarState = (fullContactsList: ContactsList | null) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const filteredContactList = useMemo(() => {
    if (fullContactsList === null) return [];
    return filterContacts(searchInput, fullContactsList);
  }, [searchInput, fullContactsList]);
  return { filteredContactList, searchInput, setSearchInput };
};

export const useAddContact = (
  setContacts: (list: ContactsList) => void,
  list: ContactsList | null
) => {
  const [processing, setProcessing] = useState(false);
  const addContact: AddContact = useCallback(
    async (newContact: Contact) => {
      if (list === null) return;
      setProcessing(true);
      const result = await uploadContact(newContact);
      if (!result) return;
      const newContactsList = [...list, newContact];
      setContacts(newContactsList);
      setProcessing(false);
    },
    [list, setContacts]
  );
  return { processing, addContact };
};
