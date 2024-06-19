import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isCoachingRegion, isCoachingRoles } from "../../../Data/atoms";

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  @media ${(props) => props.theme.device.tablet} {
    justify-content: center;
  }
  @media ${(props) => props.theme.device.mobile} {
    flex-direction: column;
    gap: 20px;
  }
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
  const setRegion = useSetRecoilState(isCoachingRegion);
  const setRoles = useSetRecoilState(isCoachingRoles);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedRoles, setSelectedRoles] = useState("");

  const handleRegionSelect = (e) => {
    const selectedValue = e.target.value;
    setSelectedRegion(selectedValue);
    setRegion(selectedValue === "all" ? "" : selectedValue);
  };

  const handleRolesSelect = (e) => {
    const selectedValue = e.target.value;
    setSelectedRoles(selectedValue);
    setRoles(selectedValue === "all" ? "" : selectedValue);
  };

  return (
    <Wrapper>
      <SortContainer>
        <CoachingLabel>Region</CoachingLabel>
        <CoachingSelect onChange={handleRegionSelect} value={selectedRegion}>
          <option disabled selected>
            --Select--
          </option>
          <option value="all">All</option>
          <option value="na">NA</option>
          <option value="euw">EUW</option>
        </CoachingSelect>
      </SortContainer>
      <SortContainer>
        <CoachingLabel>Roles</CoachingLabel>
        <CoachingSelect onChange={handleRolesSelect} value={selectedRoles}>
          <option value="" disabled selected>
            --Select--
          </option>
          <option value="all">All</option>
          <option value="top">Top</option>
          <option value="jungle">Jungle</option>
          <option value="mid">Mid</option>
          <option value="adc">Adc</option>
          <option value="support">Support</option>
        </CoachingSelect>
      </SortContainer>
    </Wrapper>
  );
};

export default CoachingMainSort;
