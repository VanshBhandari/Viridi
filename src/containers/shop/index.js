import React from 'react'
import { MdClose } from "react-icons/md";
import './style.css'
import Logo from '../../media/Shop Tree.png'
import {GiOakLeaf} from 'react-icons/gi'
import {HiChevronDown} from 'react-icons/hi'
import {HiChevronUp} from 'react-icons/hi'
import {GrLinkNext} from 'react-icons/gr'
import {BsArrowUpCircleFill} from 'react-icons/bs'


export default function Shop(props) {
    
    return (props.trigger) ? (
        <>
            <div className='overlay o-block' onClick={()=> props.setTrigger(false)}></div>
            <div className='shoppop'>
                <div className='shoppop-in flex flex-col h-full py-10 px-16 '>
                    <div className='flex justify-between text-text-secondary'>
                        <div className='flex'>
                        <p>Balance: 248  </p>
                        <GiOakLeaf className='ml-2 mt-1.5'/>
                        </div>                      
                        <button className='closebtn' onClick={()=> props.setTrigger(false)}>
                            <MdClose size={30}/>
                        </button>
                    </div>
                    <div className='flex py-8'>
                        <img src={Logo}  className="h-80 ml-16 "/>
                        <div className='flex flex-col px-16 py-8 space-y-5'>
                            <p className='font-black text-4xl text-right'>Let’s shop some treeeeess</p>
                            <p className='text-right pl-30'>When you purchase a tree, we donate the equivalent amount to a tree-planting organization.</p> 
                            <div className='flex pl-8'>
                                <div className='flex mt-6 bg-accent rounded-2xl px-5 py-2'>
                                    <button className='flex bg-primary rounded-full'><HiChevronUp size={48}/></button>
                                    <p class='text-2xl font-bold pt-2 pl-4 pr-4'>4</p>
                                    <button className='flex bg-primary rounded-full'><HiChevronDown size={48}/></button>
                                    <p class='font-bold text-xl pt-2 pl-4' >4 trees = 200 </p>
                                    <GiOakLeaf class='mt-3.5 ml-1.5' />
                                    
                                </div>
                                <button className='flex pt-10 pl-7 '><GrLinkNext size={32} /></button>
                            </div>
                            <div className='flex pl-8'><p className='text-text-secondary'>New Rank: 572</p>
                            <BsArrowUpCircleFill className='mt-1.5 ml-1' />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : (
        ""
    );
}