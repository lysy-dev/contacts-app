import { observer } from "mobx-react-lite";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import Avatar from "@mui/material/Avatar";
import { Contact } from "../../types";
import { memo } from "react";


const _ContactCard = ({ contact }: { contact: Contact }) => {
  const isChecked = false
  const style = isChecked ? { backgroundColor: "red" } : {backgroundColor: "grey"};
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
      </ListItemButton>
    </ListItem>
  );
};

export const ContactCard = _ContactCard;
