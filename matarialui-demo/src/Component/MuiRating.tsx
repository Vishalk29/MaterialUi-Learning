import { Stack, Rating } from "@mui/material"
import React, { useState } from "react"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
const MuiRating = () => {
    const [value, setValue] = useState<number | null>(3)
    console.log(value)
    const handlechange = (_event: React.ChangeEvent<{}>, newvalue: number | null) => {
        setValue(newvalue)
    }
    return (
        // here we are used the readonly (changing the usestate value to 3)and hightlightselectedonly(which selct only the value
        //which we move the cursor on)
        <Stack spacing={2}>
            <Rating value={value} onChange={handlechange} precision={0.5} size='large' icon={<FavoriteIcon fontSize="inherit" color="error" />} emptyIcon={<FavoriteBorderIcon fontSize="inherit" />} readOnly highlightSelectedOnly />
        </Stack>
    )
}

export default MuiRating