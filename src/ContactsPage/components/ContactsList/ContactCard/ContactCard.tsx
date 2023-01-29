import { observer } from "mobx-react-lite";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import Avatar from "@mui/material/Avatar";
import { ContactState } from "./state";
import Checkbox from '@mui/material/Checkbox';


const _ContactCard = ({ state }: { state: ContactState }) => {
  const isChecked = state.isChecked;
  const style = {backgroundColor: "#937342"};
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
        <ListItemText primary={`${state.first_name} ${state.last_name}`} />
        <Checkbox checked={isChecked}/>
      </ListItemButton>
    </ListItem>
  );
};

export const ContactCard = observer(_ContactCard);
