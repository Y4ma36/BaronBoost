import React from "react";
import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

export const riotUsername = atom({
  key: "riotUsername",
  default: "",
});

export const riotPassword = atom({
  key: "riotPassword",
  default: {},
});

export const mainRole = atom({
  key: "mainRole",
  default: "",
});

export const secondaryRole = atom({
  key: "secondaryRole",
  default: "",
});

export const chooseChampion = atom({
  key: "chooseChampion",
  default: "",
});

export const chooseSpell = atom({
  key: "chooseSpell",
  default: "",
});
