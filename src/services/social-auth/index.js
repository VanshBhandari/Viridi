import { fbApp } from "../../fbase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";

export default function SignInWithGoogle(){
    const [init, setInit] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false);
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
        onAuthStateChanged(getAuth(fbApp), (user)=>{
            if(user){
                setIsLoggedIn(true);    
                setUserObj(
                    {
                        uid: user.uid,
                        displayName: user.displayName
                    }
                );
            } else{
                setIsLoggedIn(false);
            }
        })
        setInit(true);
    }, []);

    return (init) ? (
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

