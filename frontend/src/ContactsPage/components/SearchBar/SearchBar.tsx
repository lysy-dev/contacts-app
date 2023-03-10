import { observer } from "mobx-react-lite";
import { ChangeEvent } from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { SearchBarProps } from "./types";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    backgroundColor: theme.palette.background.paper,
    width: "90vw",
    marginLeft: "10px",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
  },
}));

const _SearchBar = ({ searchInput, setSearchInput }: SearchBarProps) => {
  const setValue = (v: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (v.target.value === null) return setSearchInput("");
    setSearchInput(v.target.value);
  };

  return (
    <BootstrapInput
      value={searchInput}
      onChange={setValue}
      placeholder="Search for contact"
    />
  );
};
export const SearchBar = observer(_SearchBar);
