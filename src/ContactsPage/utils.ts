import { ContactsList } from "./types";

const contactsUrl = process.env.REACT_APP_CONTACTS_URL;

export const getContacts = async () => {
  if (!contactsUrl) return [];
  const contactResponse = await fetch(contactsUrl);
  const contactJson = await contactResponse.json();
  return contactJson as ContactsList;
};
