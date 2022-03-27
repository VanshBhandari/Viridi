import React, { useState, useContext } from 'react'
import { FaAngellist } from "react-icons/fa";
import './style.css'
import { UserContext } from '../../contexts/user';
import { SignInBtn } from '../../components';

export default function Profile() {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [user, setUser] = useContext(UserContext).user
    
    return (!isProfileOpen) ? (
        <div className='profile mt-3'>
            <button className='profbtn' onClick={()=> setIsProfileOpen(true)}>
                {(user) ?
                (<img className='rounded-full border-accent border-4' src={user.photoURL} alt='profile-photo' />)
                :
                (<p><FaAngellist size={50} /></p>)}
            </button>
        </div>
    ) : (
        <>
            <div className='overlay o-block' onClick={()=> setIsProfileOpen(false)}></div>
            <div className='popup'>
                <div className='profile mt-3'>
                    <button className='profbtn' onClick={()=> setIsProfileOpen(false)}>
                        {(user) ?
                        (<img className='rounded-full border-accent border-4' src={user.photoURL} alt='profile-photo' />)
                        :
                        (<p><FaAngellist size={50} /></p>)}
                    </button>
                </div>
                {(user) ?
                (<div className='profpop' >
                    <div className='username'>                   
                        <p>{user.displayName}</p>
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
                ) : 
                (<div className='profpop'><SignInBtn /></div>)}
            </div>
        </>
    );
};