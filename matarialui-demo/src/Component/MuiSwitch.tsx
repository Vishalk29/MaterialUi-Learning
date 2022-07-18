import { Box, FormControlLabel, Switch } from "@mui/material"
import React, { useState } from 'react'
const MuiSwitch = () => {
    const [checked, setChecked] = useState(false)
    console.log({ checked })
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)

    }
    return (
        <Box>
            <FormControlLabel label='Dark mode' control={<Switch checked={checked} onChange={changeHandler} />} />
        </Box>
    )
}

export default MuiSwitch