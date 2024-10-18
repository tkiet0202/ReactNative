import {useState} from 'react';
import LoadingOverlay from '../components/UserAuthentication/UI/LoadingOverlay';
import { login } from '../auth/auth';
import AuthContent from '../components/UserAuthentication/Auth/AuthContent';



function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  async function loginHandler({email, password}){
      setIsAuthenticating(true)
      await login(email, password)
      setIsAuthenticating(false)
   }
   if(isAuthenticating){
      return <LoadingOverlay message='Logging on in...'/>
   }

  return <AuthContent isLogin onAuthenticate={loginHandler}/>;
}

export default LoginScreen;