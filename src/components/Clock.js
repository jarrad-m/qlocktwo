import React from 'react';
import { letters } from './letterConfig.js';
import styled from 'styled-components';

const LetterWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(11, 20px);
    grid-template-rows: repeat(10, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
`

function Clock({letterIndex, additionalMinutes}) {
    
    return (
        <LetterWrapper>
        {   
            letters.map((item, i) => {
                if (letterIndex.includes(i)) {
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