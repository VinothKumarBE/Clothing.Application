import { useState} from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth,signInAuthWithEmailAndPassword } from '../../utils/firebase/firebase.utils';  
 import FormInput from '../form-input/form-input.component'
import './sign-in-form.styles.scss'; 
import Button from "../button/button.component";
//import { UserContext} from '../../contexts/user.context'


const defaultFormFields = {
   
     email:'',
     password:'',
  

}

const SignInForm = () =>{
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {  email, password } = formFields;
 
// console.log(formFields);
// const { setCurrentUser } = useContext(UserContext);

const resetFormFields = () =>{
    setFormFields(defaultFormFields);
};
const signInWithGoogle = async () =>{
  signInWithGooglePopup();
  // setCurrentUser(user);
 
 // console.log(response)
 }; 

  const handleSubmit = async (event) =>{
  event.preventDefault();
try{
const {user} = await signInAuthWithEmailAndPassword(email, password);
// console.log(response)
// setCurrentUser(user);
resetFormFields();
}catch(error) {
  switch(error.code) {
    case 'auth/wrong-password':
      alert('incorrect password for email or password')
      break;
    case 'auth/user-not-found':
        alert('no user associated with this  email');
        break;
    default:
        console.log(error);
  }
  // if (error.code === "auth/wrong-password") {
  //   alert('incorrect password for email or password')
  // }else if ()
  // console.log(error);
}
};

  const handleChange = (event) =>{
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value})

  };


    return(
        <div className="sign-up-container">
           <h2>Already have an account?</h2>
            <span>Signup in with  your email and password</span>
            <form onSubmit={handleSubmit}>


<FormInput 
type="email" 
label="Email"
required 
onChange={handleChange} 
 name="email"
  value={email} 
  />


<FormInput 
type="password"
label="Password"
 required
  onChange={handleChange}
   name="password"
    value={password} 
    />


<div className="buttons-container">

<Button  type="submit">Sign In</Button>
<Button buttonType='google' type="button"onClick={signInWithGoogle}>Google Sign In</Button>
</div>

            </form>
        </div>
    )
}
export default SignInForm;