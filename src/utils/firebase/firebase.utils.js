import { initializeApp } from 'firebase/app'

import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth'
import {getFirestore,doc,getDoc,setDoc } from 'firebase/firestore'





// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApZOHMq0jJ_OgDhSwMIa0nneJD3KDDRL0",
    authDomain: "crwn-clothing-db-3ca2d.firebaseapp.com",
    projectId: "crwn-clothing-db-3ca2d",
    storageBucket: "crwn-clothing-db-3ca2d.appspot.com",
    messagingSenderId: "1005158624782",
    appId: "1:1005158624782:web:33857259ad3e36d6c7165f"
  };

  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  
  const  googleProvider = new GoogleAuthProvider();
 
      googleProvider.setCustomParameters({
      prompt: "select_account"
  });
  export const  auth = getAuth();
  console.log("validate auth"  + JSON.stringify (auth));
  export  const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

  export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

//pass the data form a data base
  export const db = getFirestore();

  export const  createUserDocumentFromAuth = async (userAuth, additionalInformation ={} ) => {
    if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
   
    const userSnapShot = await getDoc(userDocRef);

if(!userSnapShot.exists()){
    const {displayName, email} =userAuth;
    const createdAt = new Date();
    
    try{
          await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...additionalInformation
          });
      }     catch(error){
            console.log('error creating the user', error.message);
    }
}

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
   return await createUserWithEmailAndPassword(auth, email, password);

} 