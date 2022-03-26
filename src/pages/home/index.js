import React from 'react'
import "./style.css"
import { Navbar, SidePanel } from '../../containers'

export default function Home() {
  return (
    <div className="home">
        <Navbar />
        <SidePanel />
    </div>
  )
}
