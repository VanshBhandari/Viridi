import React, { useState } from 'react'
import { MdClose } from "react-icons/md";
import './style.css'
import Logo from '../../media/Shop Tree.png'

import {GiOakLeaf} from 'react-icons/gi'
import {HiChevronDown} from 'react-icons/hi'
import {HiChevronUp} from 'react-icons/hi'
import {GrLinkNext} from 'react-icons/gr'
import {BsArrowUpCircleFill} from 'react-icons/bs'



export default function Shop(props) {
    const treeValue = 200;
    const [accBalance, setAccBalance] = useState(500);
    const [treesnum, setTreesnum] = useState(0);
    const [errMsg, setErrMsg] = useState("");

    function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }

    const onTreeUpClick= async ()=> {
        if (accBalance > (treesnum + 1) * treeValue) {
            setTreesnum((treesnum + 1));
        } else {
            setErrMsg("You Don't Have Enough VIRIDI Coins");
            await timeout(3000);
            setErrMsg("");
        }
    }
    function onTreeDownClick(e) {

        if (treesnum > 0) {
            setTreesnum((treesnum - 1));
        }
    }

    function onGoClick(e) {
        setTreesnum(0);
        setAccBalance((accBalance - (treesnum * treeValue)));
    }

    return (props.trigger) ? (
        <>
            <div className='overlay o-block' onClick={() => props.setTrigger(false)}></div>
            <div className='shoppop'>
                <div className='shoppop-in flex flex-col h-full py-10 px-16 '>
                    <div className='flex justify-between text-text-secondary'>
                        <div className='flex'>
                            <p>Balance: {accBalance}  </p>
                            <GiOakLeaf className='ml-2 mt-1.5' />
                        </div>
                        <button className='closebtn' onClick={() => props.setTrigger(false)}>
                            <MdClose size={30} />
                        </button>
                    </div>
                    <div className='flex py-8'>
                        <img src={Logo} className="h-80 ml-16 " />
                        <div className='flex flex-col px-16 py-8 space-y-5'>
                            <p className='font-black text-4xl text-right'>Let’s shop some treeeeess</p>

                            <p className='text-right pl-30'>When you purchase a tree, we donate the equivalent amount to a tree-planting organization.</p> 
                            <div className='flex pl-8'>
                                <div className='flex mt-6 bg-accent rounded-2xl px-5 py-2'>
                                    <button className='flex bg-primary rounded-full' onClick={onTreeUpClick}><HiChevronUp size={48}/></button>
                                    <p class='text-2xl font-bold pt-2 pl-4 pr-4'>{treesnum}</p>
                                    <button className='flex bg-primary rounded-full' onClick={onTreeDownClick}><HiChevronDown size={48}/></button>
                                    <p class='font-bold text-xl pt-2 pl-4' >{treesnum} trees = {treesnum * treeValue}</p>
                                    <GiOakLeaf class='mt-3.5 ml-1.5' />

                                </div>

                                <button className='flex pt-10 pl-7 ' onClick={onGoClick}><GrLinkNext size={32} /></button>
                            </div>
                            <p className='err-msg'>{errMsg}</p>
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