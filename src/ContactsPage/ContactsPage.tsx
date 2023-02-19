
import HourglassTopOutlinedIcon from "@mui/icons-material/HourglassTopOutlined";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { useFetcher, useSearchBarState } from "./hooks";
import { memo } from "react";
import { ContactsListComponent } from "./components/ContactsList/ContactsList";


const _ContactsPage = memo(() => {
  
  const { loading, contacts  } = useFetcher();
  const { searchInput,setSearchInput,filteredContactList  } = useSearchBarState(contacts)
  if (loading) return <div><HourglassTopOutlinedIcon/></div>;
  return (
    <div>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput}/>
      <ContactsListComponent filteredContactList={filteredContactList} />
    </div>
  );
});

export const ContactsPage = _ContactsPage;
