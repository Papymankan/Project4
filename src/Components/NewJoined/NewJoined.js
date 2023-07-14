import React from 'react'
import { Avatar } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import './NewJoined.css'

export default function NewJoined(props) {
    return (
        <div className='NewJoined'>

            <Avatar sx={{ bgcolor: props.color }}>{props.avatar}</Avatar>
            <div className="NewJoinedInfos">
                <span>{props.name}</span>
                <span>{props.job}</span>
            </div>
            <VisibilityIcon />
        </div>

    )
}

