import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Contact } from "../../../types";
import { useRemoveContact } from "../../../hooks";

const _ContactCard = ({ contact }: { contact: Contact }) => {
  const isChecked = false;
  const style = isChecked
    ? { backgroundColor: "red" }
    : { backgroundColor: "grey" };
  const { removeContact } = useRemoveContact();
  const handleRemoveContact = () => {
    removeContact(contact);
  };
  return (
    <ListItem style={style}>
      <ListItemButton
        role={undefined}
        onClick={(_) => {
          //  state.setChecked(!isChecked)}
        }}
        dense
      >
        <ListItemAvatar>
          <Avatar src={contact.avatar} />
        </ListItemAvatar>
        <ListItemText primary={contact.first_name} />
        <ListItemText primary={contact.last_name} />
        <Button disabled={typeof contact.id !== "number"} onClick={handleRemoveContact}>
          <DeleteForeverIcon />
        </Button>
      </ListItemButton>
    </ListItem>
  );
};

export const ContactCard = _ContactCard;
