import { Autocomplete, Button, TextField } from "@mui/material";
import React from "react";


const item = [
    {
        label: 'makan tahu'
    },
    {
        label: 'makan tahu'
    },
    {
        label: 'makan tahu'
    },
    {
        label: 'makan tahu'
    },
    {
        label: 'makan tahu'
    },
]

const Audios = () => {
    return (
        <div>
            <h1>helloooocp</h1>
            <Button variant="contained">Helloo</Button>
            <div>
                <Autocomplete 
                    disablePortal
                    options={item}
                    renderInput={(item) => <TextField style={{color: 'white'}} {...item} label="makan" />}
                />
            </div>
        </div>
    )
}

export default Audios;