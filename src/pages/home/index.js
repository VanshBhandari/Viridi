import React from 'react'
import "./style.css"
import { MainSection, SidePanel, Profile } from '../../containers'

export default function Home() {
  return (
    <div className="home flex min-h-screen overflow-y-auto">
        <Profile />
        <SidePanel />
        <MainSection />
    </div>
  )
}
