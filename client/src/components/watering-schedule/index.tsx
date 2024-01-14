import React, { useEffect } from "react";
import styled from "styled-components";

interface TimerProps{
  workTime: number,
  setWorkTime: React.Dispatch<React.SetStateAction<number>>;
  working: boolean,
  setWorking: React.Dispatch<React.SetStateAction<boolean>>;
  counting: boolean,
  setCounting: React.Dispatch<React.SetStateAction<boolean>>;
}

const WateringSchedule: React.FC<TimerProps> = ({ workTime, setWorkTime, working, setWorking, counting, setCounting }) => {
  
  const startTimer = () => {
    if (counting) {
      setCounting(false);
    } else {
      setCounting(true);
    }
  };

  useEffect(() => {
    let timer = NodeJS.Timeout;
    
    const updateTimer = () => {
      setWorkTime((prevTime: number) => prevTime - 1);
      console.log(workTime);
      
      if (workTime <= 0 || !counting) {
        clearInterval(timer);
        reset();
      }
    };
  
    if (counting) {
      timer = setInterval(updateTimer, 1000);
  
      // Use the Page Visibility API to check if the page is hidden
      const handleVisibilityChange = () => {
        if (document.hidden) {
          clearInterval(timer);
        } else {
          timer = setInterval(updateTimer, 1000);
        }
      };
  
      document.addEventListener('visibilitychange', handleVisibilityChange);
  
      return () => {
        clearInterval(timer);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    }
  
    return () => clearInterval(timer);
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
  };

  const resetBack = () => {
    // resetting the time it currently had
    if (working) {
      setWorkTime(25);
    } else {
      setWorkTime(5);
    }
    setCounting(false);
  };

  return (
    <WateringContainer>
      <WateringTitle>Watering Schedule</WateringTitle>
      <TimerContainer>
        <div>
          {<TimerNumber>{workTime}</TimerNumber>}
          <TimerWords>minutes left</TimerWords>
        </div>
        <FlexButton>
        {counting ? (
          <StartButton onClick={startTimer}>Pause</StartButton>
        ) : (
          <>
            {(working && workTime !== 25) || (!working && workTime !== 5) ? (
              <StartButton onClick={startTimer}>Continue</StartButton>
            ) : (
              <StartButton onClick={startTimer}>Start</StartButton>
            )}
          </>
        )}
        {counting ? (
          <StartButton onClick={resetBack}>Reset</StartButton>
        ) : (
          <></>
        )}
        </FlexButton>
      </TimerContainer>
    </WateringContainer>
  );
};

const WateringContainer = styled.div`
  position: absolute;
  top: 20%;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const WateringTitle = styled.h1`
  color: #000;
  font-size: 28px;
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
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  padding: 0;
  margin: 0;
`;

const FlexButton = styled.div`
  display: flex;
  gap: 1em;
`;

const StartButton = styled.button`
  border-radius: 8px;
  background: #e3ffd2;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  height: 44px;
  width: 101.684px;

  border: 0;

  color: #000;

  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export default WateringSchedule;
