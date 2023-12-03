import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../block/Header"
import Sider from './Sider'
import {FC} from "react"
import {useSelector} from "react-redux"


const Layout: FC = () => {
    const readToggle = useSelector((state: any) => state.toggle)
  return (
    <div>
        <Sider/>
        <div className='w-full flex justify-end '>
        <div 
        className={`bg-[white] transition-all duration-300 `}
        style={{
          width: `${readToggle ? "calc(100% - 170px)" : "calc(100% - 70px)"}`
        }}
        >
          <Header/>
          <div className="m-4">

          <Outlet/>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Layout