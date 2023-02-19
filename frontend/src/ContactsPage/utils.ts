import { Contact, ContactsList } from "./types";

const contactsUrl = "http://localhost:3005/user?id=1";

export const getContacts = async () => {
  // return [] as ContactsList;
  const contactResponse = await fetch(contactsUrl);
  const contactJson = await contactResponse.json();
  console.log(contactJson);
  return [contactJson] as ContactsList;
};

export const filterContacts=(filterInput: string,contactCards:ContactsList) =>{
  const lowerCaseInput = filterInput.toLowerCase();
  const filteredCards = []
  for(let contact of contactCards){
    
      if(contact.last_name.toLowerCase().includes(lowerCaseInput) ||
      contact.first_name.toLowerCase().includes(lowerCaseInput))filteredCards.push(contact)
  }
  
  return filteredCards
}

export const  fetchContacts= async ():Promise<{contacts:ContactsList}> => {
  const contactsNotInOrder = await getContacts();
  const contacts = contactsNotInOrder
    .sort((contactA, contactB) => {
      return contactA.last_name.localeCompare(contactB.last_name);
    })
    
  return {contacts}
}