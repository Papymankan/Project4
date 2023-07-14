import React from 'react'
import './LastTrans.css'
import { Avatar } from '@mui/material'

export default function LastTrans(props) {
    return (
        <tr>
            <td>
                <Avatar sx={{ bgcolor: props.color }}>{props.avatar}</Avatar>
                {props.name}
            </td>
            <td>
                {props.date}
            </td>
            <td>
                {props.amount}
            </td>
            <td className={props.action}>
                {props.action}
            </td>
        </tr>
    )
}
