import React, { useState } from 'react';

import { Box, Button, TextField, Slider, MenuItem, FormControl, Select } from '@mui/material';

import { Result } from './Result';

const initialValues = {
	type: '',
	ppl: 0,
	priceRange: [0,1],
    diffRange: [0,1],
    key: ''
}

const initialResult = {
    activity: '',
    difficulty: 0,
    price: 0,
    key: '',
    display: false,
    error: ''
}

const activityTypes = [
    "education", 
    "recreational", 
    "social", 
    "diy", 
    "charity", 
    "cooking", 
    "relaxation", 
    "music", 
    "busywork"
]

export const Form = () => {

    const [state, setState]   = useState(initialValues);
    const [result, setResult] = useState(initialResult);

    // Handler functions
    const handleTypeChange = (e: { target: { value: string } }) => {

        let type = e.target.value;
        setState(state => ({...state, type}))
    }

    const handlePplChange = (ppl: number) => {

        setState(state => ({ ...state, ppl }));
    }

    const handlePriceChange = (priceRange: number[]) => {

        setState(state => ({ ...state, priceRange}));
    }

    const handleDifficultyChange = (diffRange: number[]) => {

        setState(state => ({ ...state, diffRange}));
    }

    const handleKeyChange = (key: string) => {

        setState(state => ({ ...state, key }));
    }

    const handleSubmit = () => {
    
        const baseURL = "https://www.boredapi.com/api/activity"
        let options = "?"

        // If key is specified, only use that
        if (state.key) {
          options += "key="+state.key;
        }
        else {
          if (state.type)
            options += "type="+state.type+"&";
          if (state.ppl)
            options += "participants="+state.ppl+"&";
          options += "minprice="+state.priceRange[0]+"&maxprice="+state.priceRange[1]+"&";
          options += "minaccessibility="+state.diffRange[0]+"&maxaccessibility="+state.diffRange[1]+"&"
        }
    
        let finalURL = baseURL + options;
    
        window.fetch(finalURL)
          .then(response => response.json())
          .then(data => {
    
            if(data.error)
              setResult({
                ...result, 
                display: false,
                error: data.error
              });
            else
              setResult({
                activity: data.activity,
                difficulty: data.accessibility,
                price: data.price,
                key: data.key,
                display: true,
                error: ''
              }) 
          });
    }

    return (
        <div className="FormResult">
            <Box 
                className="Form"
                minWidth={240}
                maxWidth={240}
                margin={'auto'}
                sx={{ pt: 10 }}
            >
                <h6 style={{textAlign:'center', fontSize: 13}}>let me find something to do</h6>
                <div className="type">

                    <h2>Activity Type</h2>
                    <FormControl 
                        variant="standard" 
                        sx={{ width: '100%' }}

                        disabled={(state.key!=="")}
                    >
                        <Select
                            value={state.type}
                            onChange={handleTypeChange}
                        >
                            <MenuItem key={0} value=""><em>None</em></MenuItem>
                            
                            {activityTypes.map((a, i) => (
                                <MenuItem key={i+1} value={a}>{a[0].toUpperCase()+a.substring(1)}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>

                <div className="people">
                    
                    <h2>People</h2>

                    <Slider 
                        min={0}
                        max={8}
                        marks
                        value={state.ppl}
                        onChange={(e, v) => handlePplChange(v as number)}

                        disabled={(state.key!=="")}
                    />
                    <TextField  
                        type="number"
                        variant="standard"
                        sx={{ width: '100%' }}
                        InputProps={{ inputProps: { min: 0, max: 8 } }}
                        value={state.ppl}
                        onChange={(e) => handlePplChange(Number(e.target.value))}

                        disabled={(state.key!=="")}
                    />
                    <sub>*Setting this to 0 will disable this input</sub>
                </div>

                <div className="price">

                    <h2>Price Range</h2>

                    <Slider
                        min={0}
                        max={1}
                        step={0.01}
                        value={state.priceRange}
                        onChange={(e, v) => handlePriceChange(v as number[])}

                        disabled={(state.key!=="")}
                    />            
                </div>

                <div className="difficulty">

                    <h2>Difficulty Range</h2>

                    <Slider
                        min={0}
                        max={1}
                        step={0.01}
                        value={state.diffRange}
                        onChange={(e, v) => handleDifficultyChange(v as number[])}

                        disabled={(state.key!=="")}
                    />
                </div>
                <div className="key">

                    <h2>Key</h2>
                    <TextField 
                        id="key"
                        variant="standard"
                        sx={{ width: '100%' }}
                        value={state.key}
                        onChange={(e) => handleKeyChange(e.target.value)}
                        
                    />
                    <br></br>
                    <sub>*Using key will disable other inputs</sub>
                </div>

                <div className="submit">
                    <h2>
                    </h2>
                    <Button 
                        onClick={handleSubmit}
                        sx={{ 
                            width: '100%', 
                            fontWeight: 'bold',
                            fontSize: 18
                        }}
                        color='primary'
                        variant='outlined'
                        disableRipple
                    >
                        WHAT CAN I DO?
                    </Button>
                </div>
            </Box>

            <Result data={result}/>
        </div>
    );
}