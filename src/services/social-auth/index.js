import { fbApp } from "../../fbase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useEffect, useState } from "react";

export default function SignInWithGoogle(){
    const [isLoggedIn, setIsLoggedIn] = useState(getAuth(fbApp).currentUser);
    const [userObj, setUserObj] = useState(null);
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(getAuth(fbApp), provider)
        .then((re)=>{
            console.log(re);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        getAuth(fbApp).onAuthStateChanged((user)=>{
            if(user){
                setUserObj(user);
            }
        })
    }, []);

    return (isLoggedIn) ? (
        <div className="login">
            <p>Logged In With Google</p>
        </div>
    ) : (
        <div className="authBtns">
            <button onClick={googleSignIn} className="authBtn">
                Continue with Google 
            </button>
        </div>
    );
};

