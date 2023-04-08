import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './locationSelector.css'

export default function LocationSelector() {
    const [location, setLocation] = React.useState('Rossland');

    const handleChange = (event) => {
        setLocation(event.target.value);
    };

    return (
        <FormControl sx={{
            m: 1, minWidth: 160
        }}>
            <InputLabel id="demo-simple-select-helper-label">Location</InputLabel>
            <Select
                className="location-selector"
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={location}
                label="Location"
                onChange={handleChange}

            >
                <MenuItem value={"Rossland"}>Rossland</MenuItem>
                <MenuItem value={"Trail"}>Trail</MenuItem>
                <MenuItem value={"Castlegar"}>Castlegar</MenuItem>
            </Select>
        </FormControl >
    );
}