import React from 'react'
import "./style.css"
import { Navbar, SidePanel, signInWithGoogle } from '../../containers'

export default function Home() {
  return (
    <div className="home">
        <signInWithGoogle />
        <SidePanel />
        <Navbar />
    </div>
  )
}
