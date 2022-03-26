import React from 'react'
import "./style.css"
import { Navbar, SidePanel } from '../../containers'

export default function Home() {
  return (
    <div className="home flex min-h-screen overflow-y-auto">
        <SidePanel />
        <Navbar />
    </div>
  )
}
