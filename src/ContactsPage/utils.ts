import { ContactsList } from "./types";

export const getContacts = async () => {
  const contactResponse = await fetch(
    "https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json"
  );
  const contactJson = await contactResponse.json();
  return contactJson as ContactsList;
};


