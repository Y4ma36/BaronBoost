import React, { useEffect, useState } from "react";
import * as auth from "../../../../Utils/auth.jsX";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  setDesirePickRank,
  setCurrentPickRank,
  isDesireDivision,
  isCurrentDivision,
  setCurrentLp,
  setLpGain,
  setNetWins,
} from "../../../../Data/atoms";
import { useQuery } from "@tanstack/react-query";

const useAllPriceData = () => {
  const currentRank = useRecoilValue(setCurrentPickRank);
  const desireRank = useRecoilValue(setDesirePickRank);
  const currentDivision = useRecoilValue(isCurrentDivision);
  const [desireDivision, setDesireDivision] = useRecoilState(isDesireDivision);
  const currentLp = useRecoilValue(setCurrentLp);
  const lpGain = useRecoilValue(setLpGain);
  const netWinsGame = useRecoilValue(setNetWins);

  //when desirerank is master, the division is disapear
  if (desireRank === "MASTER" && desireDivision === null) {
    setDesireDivision("IV");
  }

  //request body JSON
  const orderInfo = {
    currentRank: currentRank,
    currentDivision: currentDivision,
    currentLp: currentLp,
    desiredRank: desireRank,
    desiredDivision: desireDivision,
    lpPerGame: lpGain,
  };

  const netwinsOrderInfo = {
    currentRank: currentRank,
    numberOfGameWin: netWinsGame,
  };

  //🐶 Solo Order Price
  const { data: totalSoloPrice, error: soloError } = useQuery({
    queryKey: ["soloPrice", orderInfo],
    queryFn: () => auth.soloPrice(orderInfo).then((res) => res.data),
    enabled: !!orderInfo.currentRank && !!orderInfo.desiredRank,
  });

  //🐱 Duo Order Price
  const { data: totalDuoPrice, error: duoError } = useQuery({
    queryKey: ["duoPrice", orderInfo],
    queryFn: () => auth.duoPrice(orderInfo).then((res) => res.data),
    enabled: !!orderInfo.currentRank && !!orderInfo.desiredRank,
  });

  //🐢 NetWins Order Price

  const { data: totalNetWinsPrice, error: netwinsError } = useQuery({
    queryKey: ["netwinsPrice", netwinsOrderInfo],
    queryFn: () => auth.netwinsPrice(netwinsOrderInfo).then((res) => res.data),
    enabled: !!orderInfo.currentRank && !!netWinsGame,
  });

  const oldTotalSoloPrice = (totalSoloPrice / 0.7).toFixed(2);
  const oldTotalDuoPrice = (totalDuoPrice / 0.7).toFixed(2);
  const oldTotalNetWinsPrice = (totalNetWinsPrice / 0.7).toFixed(2);

  return {
    totalSoloPrice,
    soloError,
    totalDuoPrice,
    duoError,
    totalNetWinsPrice,
    netwinsError,
    oldTotalSoloPrice,
    oldTotalDuoPrice,
    oldTotalNetWinsPrice,
  };
};

export default useAllPriceData;
