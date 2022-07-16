import { Typography } from "@mui/material"

const MuiTypography = () => {
    return (
        <div>
            <Typography variant="h1">H1 here</Typography>
            <Typography variant="h2">H2 here</Typography>
            <Typography variant="h3">H3 here</Typography>
            <Typography variant="h4" component="h1">H4 here</Typography>
            <Typography variant="h5">H5 here</Typography>
            <Typography variant="h6" gutterBottom>H6 here</Typography>
            <Typography variant="subtitle1">Subtitle1 here</Typography>
            <Typography variant="subtitle2">Subtitle2 here</Typography>

            <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique rem laborum nemo vitae adipisci, repudiandae corrupti itaque non labore modi debitis aliquid odio quas est nam tempora earum laboriosam cumque.
            </Typography>
            <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique rem laborum nemo vitae adipisci, repudiandae corrupti itaque non labore modi debitis aliquid odio quas est nam tempora earum laboriosam cumque.
            </Typography>
        </div>
    )
}

export default MuiTypography