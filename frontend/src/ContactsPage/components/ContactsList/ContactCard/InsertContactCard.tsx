import { useForm } from "react-hook-form";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import AddIcon from "@mui/icons-material/Add";
import { AddContact, NewContact } from "../../../types";
import {
  FormControl,
  Input,
  TextField,
} from "@mui/material";
import { useState } from "react";

const _AddContactCard = ({ addContact }: { addContact: AddContact }) => {
  const [open, setOpen] = useState(false);
  const openForm = () => setOpen(true);
  const closeForm = () => setOpen(false);
  const sendContact = async (contact: NewContact) => {
    await addContact(contact);
    closeForm();
  };
  return (
    <ListItem>
      {open ? (
        <FormCard sendContact={sendContact}/>
      ) : (
        <ListItemButton dense onClick={openForm}>
          <AddIcon />
        </ListItemButton>
      )}
    </ListItem>
  );
};

export const AddContactCard = _AddContactCard;

type FormCardProps = {
  sendContact: (contact: NewContact) => void;
};
const FormCard = ({sendContact}:FormCardProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewContact>();
  const onSubmit = (data: NewContact) => sendContact(data);
  if(errors){
    console.log(errors)
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <FormControl>
      <TextField
        id="my-input"
        label="Email address"
        aria-describedby="my-helper-text"
        {...register("email", { required: true })}
        />

      <TextField
        id="first_name"
        label="First name"
        aria-describedby="my-helper-text"
        {...register("first_name", { required: true })}
        />

      <TextField
        id="last_name"
        label="Last name"
        aria-describedby="my-helper-text"
        {...register("last_name", { required: true })}
        />
      <Input type='submit' />
      
    </FormControl>
        </form>
  );
};
