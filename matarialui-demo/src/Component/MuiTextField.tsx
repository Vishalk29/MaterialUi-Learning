import { TextField, Stack, InputAdornment } from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react";
const MuiTextField = () => {
    const [value, setValue] = useState('')
    return (
        <Stack spacing={4}>
            {/* Basic Text field */}
            <Stack spacing={2} direction='row'>
                <TextField label='Name' variant="filled" />
                <TextField label='Name' variant="outlined" />
                <TextField label='Name' variant="standard" />
            </Stack>
            {/* Adding the size and color */}
            <Stack spacing={2} direction='row'>
                <TextField label='small secondary' size="small" color="secondary" />
            </Stack>
            {/* used the required(*) and used the type and helpertext show below and textfiled to
             disabled(we cant see ) used inputprops is readonly :true we cannot write */}
            <Stack spacing={2} direction='row'>
                <TextField label='Form Input' required value={value} onChange={(e) => setValue(e.target.value)}
                    error={!value} helperText={!value ? 'Required' : 'Do not share the password'} />

                <TextField label='Form Password' type='password' helperText='Do not share the password' InputProps={{
                    endAdornment: <InputAdornment position="end"><VisibilityIcon /></InputAdornment>
                }} />
                <TextField label='Form Password' disabled />
                <TextField label='Read only' inputProps={{ readOnly: true }} />
            </Stack>

            {/* Input adonament adding the symbole in first and last  */}
            <Stack spacing={2} direction='row'>
                <TextField label='Amount' InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>
                }} />
                <TextField label='weight' InputProps={{
                    endAdornment: <InputAdornment position="end">kg</InputAdornment>
                }} />

            </Stack>
        </Stack>
    )
}

export default MuiTextField