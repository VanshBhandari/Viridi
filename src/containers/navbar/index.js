import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
// import MakePost from "../make-post";
import Shop from "../shop";

export default function Navbar() {
    const [isShopClick, setIsShopClick] = useState(false);
    const [isMakePostClick, setIsMakePostClick] = useState(false);

    function OnShopClick(e){
        if(!isShopClick){
            setIsShopClick(true);
        }else{
            setIsShopClick(false);
        }
    }

    function OnMakePostClick(e){
        if(!isMakePostClick){
            setIsMakePostClick(true);
        }else{
            setIsMakePostClick(false);
        }
    }

    return (
        <>
            <div className="flex flex-row justify-around">
                <></>
                <nav className="NavBar flex justify-around py-4 mx-auto bg-accent w-96 rounded-b-2xl drop-shadow-md fixed">
                    <div className="navicons flex flex-row gap-12">
                        <button className="CreatePost" onClick={OnMakePostClick}>
                            <p><AiOutlinePlusCircle size={28} /></p>
                        </button>
                        <div className="Activity">
                            <p><AiOutlineHeart size={28} /></p>
                        </div>
                        <div className="Location">
                            <p><MdOutlineLocationOn size={28} /></p>
                        </div>
                        <button className="Shop" onClick={OnShopClick}>
                            <p><MdOutlineShoppingCart size={28} /></p>
                        </button>
                    </div>
                </nav>
            </div>
            <Shop trigger={isShopClick} setTrigger={setIsShopClick} />
            {/* <MakePost trigger={isMakePostClick} setTrigger={setIsMakePostClick} /> */}
        </>
    )

}