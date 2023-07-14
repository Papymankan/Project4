import React from 'react'
import './NavBar.css'
import { Badge , Avatar } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function NavBar() {
    return (
        <div className='NavBar'>
            <div className="NavBarBox">
                <div className="NavBarLeft">
                    <h1>DashBoard &#10084;</h1>
                </div>
                <div className="NavBarRight">
                    <Badge badgeContent={4} color="error">
                        <NotificationsNoneIcon />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <LanguageIcon />
                    </Badge>
                    <SettingsIcon/>
                    <Avatar sx={{ bgcolor: '#ff6818' }}>N</Avatar>
                </div>
            </div>
        </div>
    )
}
