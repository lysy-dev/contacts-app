export type Contact = {
    id: number, 
    first_name: string, 
    last_name: string, 
    email: string, 
    gender: string, 
    avatar: string
}

export type ContactsList = Array<Contact>;

export type AddContact = (newContact: Contact) => Promise<void>;