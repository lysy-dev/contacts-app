import { Contact, ContactsList } from "./types";

const contactsUrl = process.env.REACT_APP_CONTACTS_URL;

export const getContacts = async () => {
  console.log("sending request to fetch contacts")
  if (!contactsUrl) return [];
  const contactResponse = await fetch(contactsUrl);
  const contactJson = await contactResponse.json();
  return contactJson as ContactsList;
};

export const filterContacts=(filterInput: string,contactCards:ContactsList) =>{
  const lowerCaseInput = filterInput.toLowerCase();
  const filteredCards = []
  for(let contact of contactCards){
    
      if(contact.last_name.toLowerCase().includes(lowerCaseInput) ||
      contact.first_name.toLowerCase().includes(lowerCaseInput))filteredCards.push(contact)
  }
  console.log(filteredCards)
  return filteredCards
}

export const  fetchContacts= async ():Promise<{contacts:ContactsList}> => {
  const contacts = await getContacts();
  const contactsStates = contacts
    .sort((contactA, contactB) => {
      return contactA.last_name.localeCompare(contactB.last_name);
    })
    
  return {contacts}
}