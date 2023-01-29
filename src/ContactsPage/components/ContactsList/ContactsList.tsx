import { Divider, List } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useLayoutEffect, useRef, useState } from "react";
import { FixedSizeList } from "react-window";
import { ContactsPageState } from "../../state";
import { ContactCard } from "../ContactCard/ContactCard";
import { SearchBar } from "../SearchBar/SearchBar";

const _ContactsList = ({contactsPageState}:{contactsPageState:ContactsPageState})=>{
    const { filteredCardsState } = contactsPageState;
  
    const ref = useRef(null);
    const [listSize, setListSize] = useState({ width: 0, height: 0 });
  
    useLayoutEffect(() => {
      const element = ref.current;
      if (element != null) {
        const { height, width } = (element as HTMLDivElement).getBoundingClientRect();
        setListSize({ height, width });
      }
    }, [ref]);
    return (
      <div style={{width:"100vw",height:"90vh"}}ref={ref}>
        <List>
          <FixedSizeList
            itemData={filteredCardsState}
            height={listSize.height}
            itemCount={filteredCardsState.length}
            itemSize={60}
            width={listSize.width}
          >
            {({ data, index, style }) => (
              <div style={style}>
                <ContactCard state={data[index]} />
                {index < filteredCardsState.length && (
                  <Divider variant="inset" component="li" />
                )}
              </div>
            )}
          </FixedSizeList>
        </List>
      </div>
    );
  }

  export const ContactsList =observer(_ContactsList)