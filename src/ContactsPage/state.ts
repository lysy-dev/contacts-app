import { action, makeObservable, observable } from "mobx";
import { ContactState } from "./components/ContactsList/ContactCard/state";
import { SearchBarState } from "./components/SearchBar/state";
import { Contact, ContactsList } from "./types";
import { getContacts } from "./utils";

export class ContactsPageState {
  contacts: ContactsList | undefined;
  searchBarState: SearchBarState;
  contactCardsState: Array<ContactState> = [];
  filteredCardsState: Array<ContactState> = [];

  constructor() {
    makeObservable(this, {
      contacts: observable,
      filteredCardsState: observable,
      setContacts: action.bound,
      filterContacts: action.bound,
    });
    console.log("creating state, and fetching contacts");
    this.fetchContacts();
    this.searchBarState = new SearchBarState(this);
  }

  setContacts(contacts: ContactsList) {
    this.contacts = contacts;
  }

  async fetchContacts() {
    const contacts = await getContacts();
    const contactsStates = contacts
      .sort((contactA, contactB) => {
        if (contactA.last_name > contactB.last_name) return 1;
        if (contactA.last_name < contactB.last_name) return -1;
        return 0;
      })
      .map((contact) => new ContactState(contact));
    this.contactCardsState = contactsStates;
    this.filteredCardsState = contactsStates;
    this.setContacts(contacts);
    console.log("contacts fetched")
  }

  filterContacts(filterInput: string) {
    console.log("filtering contacts, input: ", filterInput);
    const lowerCaseInput = filterInput.toLowerCase();
    this.filteredCardsState = this.contactCardsState.filter(
      (contact: ContactState) =>
        contact.last_name.toLowerCase().includes(lowerCaseInput) ||
        contact.first_name.toLowerCase().includes(lowerCaseInput)
    );
  }
}
