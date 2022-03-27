import React, { useState } from 'react'
import { FaAngellist } from "react-icons/fa";
import './style.css'

export default function Profile() {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    
    return (!isProfileOpen) ? (
        <div className='profile mt-5'>
            <button className='profbtn' onClick={()=> setIsProfileOpen(true)}>
                <p><FaAngellist size={50} /></p>
            </button>
        </div>
    ) : (
        <>
            <div className='overlay o-block' onClick={()=> setIsProfileOpen(false)}></div>
            <div className='popup'>
                <div className='profile'>
                    <button className='profbtn' onClick={()=> setIsProfileOpen(false)}>
                        <p><FaAngellist size={50}  /></p>
                    </button>
                </div>
                <div className='profpop' >
                    <div className='username'>                   
                        <p>Full Name</p>
                    </div>
                    <div className='numberofposts'>
                        <p>3 posts</p>
                    </div>
                    <div className='treesplanted'>
                        <p>1 tree planted</p>
                    </div>
                    <div className='rank'>
                        <p>Rank:192</p>
                    </div>
                    <div className='description'>
                        <p>wannabe environmentalist. used to annoy people on fb now trying to annoy people here. #gotrees #bi #vegan #pride</p>
                    </div>
                </div>
            </div>
        </>
    );
};