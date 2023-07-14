import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './Feature.css'

export default function Feature(props) {
  return (
    <div className='Feature'>
      <span>{props.title}</span>
      <div className="FeaturesPricingBox">
        <h3>{props.price}</h3>
        <span>{props.percent}</span>
        {props.percent > 0 ? (<ArrowUpwardIcon style={{color:'green'}}/>) :
          (<ArrowDownwardIcon style={{color:'red'}}/>)
        }
      </div>
      <span>Compared to last month</span>
    </div>
  )
}
