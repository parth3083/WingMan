import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

function Login() {
  return (
    <div className="flex flex-col font-pop items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <h1 className="text-4xl font-bold text-white mb-6">Login</h1>
      <LoginForm />
      <p className="text-white mt-4">
        Don't have an account?{' '}
        <Link to="/register" className="text-yellow-300 underline">
          Create one
        </Link>
      </p>
    </div>
  );
}

export default Login;