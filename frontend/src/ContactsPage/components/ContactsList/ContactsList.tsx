import { Divider, List } from "@mui/material";
import { FixedSizeList } from "react-window";
import { memo } from "react";
import { ContactsList } from "../../types";
import { ContactCard } from "./ContactCard/ContactCard";

export const ContactsListComponent = memo(
  ({ filteredContactList }: { filteredContactList: ContactsList }) => {
    return (
      <List>
        <FixedSizeList
          itemData={filteredContactList}
          height={500}
          itemCount={filteredContactList.length}
          itemSize={65}
          width={250}
        >
          {({ data, style, index }) => {
            const contact = data[index];

            return (
              <div style={style}>
                <ContactCard contact={contact} />;
                {index < filteredContactList.length && (
                  <Divider variant="inset" component="li" />
                )}
              </div>
            );
          }}
        </FixedSizeList>
      </List>
    );
  }
);
