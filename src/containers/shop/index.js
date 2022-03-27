import React, { useState } from 'react'
import { MdClose } from "react-icons/md";
import './style.css'
import Logo from '../../media/Shop Tree.png'

export default function Shop(props) {
    
    return (props.trigger) ? (
        <>
            <div className='overlay o-block'></div>
            <div className='shoppop'>
                <div className='shoppop-in flex flex-col h-full py-10 px-16'>
                    <div className='flex justify-between'>
                        <p>Balance: 248</p>
                        <button className='closebtn' onClick={()=> props.setTrigger(false)}>
                            <MdClose size={30}/>
                        </button>
                    </div>
                    <div className='flex py-20'>
                        <img src={Logo}  className="h-80 ml-16"/>
                        <div className='flex flex-col px-16 space-y-5'>
                            <p className='font-black text-4xl text-right'>Let’s go shop treeeeess</p>
                            <p className='text-right pl-32'>When you purchase a tree, we donate the equivalent amount to a tree-planting organization.</p> 
                            <div className='flex'>
                                <div className='flex'>
                                    <button>Up</button>
                                    <button>Down</button>
                                    <p>4 trees = 200</p>
                                </div>
                                <button>Go</button>
                            </div>
                            <p>New Rank: 572</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : (
        ""
    );
}