import { useRecoilState, useRecoilValue } from "recoil";
import * as auth from "../Utils/auth.jsX";
import {
  chooseChampion,
  chooseSpell,
  mainRole,
  riotPassword,
  riotUsername,
  secondaryRole,
} from "../Data/atomsOrder";
import { userInfoAtom } from "../Data/atomsLogin";
import {
  isCurrentDivision,
  isDesireDivision,
  setCurrentLp,
  setCurrentPickRank,
  setDesirePickRank,
  setLpGain,
  setNetWins,
  setRegion,
} from "../Data/atoms";
import { useQuery } from "@tanstack/react-query";

const useAllOrder = () => {
  const isRiotUsername = useRecoilValue(riotUsername);
  const isRiotPassword = useRecoilValue(riotPassword);
  const isMainRole = useRecoilValue(mainRole);
  const isSecondaryRole = useRecoilValue(secondaryRole);
  const isChooseChampion = useRecoilValue(chooseChampion);
  const isChooseSpell = useRecoilValue(chooseSpell);

  const currentRank = useRecoilValue(setCurrentPickRank);
  const desireRank = useRecoilValue(setDesirePickRank);
  const currentDivision = useRecoilValue(isCurrentDivision);
  const [desireDivision, setDesireDivision] = useRecoilState(isDesireDivision);
  const currentLp = useRecoilValue(setCurrentLp);
  const lpGain = useRecoilValue(setLpGain);
  const netWinsGame = useRecoilValue(setNetWins);
  const region = useRecoilValue(setRegion);

  //when desirerank is master, the division is disapear
  if (desireRank === "MASTER" && desireDivision === null) {
    setDesireDivision("IV");
  }

  const userInfo = useRecoilValue(userInfoAtom);

  const orderInfo = {
    user: {
      id: userInfo.id,
      username: userInfo.username,
      password: "",
      email: userInfo.email,
      role: "CUSTOMER",
      boostStatus: "NONE",
    },
    leagueUsername: isRiotUsername,
    leaguePassword: isRiotPassword,
    region: region,
    status: "NOT_TAKEN",
    orderPrice: null,
    currentRank: currentRank,
    currentDivision: currentDivision,
    currentLp: currentLp,
    desiredRank: desireRank,
    desiredDivision: desireDivision,
    lpPerGame: lpGain,
    mainLane: isMainRole,
    secondLane: isSecondaryRole,
    champion1: isChooseChampion[0],
    champion2: isChooseChampion[1],
    champion3: isChooseChampion[2],
    flash: isChooseSpell,
  };

  const netWinsOrderInfo = {
    user: {
      id: userInfo.id,
      username: userInfo.username,
      password: "",
      email: userInfo.email,
      role: "CUSTOMER",
      boostStatus: "NONE",
    },
    leagueUsername: isRiotUsername,
    leaguePassword: isRiotPassword,
    region: region,
    status: "NOT_TAKEN",
    orderPrice: null,
    currentRank: currentRank,
    currentDivision: currentDivision,
  };
  const { data: getSoloOrder, error: geSoloOrderError } = useQuery({
    queryKey: ["getSoloOrder", orderInfo],
    queryFn: () => auth.setSoloOrder(orderInfo).then((res) => res.data),
  });

  const { data: getDuoOrder, error: geDuoOrderError } = useQuery({
    queryKey: ["getDuoOrder", orderInfo],
    queryFn: () => auth.setDuoOrder(orderInfo).then((res) => res.data),
  });

  const { data: getNetwinsOrder, error: geNetwinsOrderError } = useQuery({
    queryKey: ["getNetwinsOrder", netWinsOrderInfo],
    queryFn: () => auth.setSoloOrder(orderInfo).then((res) => res.data),
  });

  return {
    getSoloOrder,
    getDuoOrder,
    getNetwinsOrder,
    geSoloOrderError,
    geDuoOrderError,
    geNetwinsOrderError,
  };
};

export default useAllOrder;
