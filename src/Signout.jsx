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

  return (
    <button
      onClick={handleSignout}
      className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
    >
      Sign Out
    </button>
  );
}

