import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged,createUserWithEmailAndPassword ,updateProfile,signInWithEmailAndPassword  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/User/Firebase/Firebase.init";
import img from '../assets/user_logo.png'

initializeAuthentication();
const useFirebase = () =>{
    const [user,setUser] = useState({});
    const [dataComing,setDataComing] = useState(true)
    const auth = getAuth();

    // update name 

    const updateName =(name) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: img
        }).then(() => {
            console.log('Update User')
            window.location.href = "/home";
        })
    }

    // Email password 
    const handleRegistration = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
     // Email sign 
    const handleEmailSign = (email, password) => {
        setDataComing(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // sign in google
    const signIngoogle = () => {
        setDataComing(true);
        const googleprovider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleprovider);
    }
    // State Changed 
    useEffect(()=>{
        const notsubscibed = onAuthStateChanged(auth,user => {
            if (user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setDataComing(false);
            
        })
        return() => notsubscibed;
    },[])

    // log out 
    const logOut = () =>{
        setDataComing(true);
        signOut(auth)
        .then(() => {
        })
        .finally(() => setDataComing(false));
    }
    return {
        user,
        signIngoogle,
        logOut,
        dataComing,
        handleRegistration,
        handleEmailSign,
        updateName
    }
}

export default useFirebase;