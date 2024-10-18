import {useState} from 'react'
import { createUser } from "../auth/auth";
import AuthContent from "../components/UserAuthentication/Auth/AuthContent";
import LoadingOverlay from '../components/UserAuthentication/UI/LoadingOverlay';


function SignupScreen() {
   const [isAuthenticating, setIsAuthenticating] = useState(false)

  async function signupHandler({email, password}){
      setIsAuthenticating(true)
      await createUser(email, password)
      setIsAuthenticating(false)
   }
   if(isAuthenticating){
      return <LoadingOverlay message='Creating user...'/>
   }

  return <AuthContent onAuthenticate={signupHandler}/>;
}

export default SignupScreen;