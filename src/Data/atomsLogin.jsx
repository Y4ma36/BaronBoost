import React from "react";
import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const accessToken = atom({
  key: "accessToken",
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

export const isLoginSelector = selector({
  key: "isLoginSelector",
  get: ({ get }) => !!get(accessToken),
});

export const userInfoAtom = atom({
  key: "userInfoAtom",
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});
