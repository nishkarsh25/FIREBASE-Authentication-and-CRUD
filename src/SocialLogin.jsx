import React from 'react';
import { auth } from './firebase';
import firebase from 'firebase/compat/app';

function SocialLogin() {
    const handleGoogleLogin = async () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      try {
        const result = await auth.signInWithPopup(provider);
        const user = result.user;
        if (user.metadata.creationTime === user.metadata.lastSignInTime) {
          alert('Signed up with Google!');
        } else {
          alert('Logged in with Google!');
        }
      } catch (error) {
        alert(error.message);
      }
    };
  
    const handleFacebookLogin = async () => {
      const provider = new firebase.auth.FacebookAuthProvider();
      try {
        const result = await auth.signInWithPopup(provider);
        const user = result.user;
        if (user.metadata.creationTime === user.metadata.lastSignInTime) {
          alert('Signed up with Facebook!');
        } else {
          alert('Logged in with Facebook!');
        }
      } catch (error) {
        alert(error.message);
      }
    };
  
    
  }


