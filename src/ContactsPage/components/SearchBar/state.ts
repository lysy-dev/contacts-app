export {}
// import { action, makeObservable, observable } from "mobx";
// import { ContactsPageState } from "../../state";

// export class SearchBarState {
//   input = "";
//   loading = false;
//   filterContacts;
//   filterTimeout: ReturnType<typeof setTimeout> | undefined;

//   constructor(pageState: ContactsPageState) {
//     makeObservable(this, {
//       loading: observable,
//       input: observable,
//       filterTimeout: observable,
//       setInput: action.bound,
//     });
//     this.filterContacts = pageState.filterContacts;
//   }

//   setInput(input: string) {
//     this.input = input;
//     this.loading = true;
//     clearTimeout(this.filterTimeout);
//     this.filterTimeout = setTimeout(() => {
//       this.loading = false;
//       this.filterContacts(input);
//     }, 200);
//   }
// }
