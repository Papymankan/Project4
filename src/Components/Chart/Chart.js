import React from 'react'
import './Chart.css'
import { ResponsiveContainer , Line , LineChart , XAxis , Tooltip , CartesianGrid } from 'recharts'

export default function Chart({title , data , dataKey , grid}) {
  return (
    <div className='Chart'>
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width='100%' aspect={3}>
            <LineChart data={data}>
                <XAxis dataKey='name' stroke='#5550bd'/>
                <Line dataKey={dataKey} stroke='#5550bd' type='monotone'/>
                <Tooltip/>
                {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='10'/>}
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
