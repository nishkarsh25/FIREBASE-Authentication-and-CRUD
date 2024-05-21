import React, { useState } from 'react';
import { auth } from './firebase';

function PasswordReset() {
  const [email, setEmail] = useState('');

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      await auth.sendPasswordResetEmail(email);
      alert('Password reset email sent!');
    } catch (error) {
      alert(error.message);
    }
  };

  
}


