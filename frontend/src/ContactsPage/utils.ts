import { ContactsList, NewContact } from "./types";

const contactsUrl = "http://localhost:3005/users";
const updateContactsUrl = "http://localhost:3005/user";

export const getContacts = async () => {
  // return [] as ContactsList;
  const contactResponse = await fetch(contactsUrl + "?length=10");
  const contactJson = await contactResponse.json();
  
  return contactJson as ContactsList;
};

export const filterContacts = (
  filterInput: string,
  contactCards: ContactsList
) => {
  const lowerCaseInput = filterInput.toLowerCase();
  const filteredCards = [];
  for (let contact of contactCards) {
    if (
      contact.last_name.toLowerCase().includes(lowerCaseInput) ||
      contact.first_name.toLowerCase().includes(lowerCaseInput)
    )
      filteredCards.push(contact);
  }

  return filteredCards;
};

export const fetchContacts = async (): Promise<{ contacts: ContactsList }> => {
  const contactsNotInOrder = await getContacts();
  const contacts = contactsNotInOrder.sort((contactA, contactB) => {
    return contactA.last_name.localeCompare(contactB.last_name);
  });
  return { contacts };
};

export const uploadContact = async (newContact: NewContact) => {
  return await fetch(updateContactsUrl, {
    method: "PUT",
    body: JSON.stringify(newContact),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
