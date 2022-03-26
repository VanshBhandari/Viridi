import React from 'react'
import "./style.css"
import { MainSection, SidePanel, Profile, Shop } from '../../containers'

export default function Home() {
  return (
    <div className="home flex min-h-screen overflow-y-auto">
        <Profile />
        <Shop />
        <SidePanel />
        <MainSection />
    </div>
  )
}
