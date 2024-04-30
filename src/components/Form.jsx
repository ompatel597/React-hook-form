import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {

    const {
        register,
        handleSubmit,
        formState: {errors},

    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
    }


  return (
    <>
    

<form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mt-[10%] mx-auto">
<div className="mb-5">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-red-900 ">name :</label>
    <input {...register('name')} type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your name"  />
  </div>
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-red-900 ">Email :</label>
    <input {...register('email')} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your email"  />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password :</label>
    <input {...register('password', {required: true})} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='Enter password'  />
    {errors.password && <span>password is required</span>}
  </div>
  
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  ">Submit</button>
</form>

    </>
  )
}

export default Form