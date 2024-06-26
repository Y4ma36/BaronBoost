import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const orderId = styled.h1``;

const orderRegion = styled.h1``;

const orderPrice = styled.h1``;

const currentRank = styled.h1``;

const currentDivision = styled.h1``;

const OrderCategoryList = ({ data }) => {
  return (
    <Wrapper>
      {data.map((item, index) => {
        <orderId>{item.id}</orderId>;
      })}
    </Wrapper>
  );
};

export default OrderCategoryList;
