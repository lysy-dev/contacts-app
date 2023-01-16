import { observer } from "mobx-react-lite";
import { ChangeEvent } from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import HourglassTopOutlinedIcon from '@mui/icons-material/HourglassTopOutlined';
import { SearchBarState } from "./state";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    backgroundColor: theme.palette.background.paper,
    width: "90vw",
    marginLeft:"10px",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
  },
}));

const _SearchBar = ({ state }: { state: SearchBarState }) => {
  const value = state.input;
  const setValue = (v: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (v.target.value === null) return state.setInput("");
    state.setInput(v.target.value);
  };

  return (
    <>
      <BootstrapInput
        value={value}
        onChange={setValue}
        placeholder="Search for contact"
        
        />
        {state.loading ? (
          <HourglassTopOutlinedIcon/>
      ):null
      }
    </>
  );
  //<OutlinedInput value={value} onChange={setValue} placeholder="Search for contact" fullWidth/>;
};
export const SearchBar = observer(_SearchBar);
