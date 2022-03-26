import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Navbar() {

    return (
        <nav className="NavBar flex justify-around py-4 mx-auto bg-accent w-80 rounded-b-xl">
            <div className="navicons flex flex-row gap-11">
                <div className="CreatePost">
                    <p><AiOutlinePlusCircle size={30} /></p>
                </div>
                <div className="Activity">
                    <p><AiOutlineHeart size={30} /></p>
                </div>
                <div className="Location">
                    <p><MdOutlineLocationOn size={30} /></p>
                </div>
                <div className="Shop">
                    <p><MdOutlineShoppingCart size={30} /></p>
                </div>
            </div>
        </nav>
    )

}