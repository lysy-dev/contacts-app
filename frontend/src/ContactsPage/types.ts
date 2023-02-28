export type Contact = {
  id: number;
  first_name: string;
  last_name: string;
  email?: string;
  gender?: string;
  avatar?: string;
};

export type ContactsList = Array<Contact>;

export type NewContact = Omit<Contact, "id">
export type ContactToRemove = Pick<Contact, "id">

export type AddContact = (newContact: NewContact) => Promise<void>;
export type RemoveContact = (newContact: ContactToRemove) => Promise<void>;

export type SetContactsProps = {
  type: "set";
  payload: ContactsList;
};

export type AddContactProps = {
  type: "add";
  payload: NewContact;
};

export type RemoveContactProps = {
  type: "remove";
  payload: number;
};

export type ContactReducerProps =
  | SetContactsProps
  | AddContactProps
  | RemoveContactProps;
