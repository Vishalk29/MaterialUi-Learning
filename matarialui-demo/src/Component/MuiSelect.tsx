import { Box, TextField, MenuItem } from "@mui/material"
import React, { useState } from "react"
const MuiSelect = () => {
    const [country, setCountry] = useState('');
    const [countries, setCountries] = useState<string[]>([]);
    console.log({ country });
    console.log({ countries })
    const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value);
    }
    const handlerChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setCountries(typeof value === 'string' ? value.split(',') : value)
    }
    return (
        // Created the select drop down using the MenuItem and textfield
        <Box width='250px'>
            <TextField label='Select country' select value={country} onChange={handlerChange} fullWidth>
                <MenuItem value='In'>India</MenuItem>
                <MenuItem value='US'>USA</MenuItem>
                <MenuItem value='Aus'>Australia</MenuItem>
            </TextField>

            {/* multiple menuselected  here by using the selectProps*/}
            <TextField label='select country' select value={countries} onChange={handlerChange1} fullWidth SelectProps={{
                multiple: true,
            }}>
                <MenuItem value='In'>India</MenuItem>
                <MenuItem value='US'>USA</MenuItem>
                <MenuItem value='Aus'>Australia</MenuItem>

            </TextField>
        </Box>
    )
}

export default MuiSelect