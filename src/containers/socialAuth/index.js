import { fbApp } from "../../fbase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

export default function signInWithGoogle(){

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

    return (
        <div className="authBtns">
            <button onClick={googleSignIn} className="authBtn">
                Continue with Google 
            </button>
        </div>
    );
};

