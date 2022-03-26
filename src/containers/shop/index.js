import React, { useState } from 'react'
import { MdClose } from "react-icons/md";
import './style.css'
import Logo from '../shop/Group 32.png'

export default function Shop(props) {
    
    return (props.trigger) ? (
        <>
            <div className='overlay o-block'></div>
            <div className='shoppop'>
                <div className='shoppop-in'>
                    <button className='closebtn' onClick={()=> props.setTrigger(false)}>
                        <MdClose size={30}/>
                    </button>
                    <img src={Logo}  className="h-80 w-auto left-2"/>
                </div>
            </div>
        </>
    ) : (
        ""
    );
}