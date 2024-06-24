import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { getSoloPrice } from "./AllPriceData";
import axios from "axios";

const Wrapper = styled.div`
  flex: 1;
  border: 5px solid white;
  border-radius: 2px;
  background-color: #2e294e;
`;

const TotalPrice = () => {
  // const location = useLocation();
  // const currentLocation = location.pathname.split("/").pop();
  // if (currentLocation === "solo") {
  //   useEffect(() => {
  //     getSoloPrice();
  //   }, []);
  // }
  const dataCheck = async () => {
    const params = {
      region: "NA",
      status: "NOT_TAKEN",
      orderPrice: null,
      currentRank: "IRON",
      currentDivision: "IV",
      currentLp: 50,
      desiredRank: "MASTER",
      desiredDivision: "IV",
      lpPerGame: 20,
    };
    const url = `http://localhost:8080/api/leaguePrices/soloOrder`;

    try {
      const response = await fetch(url, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      const data = await response.json();
      console.log(data);
      // Handle the response data
    } catch (error) {
      console.error("Error fetching solo order prices:", error);
      // Handle the error
    }
  };

  useEffect(() => {
    dataCheck();
  }, []);

  return <Wrapper>TotalPrice</Wrapper>;
};

export default TotalPrice;
