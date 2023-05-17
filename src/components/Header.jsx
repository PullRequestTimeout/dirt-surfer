import React from 'react'
import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import LocationSelector from './LocationSelector'

export default function Header({ handleCityChange }) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>DirtSurfer</Typography>
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
    )
}