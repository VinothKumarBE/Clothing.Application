
// import {useEffect} from 'react';
// // import { getRedirectResult } from 'firebase/auth';
// import { getRedirectResult } from 'firebase/auth';
import  {  
           signInWithGooglePopup,
        //    signInWithGoogleRedirect,
           createUserDocumentFromAuth, }
           from '../../utils/firebase/firebase.utils';
           import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
//import auth from '../../utils/firebase/firebase.utils'  
//import {auth} from '../../utils/firebase/firebase.utils'    
    

const Authentication = () => {

    
    //   useEffect(  ()  => {
    //     async function fetchData() {
    //         try{
    //             const response =  await getRedirectResult(auth);
    //             console.log(response);
    //             if(response){
    //                 const userDocRef = await  createUserDocumentFromAuth(response.user);
                  
    //             }
    //         }catch(error){
    //             console.log(error);
    //         }
          
           
    //     };
    //     fetchData();
      
      
     
    //    }, [] );


    const logGoogleUser = async () =>{
        const { user } = await signInWithGooglePopup();
        const userDocRef = await  createUserDocumentFromAuth(user)
       // console.log(response)
       }; 
   
    return(
<div>
    <h1>HAi iam a Sign in</h1>
    <button on onClick={logGoogleUser}>
        signInWithGooglePopup
    </button>
    <SignUpForm/>
   
    
    </div>
    )
}
export default Authentication