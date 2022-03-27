import React, { useState } from 'react'
import "./style.css"

export default function Feed() {
    const [user, itUser] = useState("");
    const [post, itPost] = useState("");
    return (
        <div className='feed'>
            <div className='feed-posts'>
                <div className='feed-pics'>
                    <p>before pic</p>
                    <p>after pic</p>
                </div>
                <div className='feed-user-infos'>
                <p>user pfp</p>
                    <p>user name</p>
                </div>
                <div className='feed-discs'>
                    <p>post discriptions</p>
                </div>
                <div className='feed-detail'>
                    <p>post created date</p>
                </div>
            </div>
            <div className='feed-posts'>
                <div className='feed-pics'>
                    <p>before pic</p>
                    <p>after pic</p>
                </div>
                <div className='feed-user-infos'>
                <p>user pfp</p>
                    <p>user name</p>
                </div>
                <div className='feed-discs'>
                    <p>post discriptions</p>
                </div>
                <div className='feed-detail'>
                    <p>post created date</p>
                </div>
            </div>
            <div className='feed-posts'>
                <div className='feed-pics'>
                    <p>before pic</p>
                    <p>after pic</p>
                </div>
                <div className='feed-user-infos'>
                <p>user pfp</p>
                    <p>user name</p>
                </div>
                <div className='feed-discs'>
                    <p>post discriptions</p>
                </div>
                <div className='feed-detail'>
                    <p>post created date</p>
                </div>
            </div>
            <div className='feed-posts'>
                <div className='feed-pics'>
                    <p>before pic</p>
                    <p>after pic</p>
                </div>
                <div className='feed-user-infos'>
                <p>user pfp</p>
                    <p>user name</p>
                </div>
                <div className='feed-discs'>
                    <p>post discriptions</p>
                </div>
                <div className='feed-detail'>
                    <p>post created date</p>
                </div>
            </div>
            <div className='feed-posts'>
                <div className='feed-pics'>
                    <p>before pic</p>
                    <p>after pic</p>
                </div>
                <div className='feed-user-infos'>
                <p>user pfp</p>
                    <p>user name</p>
                </div>
                <div className='feed-discs'>
                    <p>post discriptions</p>
                </div>
                <div className='feed-detail'>
                    <p>post created date</p>
                </div>
            </div>
        </div>
    )
}