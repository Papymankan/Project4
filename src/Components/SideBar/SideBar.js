import React from 'react'
import { Link } from 'react-router-dom'
import { LineStyle, Timeline, TrendingUp, PermIdentity, Storefront, AttachMoney, BarChart, MailOutline, DynamicFeed, ChatBubbleOutline, WorkOutline, Report } from '@mui/icons-material'
import './SideBar.css'

export default function SideBar() {
    return (
        <div className='SideBar'>
            <div className="SideBarContainer">
                <div className="SideBarMenus">
                    <h3>Dashboard</h3>
                    <ul className='SideBarItemsList'>
                        <Link to='/'>
                            <li className='SideBarItems'>
                                <LineStyle /> Home
                            </li>
                        </Link>
                        <li className='SideBarItems'>
                            <Timeline /> Analytics
                        </li>
                        <li className='SideBarItems'>
                            <TrendingUp /> Sales
                        </li>
                    </ul>
                </div>
                <div className="SideBarMenus">
                    <h3>Quick menu</h3>

                    <ul className='SideBarItemsList'>
                        <Link to='/users'>
                            <li className='SideBarItems'>
                                <PermIdentity /> Users
                            </li>
                        </Link>
                        <li className='SideBarItems'>
                            <PermIdentity /> New User
                        </li>
                        <Link to='/products'>
                            <li className='SideBarItems'>
                                <Storefront /> Products
                            </li>
                        </Link>
                        <li className='SideBarItems'>
                            <AttachMoney /> Transaction
                        </li>
                        <li className='SideBarItems'>
                            <BarChart /> Reports
                        </li>
                    </ul>
                </div>
                <div className="SideBarMenus">
                    <h3>Notifications</h3>
                    <ul className='SideBarItemsList'>
                        <li className='SideBarItems'>
                            <MailOutline /> Mails
                        </li>
                        <li className='SideBarItems'>
                            <DynamicFeed /> Feedback
                        </li>
                        <li className='SideBarItems'>
                            <ChatBubbleOutline /> Messages
                        </li>
                    </ul>
                </div>
                <div className="SideBarMenus">
                    <h3>Staff</h3>
                    <ul className='SideBarItemsList'>
                        <li className='SideBarItems'>
                            <WorkOutline /> Manage
                        </li>
                        <li className='SideBarItems'>
                            <Timeline /> Analytics
                        </li>
                        <li className='SideBarItems'>
                            <Report /> Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
