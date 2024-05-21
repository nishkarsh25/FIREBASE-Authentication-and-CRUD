import React, { useState } from 'react';
import { auth } from './firebase';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      
      if (user.emailVerified) {
        alert('User signed in successfully!');
      } else {
        await auth.signOut();
        alert('Please verify your email before signing in.');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  
}


