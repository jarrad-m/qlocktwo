import React from "react";
import { letters } from "./letterConfig.js";
import styled from "styled-components";

const ClockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: "DINProRegular";
  -webkit-font-smoothing: antialiased;
`;

const LetterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(11, 20px);
  grid-template-rows: repeat(10, 1fr);
  grid-column-gap: 9px;
  grid-row-gap: 10px;
  font-size: 22px;
  line-height: 22px;
  padding: 90px;
  box-shadow: -2px 20px 20px -10px rgba(0, 0, 0, 0.4);
  position: relative;
  background: #e0e0e0;
  color: #a5a5a5;

  span {
    background: #0000002e;
    color: transparent;
    text-shadow: 0px 2px 3px rgba(247, 244, 244, 0.72);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;

    &.illuminated {
      color: white;
      text-shadow: 0px 0px 20px rgb(255, 255, 255);
      background: transparent;
    }
  }
`;
const AdditionalMinutesBox = styled.div`
  position: absolute;
  height: 61px;
  width: 61px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 40px;

  &.illuminated {
    color: white;
  }

  &.minute-one {
    top: 0;
    left: 0;
  }

  &.minute-two {
    top: 0;
    right: 0;
  }

  &.minute-three {
    bottom: 0;
    right: 0;
  }

  &.minute-four {
    bottom: 0;
    left: 0;
  }
`;

function Clock({ letterIndex, additionalMinutes }) {
  return (
    <ClockWrapper>
      <LetterWrapper>
        {letters.map((item, i) => {
          if (letterIndex.includes(i)) {
            return (
              <div key={i} value={item}>
                <span className="illuminated">{item}</span>
              </div>
            );
          } else {
            return (
              <div key={i} value={item}>
                <span>{item}</span>
              </div>
            );
          }
        })}
        <AdditionalMinutesBox
          className={
            additionalMinutes >= 1 ? "illuminated minute-one" : "minute-one"
          }
        >
          &#183;
        </AdditionalMinutesBox>
        <AdditionalMinutesBox
          className={
            additionalMinutes >= 2 ? "illuminated minute-two" : "minute-two"
          }
        >
          &#183;
        </AdditionalMinutesBox>
        <AdditionalMinutesBox
          className={
            additionalMinutes >= 3 ? "illuminated minute-three" : "minute-three"
          }
        >
          &#183;
        </AdditionalMinutesBox>
        <AdditionalMinutesBox
          className={
            additionalMinutes >= 4 ? "illuminated minute-four" : "minute-four"
          }
        >
          &#183;
        </AdditionalMinutesBox>
      </LetterWrapper>
    </ClockWrapper>
  );
}

export default Clock;
