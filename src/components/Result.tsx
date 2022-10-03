import { Box, Skeleton, Slider } from '@mui/material';

import { StyledH2 } from './styled/StyledH2';

export const Result = ({data}: any) => {

    let debug = false;

    return (
        <Box 
            className="Result"
            minWidth={240}
            maxWidth={240}
            margin={'auto'}
            textAlign={'left'}
        >     
            <StyledH2 
                style={{
                    whiteSpace: 'nowrap'
                }}
            >
                {!(data.display || data.error) &&
                    <Skeleton variant="rectangular" width={'100%'} height={36} />
                }
                {data.display &&
                    <div> {data.activity} </div>
                }
                {data.error &&
                    <div> :( {data.error.toLowerCase()} </div>
                }
            </StyledH2>

            <p>{debug && data.difficulty}</p>

            <h2>Price</h2>
            <Slider 
                min={0}
                max={1}
                step={0.01}
                value={data.price}

                disabled
            />

            <p>{debug && data.price}</p>

            <h2>Difficulty</h2>
            <Slider 
                min={0}
                max={1}
                step={0.01}
                value={data.difficulty}

                disabled
            />

            <h2>Key</h2>
            <p>
                {data.key ||    
                    <em style={{whiteSpace:'nowrap'}}>
                        Adjust the parameters and submit!
                    </em>}
            </p>
        </Box>
    )
}