import { observer } from "mobx-react-lite";
import List from "@mui/material/List";
import { ContactCard } from "./components/ContactCard/ContactCard";
import HourglassTopOutlinedIcon from '@mui/icons-material/HourglassTopOutlined';
import Divider from '@mui/material/Divider';
import { SearchBar } from "./components/SearchBar/SearchBar";
import { useFetcher, useSearchBarState } from "./hooks";
import { memo } from "react";
import { ContactsListComponent } from "./components/ContactsList/ContactsList";


const _ContactsPage = memo(() => {
  
  const { loading, contacts  } = useFetcher();
  const { searchInput,setSearchInput,filteredContactList  } = useSearchBarState(contacts)
  if (loading) return <div><HourglassTopOutlinedIcon/></div>;
  console.log(filteredContactList)
  return (
    <div>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput}/>
      <ContactsListComponent filteredContactList={filteredContactList} />
    </div>
  );
});

export const ContactsPage = _ContactsPage;
