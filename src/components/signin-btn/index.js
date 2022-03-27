import React, { useContext } from 'react'
import { UserContext } from '../../contexts/user';
import { SignInWithGoogle } from '../../fbase';
import "./style.css"

export default function SignInBtn() {
    const [user, setUser] = useContext(UserContext).user; 

    const signInBtnClick = async () => {
        let user = await SignInWithGoogle();
        if (user) setUser(user);
        console.log(user)
    };

    return (
        <div className="signInBtn bg-accent p-5 rounded-full cursor-pointer" onClick={signInBtnClick}>
            <p className='font-bold'>Sign In With Google</p>
        </div>
    );
}