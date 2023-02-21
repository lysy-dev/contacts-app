export type Contact = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  avatar: string;
};

export type ContactsList = Array<Contact>;

export type AddContact = (newContact: Contact) => Promise<void>;

export type SetContactsProps = {
  type: "set";
  payload: ContactsList;
};
export type AddContactProps = {
  type: "add";
  payload: Contact;
};
export type RemoveContactProps = {
  type: "remove";
  payload: number;
};

export type ContactReducerProps =
  | SetContactsProps
  | AddContactProps
  | RemoveContactProps;
