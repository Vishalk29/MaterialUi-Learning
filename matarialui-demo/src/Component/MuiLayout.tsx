import { Box, Stack, Divider } from "@mui/material"

const MuiLayout = () => {
    return (
        <Stack sx={{ border: '1px solid ' }} direction='row' spacing={2} divider={<Divider orientation="vertical" flexItem />}>
            <Box sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                height: '100px',
                width: '100px',
                padding: '16px',
                '&:hover': {
                    backgroundColor: 'secondary.light'
                },
            }}>
                Hello world
            </Box>
            <Box sx={{
                backgroundColor: 'secondary.main',
                color: 'white',
                height: '100px',
                width: '100px',
                padding: '16px',
                '&:hover': {
                    backgroundColor: 'secondary.light'
                },
            }}>
                Hello world
            </Box>
        </Stack>
    )
}

export default MuiLayout