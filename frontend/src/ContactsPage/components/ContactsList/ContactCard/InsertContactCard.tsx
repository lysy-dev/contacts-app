import { useForm } from "react-hook-form";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import AddIcon from "@mui/icons-material/Add";
import { AddContact, NewContact } from "../../../types";
import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
// addContact({
//   email: "test@test.pl",
//   first_name: "test",
//   last_name: "test",
//   avatar: "test",
//   gender: "unknown",
// });

const _AddContactCard = ({ addContact }: { addContact: AddContact }) => {
  return (
    <ListItem>
      <ListItemButton
       
        dense
      >
        <AddIcon />
      </ListItemButton>
    </ListItem>
  );
};

export const AddContactCard = _AddContactCard;

const FormCard = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<NewContact>();
  return (
    <FormControl>
      <InputLabel htmlFor="email">Email address</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" {...register("email",{required:true})}/>

      <InputLabel htmlFor="first_name">First name</InputLabel>
      <Input id="first_name" aria-describedby="my-helper-text" {...register("first_name",{required:true})}/>

      <InputLabel htmlFor="last_name">Last name</InputLabel>
      <Input id="last_name" aria-describedby="my-helper-text" {...register("last_name",{required:true})}/>
      <FormHelperText id="my-helper-text">
        We'll never share your email.
      </FormHelperText>
    </FormControl>
  );
};
