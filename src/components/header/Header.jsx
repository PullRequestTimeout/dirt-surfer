import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import LocationSelector from '../locationSelector/locationSelector'
import './Header.css'

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        DirtSurfer
                    </Typography>

                    <LocationSelector sx={{ mr: 4 }} />

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