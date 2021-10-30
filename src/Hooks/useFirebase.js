import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged,signOut } from "firebase/auth";
import InitializeAuthentication from "../Firebase/firebase.init";


InitializeAuthentication()

const useFirebase = () =>{

    const[user,setUser] = useState({});
    const[error,setError]=useState('');
    const [isLoading,setIsLoading]=useState(true)

    const auth =getAuth()
    const googleProvider = new GoogleAuthProvider()

    const signInUsingGoogle = ()=>{
        setIsLoading(true)
       return signInWithPopup(auth, googleProvider)
        
        .catch(error => {
            setError(error.message)
        })
        .finally(()=>setIsLoading(false)) 
    }
    const logout =()=>{
        setIsLoading(true)
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .finally(()=>setIsLoading(false))
    }
    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })
    },[])


    return {
        user,
        error,
        signInUsingGoogle,
        logout,
        isLoading
    }
}
export default useFirebase;