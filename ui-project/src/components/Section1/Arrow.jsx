import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const Arrow = () => {
  return (
    <div className='flex justify-start p-4'>
      <ArrowUpRight 
        size={70}
        strokeWidth={3}
        className='text-black'
      />
    </div>
  )
}

export default Arrow