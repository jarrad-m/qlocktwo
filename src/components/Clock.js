import React from 'react';
import { letters } from './letterConfig.js';
import styled from 'styled-components';

const ClockWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 40px;    
    font-family: 'DINProLight';
`

const LetterWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(11,20px);
    grid-template-rows: repeat(10,1fr);
    grid-column-gap: 19px;
    grid-row-gap: 12px;
    font-size: 26px;
    padding: 100px;
    box-shadow: -2px 20px 20px -10px rgba(0,0 ,0,0.4);
    position: relative;
    background: #ececec;
    color: #a5a5a5;
`
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


`

function Clock({letterIndex, additionalMinutes}) {
    
    return (
        <ClockWrapper>
            <LetterWrapper>
            {   
                letters.map((item, i) => {
                    if (letterIndex.includes(i)) {
                        return (
                            <div key={i} value={item} style={{color: "white"}}>
                                {item} 
                            </div>
                        );
                    }
                    else {
                        return (
                            <div key={i} value={item} >
                                {item} 
                            </div>
                        );
                    }
                }
            )}
                <AdditionalMinutesBox className={ additionalMinutes >= 1 ? 'illuminated minute-one' : 'minute-one' }>&#183;</AdditionalMinutesBox>
                <AdditionalMinutesBox className={ additionalMinutes >= 2 ? 'illuminated minute-two' : 'minute-two'}>&#183;</AdditionalMinutesBox>
                <AdditionalMinutesBox className={ additionalMinutes >= 3 ? 'illuminated minute-three' : 'minute-three'}>&#183;</AdditionalMinutesBox>
                <AdditionalMinutesBox className={ additionalMinutes >= 4 ? 'illuminated minute-four' : 'minute-four'}>&#183;</AdditionalMinutesBox>
            </LetterWrapper>
        </ClockWrapper>
    )
}

export default Clock;