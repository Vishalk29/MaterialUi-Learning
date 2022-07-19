import { Stack, Autocomplete, TextField } from "@mui/material"
import React, { useState } from 'react';
type Skill = {
    id: number
    label: string
}

const skills = ['Html', 'css', 'javscript', 'typescript'];
const skillOption = skills.map((skill, index) => ({
    id: index + 1,
    label: skill,
}))
const MuiAutocomplete = () => {
    const [value, setValue] = useState<string | null>(null)
    const [skill, setSkill] = useState<Skill | null>(null)


    console.log({ value })
    console.log({ skill })
    return (
        <Stack width='250px'>
            <Autocomplete options={skills} renderInput={(params) => <TextField {...params} label='skills' />}
                value={value}
                onChange={(event: any, newvalue: string | null) => setValue(newvalue)}
                freeSolo
            />
            <Autocomplete options={skillOption} renderInput={(params) => <TextField {...params} label='skills' />}
                value={skill}
                onChange={(event: any, newvalue: Skill | null) => setSkill(newvalue)}

            />
        </Stack>
    )
}

export default MuiAutocomplete