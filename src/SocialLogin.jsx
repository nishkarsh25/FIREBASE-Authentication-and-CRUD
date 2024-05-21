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
  
    return (
      <div className="flex flex-col space-y-4">
        <button
          onClick={handleGoogleLogin}
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Sign in/Sign up with Google
        </button>
        <button
          onClick={handleFacebookLogin}
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Sign in/Sign up with Facebook
        </button>
      </div>
    );
  }


