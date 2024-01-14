import React, { useState, useEffect } from "react";
import styled from "styled-components";

const WateringSchedule: React.FC = () => {
  const [workTime, setWorkTime] = useState(25); // in minutes
  const [working, setWorking] = useState(true); // true if working
  const [counting, setCounting] = useState(false); // true if in countdown

  const startTimer = () => {
    if (counting) {
      setCounting(false);
    } else {
      setCounting(true);
    }
  }

  useEffect(() => {
    if (counting) {
      const timer = setInterval(() => {
        setWorkTime(workTime - 1);
        console.log(workTime);
      }, 1000);
      if (workTime <= 0 || !counting) {
        clearInterval(timer);
        reset();
      }
      return () => clearInterval(timer);
    }
  }, [workTime, counting]);

  const reset = () => {
    // switching from working to break
    if (working) {
      setWorkTime(5);
      setWorking(false);
    } else {
      setWorkTime(25);
      setWorking(true);
    }
  }

  const resetBack = () => {
    // resetting the time it currently had
    if (working) {
      setWorkTime(25);      
    } else {
      setWorkTime(5);
    }
    setCounting(false);
  }

  return (
    <WateringContainer>
      <WateringTitle>Watering Schedule</WateringTitle>
      <TimerContainer>
        <div>
          {<TimerNumber>{workTime}</TimerNumber>}
          <TimerWords>minutes left</TimerWords>
        </div>
        {counting ? <StartButton onClick={startTimer}>Pause</StartButton> : <>{((working && workTime != 25) || (!working && workTime != 5)) ? <StartButton onClick={startTimer}>Continue</StartButton> : <StartButton onClick={startTimer}>Start</StartButton>}</>}
        {counting? <StartButton onClick={resetBack}>Reset</StartButton> : <></>}
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
