import { action, makeObservable, observable } from "mobx";
import { Contact } from "../../types";

export class ContactState {
  id: number;
  first_name: string;
  last_name: string;
  // email: string;
  // gender: string;
  avatar: string;
  isChecked: boolean = false;

  constructor(contact: Contact) {
    makeObservable(this, {
      isChecked: observable,
      setChecked: action.bound,
    });
    this.id = contact.id;
    this.last_name = contact.last_name;
    this.first_name = contact.first_name;
    this.avatar = contact.avatar;
  }
  setChecked(isChecked: boolean) {
    this.isChecked = isChecked;
  }
}
