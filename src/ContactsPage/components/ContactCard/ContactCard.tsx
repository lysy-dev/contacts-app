import { observer } from "mobx-react-lite";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import Avatar from "@mui/material/Avatar";
import { ContactState } from "./state";

const _ContactCard = ({ state }: { state: ContactState }) => {
  const isChecked = state.isChecked;
  const style = isChecked ? { backgroundColor: "red" } : {backgroundColor: "grey"};
  return (
    <ListItem style={style}>
      <ListItemButton
        role={undefined}
        onClick={(_) => {
            state.setChecked(!isChecked)}}
        dense
      >
        <ListItemAvatar>
          <Avatar src={state.avatar} />
        </ListItemAvatar>
        <ListItemText primary={state.first_name} />
        <ListItemText primary={state.last_name} />
      </ListItemButton>
    </ListItem>
  );
};

export const ContactCard = observer(_ContactCard);
