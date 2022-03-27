import React, { useState } from 'react'
import "./style.css"
import TestImage from "../../media/thumbnail.png"
import Logo from '../../media/Logo.png'


export default function Feed() {
    const [post, itPost] = useState("");
    return (
        <div className='feed'>
            <div className='feed-posts flex flex-row '>
                <div className='feed-pics flex justify-left flex-col space-y-4 mx-10 mt-[22px]'>
                    <img src="https://i.ibb.co/61vpqh7/post1-before.jpg" className='h-44 rounded-xl' />
                    <img src="https://i.ibb.co/cyXYsYL/post1-after.jpg" className='h-44 rounded-xl' />
                </div>
                <div className='feed-text flex flex-col justify-right pt-28'>
                    <div className='feed-user-infos flex pt-6 pl-7'>
                        <img src="https://lh3.googleusercontent.com/a-/AOh14GgHl5w1uublrZFxkuH9PEWBBfrc5jphX3_0vcRTvg=s96-c" className='h-12 rounded-full'/>
                        <p className='flex pt-6 pl-3 font-bold'>Jeewoo Chung</p>
                    </div>                   
                    <div className='feed-discs flex pt-4 pl-7 font-medium'>
                        <p>Phew! What a big cleanup! I sure hope these litterings stop soon.</p>
                    </div>
                    <div className='feed-detail flex pt-2 justify-end pr-7'>
                        <p className='text-text-secondary'>Published on 27/03/22</p>
                    </div>
                </div>           
            </div>
            
            <div className='feed-posts flex flex-row '>
                <div className='feed-pics flex justify-left flex-col space-y-4 mx-10 mt-[22px]'>
                    <img src="https://i.ibb.co/CQB4SnS/post2-before.png" className='h-44 rounded-xl' />
                    <img src="https://i.ibb.co/nzh43n5/post2-after.png" className='h-44 rounded-xl' />
                </div>
                <div className='feed-text flex flex-col justify-right pt-28'>
                    <div className='feed-user-infos flex pt-6 pl-7'>
                        <img src="https://randomuser.me/api/portraits/men/57.jpg" className='h-12 rounded-full'/>
                        <p className='flex pt-6 pl-3 font-bold'>Felisha Underwood</p>
                    </div>                   
                    <div className='feed-discs flex pt-4 pl-7 font-medium'>
                        <p>OMG! i just picked up some trash! like bruh im such an environmentalist-</p>
                    </div>
                    <div className='feed-detail flex pt-2 justify-end pr-7'>
                        <p className='text-text-secondary'>Published on 27/03/22</p>
                    </div>
                </div>           
            </div>

            <div className='feed-posts flex flex-row '>
                <div className='feed-pics flex justify-left flex-col space-y-4 mx-10 mt-[22px]'>
                    <img src="https://i.ibb.co/4mt9FWw/post3-before.jpg" className='h-44 rounded-xl' />
                    <img src="https://i.ibb.co/P5CgH3k/post3-after.jpg" className='h-44 rounded-xl' />
                </div>
                <div className='feed-text flex flex-col justify-right pt-28'>
                    <div className='feed-user-infos flex pt-6 pl-7'>
                        <img src="https://randomuser.me/api/portraits/women/2.jpg" className='h-12 rounded-full'/>
                        <p className='flex pt-6 pl-3 font-bold'>Cleopatra Lichtenberg</p>
                    </div>                   
                    <div className='feed-discs flex pt-4 pl-7 font-medium'>
                        <p>Let’s get rid of the trash, so we can make room for a new season of inspiration.</p>
                    </div>
                    <div className='feed-detail flex pt-2 justify-end pr-7'>
                        <p className='text-text-secondary'>Published on 24/03/22</p>
                    </div>
                </div>           
            </div>

            <div className='feed-posts flex flex-row '>
                <div className='feed-pics flex justify-left flex-col space-y-4 mx-10 mt-[22px]'>
                    <img src="https://i.ibb.co/WxFn7LB/post4-before.png" className='h-44 rounded-xl' />
                    <img src="https://i.ibb.co/y5JYqhM/post4-after.png" className='h-44 rounded-xl' />
                </div>
                <div className='feed-text flex flex-col justify-right pt-28'>
                    <div className='feed-user-infos flex pt-6 pl-7'>
                        <img src="https://randomuser.me/api/portraits/women/10.jpg" className='h-12 rounded-full'/>
                        <p className='flex pt-6 pl-3 font-bold'>Angelina Van Antwerpen</p>
                    </div>                   
                    <div className='feed-discs flex pt-4 pl-7 font-medium'>
                        <p>To make our streets and environment cleaner and brighter:</p>
                    </div>
                    <div className='feed-detail flex pt-2 justify-end pr-7'>
                        <p className='text-text-secondary'>Published on 23/03/22</p>
                    </div>
                </div>           
            </div>

            <div className='feed-posts flex flex-row '>
                <div className='feed-pics flex justify-left flex-col space-y-4 mx-10 mt-[22px]'>
                    <img src='https://i.ibb.co/sP2YC8N/post5-before.png' className='h-44 rounded-xl' />
                    <img src='https://i.ibb.co/pRYJ2Yw/post5-after.png' className='h-44 rounded-xl' />
                </div>
                <div className='feed-text flex flex-col justify-right pt-28'>
                    <div className='feed-user-infos flex pt-6 pl-7'>
                        <img src="https://randomuser.me/api/portraits/men/63.jpg" className='h-12 rounded-full'/>
                        <p className='flex pt-6 pl-3 font-bold'>Eadric Marquardt</p>
                    </div>                   
                    <div className='feed-discs flex pt-4 pl-7 font-medium'>
                        <p>Let us come and make your backyard a thing of beauty!</p>
                    </div>
                    <div className='feed-detail flex pt-2 justify-end pr-7'>
                        <p className='text-text-secondary'>Published on 19/03/22</p>
                    </div>
                </div>           
            </div>

            <div className='feed-posts flex flex-row '>
                <div className='feed-pics flex justify-left flex-col space-y-4 mx-10 mt-[22px]'>
                    <img src="https://i.ibb.co/4mt9FWw/post3-before.jpg" className='h-44 rounded-xl' />
                    <img src="https://i.ibb.co/P5CgH3k/post3-after.jpg" className='h-44 rounded-xl' />
                </div>
                <div className='feed-text flex flex-col justify-right pt-28'>
                    <div className='feed-user-infos flex pt-6 pl-7'>
                        <img src="https://randomuser.me/api/portraits/men/29.jpg" className='h-12 rounded-full'/>
                        <p className='flex pt-6 pl-3 font-bold'>Runar De Vroom</p>
                    </div>                   
                    <div className='feed-discs flex pt-4 pl-7 font-medium'>
                        <p>It’s easy to feel happy when you live in a house with clean.</p>
                    </div>
                    <div className='feed-detail flex pt-2 justify-end pr-7'>
                        <p className='text-text-secondary'>Published on 05/02/22</p>
                    </div>
                </div>           
            </div>
        </div>
    )
}