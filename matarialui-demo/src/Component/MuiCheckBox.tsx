import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup } from "@mui/material"
import React, { useState } from "react"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
const MuiCheckBox = () => {
    const [acceptTnC, setAcceptTnC] = useState(false)
    const [skills, setSkills] = useState<string[]>([])
    console.log({ acceptTnC })
    console.log({ skills })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnC(event.target.checked);
    }
    const skillHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value);
        if (index === -1) {
            setSkills([...skills, event.target.value])
        } else {
            setSkills(skills.filter((skill) => skill !== event.target.value))
        }
    }

    return (
        // Here we created the checkbox that will acceptTnC as a props instead of value we use the checked property
        <Box>
            <Box>
                <FormControlLabel label='I accept the term and conditions' control={<Checkbox checked={acceptTnC} onChange={handleChange} />} />
            </Box>
            <Box>
                <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} checked={acceptTnC} onChange={handleChange} />
            </Box>
            <Box>
                <FormControl>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup>
                        <FormControlLabel label='Html' control={<Checkbox value='html' checked={skills.includes('html')} onChange={skillHandler} />} />
                        <FormControlLabel label='Css' control={<Checkbox value='css' checked={skills.includes('css')} onChange={skillHandler} />} />
                    </FormGroup>
                </FormControl>
            </Box>
        </Box>
    )
}

export default MuiCheckBox