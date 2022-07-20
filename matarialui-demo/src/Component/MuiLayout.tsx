import { Box } from "@mui/material"

const MuiLayout = () => {
    return (
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
    )
}

export default MuiLayout