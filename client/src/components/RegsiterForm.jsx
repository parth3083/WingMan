import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import axios from "../config/axios"
import { useNavigate } from "react-router-dom"
import { UserContext } from '../context/user.context';

function RegisterForm() {
  const {setUser}= useContext(UserContext)
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = data => {
     try {
       axios.post("/users/register", data).then((res) => {
         console.log(res.data);
         localStorage.setItem("token", res.data.token);
         setUser(res.data.user);
         navigate('/')
         reset();
       }).catch((err) => {
         console.log(err);
      })
     } catch (error) {
      console.log(error)
     }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          {...register('email', { required: true })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500 text-xs italic">Please enter your email.</p>}
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          {...register('password', { required: true })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
        />
        {errors.password && <p className="text-red-500 text-xs italic">Please enter your password.</p>}
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Register
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;