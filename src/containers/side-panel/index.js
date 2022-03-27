import React, { useContext } from 'react'
import { UserContext } from '../../contexts/user'
import Logo from '../../media/Text Logo.png'
import './style.css'
import { SearchBar, SignInBtn } from '../../components'
import Social from '../../media/bottom.png'

export default function SidePanel() {

  return (
    <div className="flex-shrink">
      <div className='relative w-64 h-full'>
        <div className="fixed h-screen flex flex-col w-64 shadow-md bg-accent px-1 drop-shadow-md">
          <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div class="flex items-center flex-shrink-0 px-4">
              <img src={Logo} className="h-16 w-auto"/>
            </div>
            <div className="flex-1 py-7">
              <SearchBar />
            </div>
          </div>
          <div class="flex pb-4">
            <img src={Social}></img>
          </div>
        </div>
      </div>
    </div>
  )
}