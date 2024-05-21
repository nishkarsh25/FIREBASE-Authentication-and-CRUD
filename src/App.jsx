import React from 'react';
import Signup from './Signup';
import Signin from './Signin';
import PasswordReset from './PasswordReset';
import SocialLogin from './SocialLogin';
import Signout from './Signout';
import { useAuth } from './AuthProvider';
import CrudApp from './CrudApp';

function App() {
  const { currentUser } = useAuth();

  
}


