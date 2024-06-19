import { atom } from "recoil";

//Services

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

//Nav

export const isHoverNav = atom({
  key: "isHoverNav",
  default: false,
});

//Coaching

export const isCoachingRegion = atom({
  key: "isCoachingRegion",
  default: "",
});

export const isCoachingRoles = atom({
  key: "isCoachingRoles",
  default: "",
});

//Navigation

export const isNavHover = atom({
  key: "isNavHover",
  default: false,
});

export const isSideNavClick = atom({
  key: "isSideNavClick",
  default: false,
});
