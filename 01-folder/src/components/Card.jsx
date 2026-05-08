import React from 'react'

const Card = () => {
  return (
    <div className="card">

      <div className="top">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
          alt="panda"
        />

        <button className='btn'>Save</button>
      </div>

      <div className="center">
        <h2>Panda Card</h2>

        <p>
          Beautiful React JS card design.
        </p>
      </div>

    </div>
  )
}

export default Card


