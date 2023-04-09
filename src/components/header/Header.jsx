import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import LocationSelector from '../locationSelector/LocationSelector'

export default function Header({ handleCityChange }) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className="header">

                    <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
                        DirtSurfer
                    </Typography>

                    <LocationSelector sx={{ mr: 4 }} handleCityChange={handleCityChange} />

                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                        <SettingsIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}