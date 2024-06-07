import { atom } from "recoil";

export const isDesireRank = atom({
  key: "isDesireRank",
  default: 7,
});

export const isCurrentRank = atom({
  key: "isCurrenetRank",
  default: 0,
});

export const isHoverNav = atom({
  key: "isHoverNav",
  default: false,
});
