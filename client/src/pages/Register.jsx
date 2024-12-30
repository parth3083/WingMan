import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/RegsiterForm';


function Register() {
  return (
    <div className="flex flex-col font-pop items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <h1 className="text-4xl font-bold text-white mb-6">Register</h1>
      <RegisterForm />
      <p className="text-white mt-4">
        Already have an account?{' '}
        <Link to="/login" className="text-yellow-300 underline">
          Login
        </Link>
      </p>
    </div>
  );
}

export default Register;