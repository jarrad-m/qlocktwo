import React from 'react';
import { letters } from './letterConfig.js';
import styled from 'styled-components';


//const letters = ["A","b"]

const LetterWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(11, 20px);
    grid-template-rows: repeat(10, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
`

function Clock() {
    const illuminatedLetters = [0, 1, 3, 4, 33, 34, 35, 36, 44, 45, 46, 47, 70, 71, 72, 73]
    return (
        <LetterWrapper>
        {   
            letters.map((item, i) => {
                if (illuminatedLetters.includes(i)) {
                    return (
                        <div key={i} value={item} style={{color: "red"}}>
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
        </LetterWrapper>
    )
}

export default Clock;