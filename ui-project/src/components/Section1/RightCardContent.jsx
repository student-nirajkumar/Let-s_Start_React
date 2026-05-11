import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between text-black'>

      <h2 className='bg-white text-2xl font-bold rounded-full h-10 w-10 flex justify-center items-center'>
        {props.id + 1}
      </h2>

    <div className='mt-60'>
  <p className='text-lg leading-normal'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Mollitia, fugit.
  </p>
</div>

      <div className='flex justify-between'>
        <button className='bg-black text-white px-5 py-2 rounded-full'>
          {props.tag}
        </button>
      </div>

    </div>
  )
}

export default RightCardContent





