import React from "react";
import styled from "styled-components";

const WateringSchedule: React.FC = () => {
  return (
    <WateringContainer>
      <WateringTitle>Watering Schedule</WateringTitle>
      <TimerContainer>
        <div>
          <TimerNumber>25</TimerNumber>
          <TimerWords>minutes left</TimerWords>
        </div>
        <StartButton>Start</StartButton>
      </TimerContainer>
    </WateringContainer>
  );
};

const WateringContainer = styled.div`
  position: absolute;
  top: 20%;
  width: 300px;
`;

const WateringTitle = styled.h1`
  color: #000;
  // font-family: Kadwa;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const TimerContainer = styled.div`
  border-radius: 6px;
  background: #9fdc9f;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.25);

  padding: 30px 0;
`;

const TimerNumber = styled.h1`
  color: #000;

  text-align: center;
  // font-family: Kadwa;
  font-size: 68px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  padding: 0;
  margin: 0;
`;

const TimerWords = styled.h2`
  color: #000;
  text-align: center;
  // font-family: Kadwa;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  padding: 0;
  margin: 0;
`;

const StartButton = styled.button`
  border-radius: 8px;
  background: #e3ffd2;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  height: 44px;
  width: 101.684px;

  border: 0;

  color: #000;

  // font-family: Kadwa;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export default WateringSchedule;
