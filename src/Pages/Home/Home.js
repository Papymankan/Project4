import React from 'react'
import './Home.css'
import { xAxisData } from '../../Datas'
import { NewJoin } from '../../Datas';
import { LastAction } from '../../Datas';
import Feature from '../../Components/Feature/Feature'
import Chart from '../../Components/Chart/Chart'
import NewJoined from '../../Components/NewJoined/NewJoined'
import LastTrans from '../../Components/LastTrans/LastTrans';

export default function Home() {
  return (
    <div className='Home'>
      <div className="container">
        <div className="Features">
          <Feature title='Revanue' price='$2,415' percent={-11.4} />
          <Feature title='Sales' price='$4,915' percent={-1.4} />
          <Feature title='Cost' price='$2,225' percent={2.4} />
        </div>
        <Chart grid title='Month Sale' data={xAxisData} dataKey='sale' id='HomeChart'/>
        <div className="Widgets">
          <div className="WidgetLeft">
            <h2>New Joined Members</h2>
            {NewJoin.map(join =>{
              return <NewJoined name={join.name} color={join.color} job={join.job} avatar={join.avatar}/>
            })}
          </div>
          <div className="WidgetRight">
            <h2>Lastest Transactions</h2>
              <table className='TransTable'>
                  <tr>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                  {LastAction.map(Last =>{
                      return <LastTrans name={Last.name} avatar={Last.avatar} date={Last.date} amount={Last.amount} action={Last.action} color={Last.color}/>
                  })}

              </table>
          </div>
        </div>
      </div>
    </div>
  )
}