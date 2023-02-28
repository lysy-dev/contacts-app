import {
  createContext,
  Dispatch,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import {
  AddContact,
  AddContactProps,
  Contact,
  ContactReducerProps,
  ContactsList,
  NewContact,
  SetContactsProps,
} from "./types";
import { fetchContacts, filterContacts, uploadContact } from "./utils";

type ContactReducerAction = (
  state: ContactsList,
  action: ContactReducerProps
) => ContactsList;
const contactReducer = (state: ContactsList, action: ContactReducerProps) => {
  const reducerActions = {
    set: () => action.payload as ContactsList,
    add: () => [...state, action.payload as Contact],
    remove: () => state.filter((contact) => contact.id !== action.payload),
  };

  const reducer = reducerActions[action.type];
  return reducer ? reducer() : state;
};

export const ContactsContext = createContext<Dispatch<ContactReducerProps> | null>(
  null
);

export const useContacts = () => {
  const [contacts, dispatchContacts] = useReducer<ContactReducerAction>(
    contactReducer,
    []
  );
  return { contacts, dispatchContacts };
};

export const useFetcher = (setContacts: (action: SetContactsProps) => void) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchContacts().then(({ contacts }) => {
      setLoading(false);
      setContacts({ type: "set", payload: contacts });
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
  insertContact:( (action: AddContactProps) => void) | null
) => {
  const [processing, setProcessing] = useState(false);
  const addContact: AddContact = useCallback(
    async (newContact: NewContact) => {
      setProcessing(true);
      const result = await uploadContact(newContact);
      if (!result) return;
      insertContact?.({ payload: newContact, type: "add" });
      setProcessing(false);
    },
    [insertContact]
  );
  return { processing, addContact };
};
