import React from "react";
import styled from "styled-components";

const WateringSchedule: React.FC = () => {
  return (
    <WateringContainer>
      <WateringTitle>Watering Schedule</WateringTitle>
      <TimerContainer>
        <TimerNumber>25</TimerNumber>
        <TimerWords>minutes left</TimerWords>
      </TimerContainer>
    </WateringContainer>
  );
};

const WateringContainer = styled.div`
  position: absolute;
  top: 30%;
  padding-left: 30px;
`;

const WateringTitle = styled.h1`
  color: #000;
  font-family: Kadwa;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const TimerContainer = styled.div`
  border-radius: 2px;
  background: #9fdc9f;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TimerNumber = styled.h1`
  color: #000;

  text-align: center;
  font-family: Kadwa;
  font-size: 68px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const TimerWords = styled.h2`
  color: #000;
  text-align: center;
  font-family: Kadwa;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export default WateringSchedule;
