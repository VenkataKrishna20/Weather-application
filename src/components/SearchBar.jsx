import React from 'react'
import {useForm} from 'react-hook-form';
function SearchBar({onSearch}) {

  let {register, handleSubmit}=useForm();
  
  const onFormSubmit=({city})=>{
    onSearch(city)
  }

  return (
    <div>
      <form  className='container w-75 mx-auto mt-4' onSubmit={handleSubmit(onFormSubmit)} >
      <input type="text" {...register('city') } placeholder='Enter City' className='forn-control w-50 container ml-10' />
      <button type="submit" className='btn btn-success '>Search</button>
      </form>
    </div>
  )
}

export default SearchBar;
