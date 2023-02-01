import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';  
 import FormInput from '../form-input/form-input.component'
import './sign-up-form.styles.scss'; 
import Button from "../button/button.component";



const defaultFormFields = {
     displayName: '',
     email:'',
     password:'',
     confirmPassword:''

}

const SignUpForm = () =>{
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword} = formFields;

  //  
//  const  { setCurrentUser } = useContext(UserContext);

  //const  val = useContext(UserContext);


// console.log(formFields);
const resetFormFields = () =>{
    setFormFields(defaultFormFields);
}

 const handleSubmit = async (event) =>{
event.preventDefault();
if(password !== confirmPassword){
    alert("password does not match")
    return;
}try{
const {user} = await createAuthUserWithEmailAndPassword(email, password); 
// setCurrentUser(user);
await createUserDocumentFromAuth(user,{displayName});
resetFormFields();

}catch(error) {

    if(error.code === 'auth/email-already-in-use'){
        alert('cannot create users,email already in use')
    }else{
        console.log('user creation encountered error', error);
    }
  

}


 };

  const handleChange = (event) =>{
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value})

  };


    return(
        <div className="sign-up-container">
           <h2>Dont't have an account?</h2>
            <span>Signup up with  your email and password</span>

            <form onSubmit={handleSubmit}>

<FormInput
type="text"
label="Display Name"
 required 
 onChange={handleChange}
  name="displayName"  
  value={displayName} 
  />

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


<FormInput  
type="password" 
label="Confirm Password"
required 
onChange={handleChange}
 name="confirmPassword" 
 value={confirmPassword}
  />

<Button buttonType='google' type="submit">Sign up</Button>


            </form>
        </div>
    )
}
export default SignUpForm;