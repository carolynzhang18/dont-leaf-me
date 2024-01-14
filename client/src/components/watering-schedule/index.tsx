import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import plantLogo from "../../../public/images/plant.png";
import waterCanLogo from "../../../public/images/waterCan.png";

const WateringSchedule: React.FC = () => {
  const [workTime, setWorkTime] = useState(25); // in minutes
  const [working, setWorking] = useState(true); // true if working
  const [counting, setCounting] = useState(false); // true if in countdown
  const [showTimer, setShowTimer] = useState(true); // true if in timer is being shown

  const toggleShowTimer = () => {
    setShowTimer(!showTimer);
  };

  const startTimer = () => {
    if (counting) {
      setCounting(false);
    } else {
      setCounting(true);
    }
  };

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
        <TopRight onClick={toggleShowTimer}>
          {(() => {
            if (showTimer && working) {
              return (
                <PlantImg
                  src={plantLogo}
                  alt="Leaf logo"
                  style={{ width: "75%", height: "75%" }}
                />
              );
            } else if (showTimer && !working) {
              return (
                <PlantImg
                  src={waterCanLogo}
                  alt="Leaf logo"
                  style={{ width: "75%", height: "75%" }}
                />
              );
            } else {
              return <TimerWordsSmall>{workTime}</TimerWordsSmall>;
            }
          })()}
        </TopRight>
        {(() => {
          if (!showTimer && working) {
            return (
              <PlantImg
                src={plantLogo}
                alt="Leaf logo"
                style={{ width: "34%", height: "34%" }}
              />
            );
          } else if (!showTimer && !working) {
            return (
              <PlantImg
                src={waterCanLogo}
                alt="Leaf logo"
                style={{ width: "40%", height: "40%" }}
              />
            );
          } else {
            return (
              <div>
                <TimerNumber>{workTime}</TimerNumber>
                <TimerWords>minutes left</TimerWords>
              </div>
            );
          }
        })()}
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

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(5deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const PlantImg = styled.img`
  animation: ${rotateAnimation} 1s linear infinite;
`;

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
  min-height: 222px;
  padding: 30px 0;
`;

const TopRight = styled.div`
  border-radius: 5px;
  background: #e3ffd2;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

  width: 40px;
  height: 40px;
  padding: 1px 2px 2px 2px;
  margin: 4px;
  position: absolute;
  top: 60px;
  right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
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

const TimerWordsSmall = styled.h2`
  color: #000;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
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

  &:hover {
    cursor: pointer;
    background: #88bf88;
  }
`;

export default WateringSchedule;
