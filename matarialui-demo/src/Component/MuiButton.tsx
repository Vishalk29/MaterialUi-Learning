import { Button, Stack, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import React, { useState } from "react";
const MuiButton = () => {
    const [formate, setFormate] = useState<string | null>(null);
    console.log({
        formate,
    })
    const handleChange = (_event: React.MouseEvent, updateFormate: string | null) => {
        setFormate(updateFormate)
    }
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <Button variant="text" href="https://google.com">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">outlined</Button>
            </Stack>

            <Stack spacing={2} direction='row'>
                <Button variant="contained" color="primary">Primary</Button>
                <Button variant="contained" color="secondary">Seconday</Button>
                <Button variant="contained" color="error">Error</Button>
                <Button variant="contained" color="warning">Warning</Button>
                <Button variant="contained" color="info">Info</Button>
                <Button variant="contained" color="success">Success</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant="contained" size="small">Small</Button>
                <Button variant="contained" size="medium">Medium</Button>
                <Button variant="contained" size="large">Large</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant="contained" startIcon={<SendIcon />} onClick={() => alert('thank you')}>Send</Button>
                <Button variant="contained" endIcon={<SendIcon />} disableElevation>Send</Button>
                <IconButton aria-label="send" color="success" size="small">
                    <SendIcon />
                </IconButton>
            </Stack>
            <Stack direction='row'>
                <ButtonGroup variant="outlined" orientation="vertical" size="small" color="secondary" aria-label="alignment button group">
                    <Button onClick={() => alert('clicked')}>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction='row'>
                <ToggleButtonGroup aria-label="text formating" size="small" value={formate} onChange={handleChange} exclusive>
                    <ToggleButton value='Bold' aria-label="Bold"><FormatBoldIcon /></ToggleButton>
                    <ToggleButton value='Italic' aria-label="Italic"><FormatItalicIcon /></ToggleButton>
                    <ToggleButton value='Underline' aria-label="Underline"><FormatUnderlinedIcon /></ToggleButton>
                </ToggleButtonGroup>
            </Stack>

        </Stack>
    )
}

export default MuiButton