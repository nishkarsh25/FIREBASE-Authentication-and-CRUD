import React, { useState } from 'react';
import { auth } from './firebase';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      await userCredential.user.sendEmailVerification();
      alert('User registered successfully! Please check your email for verification.');
      setEmail('');
      setPassword('');
    } catch (error) {
      alert(error.message);
    }
  };

  
}


