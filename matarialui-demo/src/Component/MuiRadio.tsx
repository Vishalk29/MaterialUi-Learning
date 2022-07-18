import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText } from "@mui/material"
import React, { useState } from "react"
const MuiRadio = () => {
    const [value, setValue] = useState('');
    console.log({ value })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    //    Taking the example of selecting the number of year expirence in industry
    return (
        <Box>
            <FormControl>
                <FormLabel id="job-expirence-group-lable">
                    Years of expirence
                </FormLabel>
                <RadioGroup name='job-expirence-group' aria-label="job-expirence-group-lable" value={value} onChange={handleChange} row>
                    <FormControlLabel control={<Radio size="small" color="secondary" />} label='0-2' value='0-2' />
                    <FormControlLabel control={<Radio />} label='3-5' value='3-5' />
                    <FormControlLabel control={<Radio />} label='6-10' value='6-10' />
                </RadioGroup>
                <FormHelperText>Invalid selection</FormHelperText>
            </FormControl>
        </Box>
    )
}

export default MuiRadio