import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import AddIcon from "@mui/icons-material/Add";
import { AddContact, Contact } from "../../../types";

const _AddContactCard = ({ addContact }: { addContact: AddContact }) => {
  const isChecked = false;
  const style = isChecked
    ? { backgroundColor: "red" }
    : { backgroundColor: "grey" };
  return (
    <ListItem style={style}>
      <ListItemButton
        role={undefined}
        onClick={(_) => {
          addContact({
            id: 2,
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
