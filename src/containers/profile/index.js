import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import './style.css'

export default function Profile() {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    
    return (!isProfileOpen) ? (
        <div className='profile'>
            <button className='profbtn' onClick={()=> setIsProfileOpen(true)}>
                <p><CgProfile size={50} /></p>
            </button>
        </div>
    ) : (
        <>
            <div className='profile'>
                <button className='profbtn' onClick={()=> setIsProfileOpen(false)}>
                    <p><CgProfile size={50} /></p>
                </button>
            </div>
            <div className='profpop'>
                <div className='profpop-in'>
                    <p>helloooo</p>
                </div>
            </div>
        </>
    );
};