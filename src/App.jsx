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

  return (
    <div>
      {!currentUser ? (
        <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-purple-500 to-pink-500">
          <h1 className="text-5xl font-serif text-white hover:text-yellow-300 cursor-pointer transition duration-300 transform hover:rotate-12">Firebase Authentication</h1>

          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12">
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4 transform hover:scale-105 transition duration-300">
              <div className="bg-blue-200 hover:bg-blue-300 p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
                <Signup />
                <div className="text-center mt-4">
                  <p className="text-gray-700 text-sm">Don't have an account yet?</p>
                  <p className="text-gray-700 text-sm">Sign up now!</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4 transform hover:scale-105 transition duration-300">
              <div className="bg-yellow-200 hover:bg-yellow-300 p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
                <Signin />
                <div className="text-center mt-4">
                  <p className="text-gray-700 text-sm">Forgot your password?</p>
                  <p className="text-gray-700 text-sm">Reset it here!</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4 transform hover:scale-105 transition duration-300">
              <div className="bg-green-200 hover:bg-green-300 p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
                <PasswordReset />
                <div className="text-center mt-4">
                  <p className="text-gray-700 text-sm">Lost access to your account?</p>
                  <p className="text-gray-700 text-sm">Regain access now!</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4 transform hover:scale-105 transition duration-300">
              <div className="bg-pink-200 hover:bg-pink-300 p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
                <SocialLogin />
                <div className="text-center mt-4">
                  <p className="text-gray-700 text-sm">Or sign in with</p>
                  <p className="text-gray-700 text-sm">your social media account</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-400 to-pink-500">
          <div className="bg-white w-full max-w-xl p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome, {currentUser.email}</h1>
            <div className="w-full">
              <CrudApp />
            </div>
            <div className="mt-6 text-center">
              <Signout />
            </div>
          </div>
        </div>


      )}
    </div>
  );
}

export default App;
