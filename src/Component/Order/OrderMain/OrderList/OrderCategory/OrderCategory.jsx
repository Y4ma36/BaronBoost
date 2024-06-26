import React, { useState } from "react";
import styled from "styled-components";
import useOrderData from "../../../OrderData";
import { useLocation } from "react-router-dom";
import OrderCategoryHeader from "./OrderCategoryHeader";
import OrderCategoryList from "./OrderCategoryList";
import rankData from "../../../../Services/RankData";
import { FaChalkboardTeacher } from "react-icons/fa";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  padding: 20px 30px;
`;

const Box = styled.div`
  height: 200px;
  background-color: ${(props) => props.theme.colors.purple};
  display: flex;
  align-items: center;
  padding: 0px 20px;
  gap: 10px;
  border-radius: 10px;
  border: 3px solid black;
`;

const CurrentRankImg = styled.div`
  background-color: rgb(255, 255, 255, 0.1);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  padding: 5px 10px;
  border-radius: 5px;
  img {
    width: 100px;
    height: 100px;
  }
  .icon {
    width: 100px;
    height: 100px;
  }
`;

const OrderInfoBox = styled.div`
  height: 80%;
  width: 100%;
  background-color: rgb(255, 255, 255, 0.1);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px 20px;
`;

const OrderInfo = styled.span``;

const Title = styled.span`
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: 700;
`;

const OrderPrice = styled.span``;

const CurrentRankInfo = styled.div``;

const CurrentRank = styled.span``;

const CurrentDivision = styled.span``;

const OrderCategory = ({ category }) => {
  const { allOrder, soloOrder, duoOrders, netWinsOrders, coachOrders } =
    useOrderData();
  const currentLocation = useLocation().pathname.split("/").pop();

  let data;
  switch (currentLocation) {
    case "all-orders":
      data = allOrder;
      break;
    case "solo-orders":
      data = soloOrder;
      break;
    case "duo-orders":
      data = duoOrders;
      break;
    case "netwins-orders":
      data = netWinsOrders;
      break;
    case "coach-orders":
      data = coachOrders;
      break;
    default:
      data = null;
  }

  if (!data) {
    return <Wrapper>Loading...</Wrapper>;
  }

  return (
    <Wrapper>
      {data.length > 0 ? (
        data.map((order, index) => {
          const selectedRank = rankData.find(
            (rank) => rank.name === order.currentRank
          );
          return (
            <Box key={index}>
              <CurrentRankImg>
                {selectedRank !== undefined ? (
                  <img src={selectedRank ? selectedRank.img : ""} />
                ) : (
                  <FaChalkboardTeacher className="icon" />
                )}
              </CurrentRankImg>
              <OrderInfoBox>
                <OrderInfo>
                  {" "}
                  <Title>Order:</Title>
                  {order.id}
                </OrderInfo>
                <OrderInfo>
                  {" "}
                  <Title>Region:</Title>
                  {order.region}
                </OrderInfo>
                <OrderInfo>
                  {" "}
                  <Title>Stauts:</Title>
                  {order.status}
                </OrderInfo>
                <CurrentRankInfo>
                  <CurrentRank>
                    {" "}
                    <Title>Current Rank:</Title>
                    {order.currentRank}
                  </CurrentRank>
                  <CurrentDivision>{order.currentDivision}</CurrentDivision>
                </CurrentRankInfo>
              </OrderInfoBox>
            </Box>
          );
        })
      ) : (
        <Box>No Orders available</Box>
      )}
    </Wrapper>
  );
};

export default OrderCategory;
