
// import {useEffect} from 'react';
// // import { getRedirectResult } from 'firebase/auth';
// import { getRedirectResult } from 'firebase/auth';
// import  {  
//            signInWithGooglePopup,
//         //    signInWithGoogleRedirect,
//            createUserDocumentFromAuth, }
//            from '../../utils/firebase/firebase.utils';
           import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
           import SignInForm from  '../../components/sign-in-form/sign-in-form.component'
//import auth from '../../utils/firebase/firebase.utils'  
//import {auth} from '../../utils/firebase/firebase.utils'    
import './authentication.styles.scss'    

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


    
   
    return(
<div className='authentication-container'>
    {/* <h1>HAi iam a Sign in</h1> */}
    <SignInForm />
    <SignUpForm/>
   
    
    </div>
    )
}
export default Authentication