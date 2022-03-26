import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Navbar() {

    return (
        <nav className="NavBar">
            <div className="navicons">
                <div className="CreatePost">
                    <p><AiOutlinePlusCircle size={35} /></p>
                </div>
                <div className="Activity">
                    <p><AiOutlineHeart size={35} /></p>
                </div>
                <div className="Location">
                    <p><MdOutlineLocationOn size={35} /></p>
                </div>
                <div className="Shop">
                    <p><MdOutlineShoppingCart size={35} /></p>
                </div>
            </div>
        </nav>
    )

}