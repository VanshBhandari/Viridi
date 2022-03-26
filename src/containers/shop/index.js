import React, { useState } from 'react'
import { MdClose } from "react-icons/md";
import './style.css'

export default function Shop(props) {
    
    return (props.trigger) ? (
        <>
            <div className='overlay o-block'></div>
            <div className='shoppop'>
                <div className='shoppop-in'>
                    <button className='closebtn' onClick={()=> props.setTrigger(false)}>
                        <MdClose size={30}/>
                    </button>
                    <p>helloooo</p>
                </div>
            </div>
        </>
    ) : (
        ""
    );
}