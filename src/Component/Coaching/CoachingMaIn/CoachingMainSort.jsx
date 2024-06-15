import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const SortContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CoachingLabel = styled.label`
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: 700;
`;

const CoachingSelect = styled.select`
  margin-left: 10px;
  width: 150px;
  padding: 5px 0px;
  text-align: center;
  border: none;
  border-radius: 5px;
`;

const CoachingMainSort = () => {
  return (
    <Wrapper>
      <SortContainer>
        <CoachingLabel>Region</CoachingLabel>
        <CoachingSelect>
          <option value="" disabled selected>
            --Select--
          </option>
          <option value="na">NA</option>
          <option value="euw">EUW</option>
        </CoachingSelect>
      </SortContainer>
      <SortContainer>
        <CoachingLabel>Roles</CoachingLabel>
        <CoachingSelect>
          <option value="" disabled selected>
            --Select--
          </option>
          <option value="">Top</option>
          <option value="">Jungle</option>
          <option value="">Mid</option>
          <option value="">Adc</option>
          <option value="">Support</option>
        </CoachingSelect>
      </SortContainer>
    </Wrapper>
  );
};

export default CoachingMainSort;
