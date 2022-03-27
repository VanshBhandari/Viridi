import React, { useState } from 'react'
import "./style.css"
import TestImage from "../../media/thumbnail.png"
import Logo from '../../media/Logo.png'


export default function Feed() {
    const [user, itUser] = useState("");
    const [post, itPost] = useState("");
    return (
        <div className='feed'>
            <div className='feed-posts flex flex-row '>
                <div className='feed-pics flex justify-left '>
                    <p class='py-6 pl-9'><img src={TestImage} className='h-56 w-84' /></p>
                    <p class='py-6 pl-3'><img src={TestImage} className='h-56 w-84'/></p>
                </div>
                <div className='feed-text flex flex-col justify-right'>
                    <div className='feed-user-infos flex pt-6 pl-7'>
                        <p className='flex'><img src={Logo} className='h-12 w-12'/></p>
                        <p className='flex pt-4 pl-3 font-bold'>User Name</p>
                    </div>                   
                    <div className='feed-discs flex pt-4 pl-7 font-semibold'>
                        <p>OMG! i just picked up some trash! like bruh im such an environmentalist-</p>
                    </div>
                    <div className='feed-detail flex pt-32 pl-56   '>
                        <p className='text-text-secondary'>Published on 27/03/22</p>
                    </div>
                </div>           
            </div>

            <div className='feed-posts flex flex-row '>
                <div className='feed-pics flex justify-left '>
                    <p class='py-6 pl-9'><img src={TestImage} className='h-56 w-84' /></p>
                    <p class='py-6 pl-3'><img src={TestImage} className='h-56 w-84'/></p>
                </div>
                <div className='feed-text flex flex-col justify-right'>
                    <div className='feed-user-infos flex pt-6 pl-7'>
                        <p className='flex'><img src={Logo} className='h-12 w-12'/></p>
                        <p className='flex pt-4 pl-3 font-bold'>User Name</p>
                    </div>                   
                    <div className='feed-discs flex pt-4 pl-7 font-semibold'>
                        <p>OMG! i just picked up some trash! like bruh im such an environmentalist-</p>
                    </div>
                    <div className='feed-detail flex pt-32 pl-56   '>
                        <p className='text-text-secondary'>Published on 27/03/22</p>
                    </div>
                </div>           
            </div>

            <div className='feed-posts flex flex-row '>
                <div className='feed-pics flex justify-left '>
                    <p class='py-6 pl-9'><img src={TestImage} className='h-56 w-84' /></p>
                    <p class='py-6 pl-3'><img src={TestImage} className='h-56 w-84'/></p>
                </div>
                <div className='feed-text flex flex-col justify-right'>
                    <div className='feed-user-infos flex pt-6 pl-7'>
                        <p className='flex'><img src={Logo} className='h-12 w-12'/></p>
                        <p className='flex pt-4 pl-3 font-bold'>User Name</p>
                    </div>                   
                    <div className='feed-discs flex pt-4 pl-7 font-semibold'>
                        <p>OMG! i just picked up some trash! like bruh im such an environmentalist-</p>
                    </div>
                    <div className='feed-detail flex pt-32 pl-56   '>
                        <p className='text-text-secondary'>Published on 27/03/22</p>
                    </div>
                </div>           
            </div>

            <div className='feed-posts flex flex-row '>
                <div className='feed-pics flex justify-left '>
                    <p class='py-6 pl-9'><img src={TestImage} className='h-56 w-84' /></p>
                    <p class='py-6 pl-3'><img src={TestImage} className='h-56 w-84'/></p>
                </div>
                <div className='feed-text flex flex-col justify-right'>
                    <div className='feed-user-infos flex pt-6 pl-7'>
                        <p className='flex'><img src={Logo} className='h-12 w-12'/></p>
                        <p className='flex pt-4 pl-3 font-bold'>User Name</p>
                    </div>                   
                    <div className='feed-discs flex pt-4 pl-7 font-semibold'>
                        <p>OMG! i just picked up some trash! like bruh im such an environmentalist-</p>
                    </div>
                    <div className='feed-detail flex pt-32 pl-56   '>
                        <p className='text-text-secondary'>Published on 27/03/22</p>
                    </div>
                </div>           
            </div>
            <div className='feed-posts flex flex-row '>
                <div className='feed-pics flex justify-left '>
                    <p class='py-6 pl-9'><img src={TestImage} className='h-56 w-84' /></p>
                    <p class='py-6 pl-3'><img src={TestImage} className='h-56 w-84'/></p>
                </div>
                <div className='feed-text flex flex-col justify-right'>
                    <div className='feed-user-infos flex pt-6 pl-7'>
                        <p className='flex'><img src={Logo} className='h-12 w-12'/></p>
                        <p className='flex pt-4 pl-3 font-bold'>User Name</p>
                    </div>                   
                    <div className='feed-discs flex pt-4 pl-7 font-semibold'>
                        <p>OMG! i just picked up some trash! like bruh im such an environmentalist-</p>
                    </div>
                    <div className='feed-detail flex pt-32 pl-56   '>
                        <p className='text-text-secondary'>Published on 27/03/22</p>
                    </div>
                </div>           
            </div>
        </div>
    )
}