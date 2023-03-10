import { Divider, List } from "@mui/material";
import { FixedSizeList } from "react-window";
import { memo } from "react";
import { AddContact, ContactsList } from "../../types";
import { ContactCard } from "./ContactCard/ContactCard";
import { AddContactCard } from "./ContactCard/InsertContactCard";

type ContactsListComponentProps = {
  filteredContactList: ContactsList;
  
};

export const ContactsListComponent = memo(
  ({ filteredContactList }: ContactsListComponentProps) => {
    return (
      <List>
        <AddContactCard />
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
                <Divider variant="inset" component="li" />
              </div>
            );
          }}
        </FixedSizeList>
      </List>
    );
  }
);
