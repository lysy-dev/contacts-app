import { action, makeObservable, observable } from "mobx";
import { ContactsPageState } from "../../state";

export class SearchBarState {
  input = "";
  filterContacts;
  filterTimeout: ReturnType<typeof setTimeout> | undefined;

  constructor(pageState: ContactsPageState) {
    makeObservable(this, {
      input: observable,
      filterTimeout: observable,
      setInput: action.bound,
    });
    this.filterContacts = pageState.filterContacts;
  }

  setInput(input: string) {
    this.input = input;
    clearTimeout(this.filterTimeout);
    this.filterContacts(input);
  }
}
