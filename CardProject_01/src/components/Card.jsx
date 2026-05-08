import React from 'react'

const Card = (props) => {
  return (
    <div className='w-72 bg-white rounded-xl shadow-lg overflow-hidden'>

      <img
        className='w-full h-40 object-cover'
        src='https://images.unsplash.com/photo-1498050108023-c5249f4df085'
        alt=''
      />

      <div className='p-4'>

        <h1 className='text-2xl font-bold'>
          {props.company}
        </h1>

        <p className='text-gray-600 mt-2'>
          {props.role}
        </p>

        <h2 className='text-green-600 font-semibold mt-2'>
          {props.salary}
        </h2>

        <button className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg'>
          Apply
        </button>

      </div>

    </div>
  )
}

export default Card