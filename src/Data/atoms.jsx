import { atom, selector } from "recoil";
import useAllPriceData from "../Component/Services/ServicesList/ServicesCommon/AllPriceData";

//Services

/*---------------------[Rank Image]------------------------*/
export const isDesireRank = atom({
  key: "isDesireRank",
  default: 7,
});

export const isCurrentRank = atom({
  key: "isCurrenetRank",
  default: 0,
});

export const setDesirePickRank = atom({
  key: "desireRankName",
  default: "MASTER",
});

export const setCurrentPickRank = atom({
  key: "currentRankName",
  default: "BRONZE",
});

/*-------------------------------------------------------*/

/*---------------------[Rank Detail]------------------------*/

export const setLpGain = atom({
  key: "setLpGain",
  default: 20,
});

export const setCurrentLp = atom({
  key: "setCurrentLp",
  default: 60,
});

export const setNetWins = atom({
  key: "setNetWins",
  default: 1,
});

/*-------------------------------------------------------*/

/*---------------------[Rank Division]------------------------*/

const divisionList = ["IV", "III", "II", "I"];

export const isDesireDivision = atom({
  key: "isDesireDivision",
  default: divisionList[0],
});

export const isCurrentDivision = atom({
  key: "isCurrentDivison",
  default: divisionList[0],
});

/*-------------------------------------------------------*/

/*---------------------[Coaching]------------------------*/

export const isCoachingRegion = atom({
  key: "isCoachingRegion",
  default: "",
});

export const isCoachingRoles = atom({
  key: "isCoachingRoles",
  default: "",
});

/*-------------------------------------------------------*/

/*---------------------[Price]------------------------*/

export const priceState = atom({
  key: "priceState",
  default: selector({
    key: "priceStateDefault",
    get: ({ get }) => {
      const { totalSoloPrice, totalDuoPrice, totalNetWinsPrice } =
        useAllPriceData();
      const currentLocation = window.location.pathname.split("/").pop();

      if (currentLocation === "solo") {
        return totalSoloPrice;
      } else if (currentLocation === "duo") {
        return totalDuoPrice;
      } else {
        return totalNetWinsPrice;
      }
    },
  }),
});

/*-------------------------------------------------------*/

//Navigation

export const isHoverNav = atom({
  key: "isHoverNav",
  default: false,
});

export const isNavHover = atom({
  key: "isNavHover",
  default: false,
});

export const isSideNavClick = atom({
  key: "isSideNavClick",
  default: false,
});
