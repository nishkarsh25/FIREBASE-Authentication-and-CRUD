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

  return (
    <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8">Reset Password</h2>
      <form onSubmit={handlePasswordReset} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
        />
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default PasswordReset;
