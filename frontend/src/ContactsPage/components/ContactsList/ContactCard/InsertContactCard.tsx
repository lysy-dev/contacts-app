import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import AddIcon from "@mui/icons-material/Add";
import { AddContact } from "../../../types";

const _AddContactCard = ({ addContact }: { addContact: AddContact }) => {
  
  return (
    <ListItem>
      <ListItemButton
        onClick={(_) => {
          addContact({
            email: "test@test.pl",
            first_name: "test",
            last_name: "test",
            avatar: "test",
            gender: "unknown",
          });
        }}
        dense
      >
        <AddIcon />
      </ListItemButton>
    </ListItem>
  );
};

export const AddContactCard = _AddContactCard;
