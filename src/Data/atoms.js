import { atom } from "recoil";

export const isDesireRank = atom({
  key: "isDesireRank",
  default: 7,
});

export const isCurrentRank = atom({
  key: "isCurrenetRank",
  default: 0,
});

const divisionList = ["IV", "III", "II", "I"];

export const isDesireDivision = atom({
  key: "isDesireVision",
  default: divisionList[0],
});

export const isCurrentDivision = atom({
  key: "isCurrentDivison",
  default: divisionList[0],
});

export const isHoverNav = atom({
  key: "isHoverNav",
  default: false,
});
