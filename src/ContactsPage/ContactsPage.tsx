import { observer } from "mobx-react-lite";
import List from "@mui/material/List";
import { ContactCard } from "./components/ContactCard/ContactCard";
import HourglassTopOutlinedIcon from "@mui/icons-material/HourglassTopOutlined";
import Divider from "@mui/material/Divider";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { ContactsPageState } from "./state";
import { FixedSizeList } from "react-window";
import { useLayoutEffect, useRef, useState } from "react";
import { ContactsList } from "./components/ContactsList/ContactsList";

const cachedState: { [key: string]: ContactsPageState | undefined } = {};

const getCachedState = (key: string): ContactsPageState => {
  const oldState = cachedState[key];
  if (oldState) return oldState;
  const state = new ContactsPageState();
  cachedState[key] = state;
  return state;
};

const _ContactsPage = () => {
  const contactsPageState = getCachedState("contacts");
  const { contacts, searchBarState } = contactsPageState;

  if (contacts === undefined)
    return (
      <div>
        <HourglassTopOutlinedIcon />
      </div>
    );
  return (
    <>
      <SearchBar state={searchBarState} />
      <ContactsList contactsPageState={contactsPageState} />
    </>
  );
};

export const ContactsPage = observer(_ContactsPage);
