import React from 'react'
import './App.css'
import routes from './routes'
import NavBar from './Components/NavBar/NavBar'
import SideBar from './Components/SideBar/SideBar'
import { useRoutes } from 'react-router-dom'

export default function App() {
  let Router = useRoutes(routes)
  return (
    <>
      <NavBar />
      <div className="PageContainer">
        <SideBar />
        {Router}
      </div>
    </>
  ) 
}