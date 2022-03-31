import React from 'react'
import "./style.css"
import { MainSection, SidePanel, Profile, Shop, Feed } from '../../containers'
import {onAuthStateChanged} from 'firebase/auth'
import { UserContext } from '../../contexts/user'
import { useContext } from 'react'
import { auth } from '../../fbase'
export default function Home() {
  const [user, setUser] = useContext(UserContext).user; 
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })
  return (
    <div className="home flex min-h-screen overflow-y-auto">
        <Profile />
        <Shop />
        <Feed />
        <SidePanel />
        <MainSection />
    </div>
  )
}
