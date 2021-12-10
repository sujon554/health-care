import { getAuth, signOut, signInWithPopup, GoogleAuthProvider,GithubAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from "../Login/Firebase/firebase.init";



initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth();
    const signInUsingGoogle = () => {
      const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
            setUser(result.user)
        })

    }
    const signInWithGithub = () => {
        const githubProvider = new GithubAuthProvider()
        signInWithPopup(auth, githubProvider)
            .then(result => {
           setUser(result.user)
            })
           
    }
    
  const handleRegistraton = e => {
    console.log(email, password)
    e.preventDefault();
  }
  const handleEmailChange = e => {
    setEmail(e.target.value);
  }
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  }
    
    useEffect( () => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
        });
        return () => unsubscribed;
    },[])
    
    const logOut = () => {
        signOut(auth)
        .then(() => { })
    }
    return {
        user,
        logOut,
        signInUsingGoogle,
        signInWithGithub,
        handleRegistraton,
        handleEmailChange,
        handlePasswordChange
    }
};

export default useFirebase;