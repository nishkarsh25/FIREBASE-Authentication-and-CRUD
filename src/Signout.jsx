import React from 'react';
import { auth } from './firebase';

function Signout() {
  const handleSignout = async () => {
    try {
      await auth.signOut();
      alert('User signed out successfully!');
    } catch (error) {
      alert(error.message);
    }
  };

  
}

