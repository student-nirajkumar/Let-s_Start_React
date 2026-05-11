import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users = [
    {
      img: 'https://media.istockphoto.com/id/2042526830/photo/successful-businesswoman-using-laptop-working-in-office-business-technology-corporate-concept.jpg?s=612x612&w=0&k=20&c=-NJyxcMesUAKzzPwoHXC10ZuBHPGa1dRp1gFl2T37o8=',
      intro: '',
      tag: 'satisfied'
    },
    {
      img: 'https://img.magnific.com/free-photo/smiling-businesswoman-typing-laptop-sitting-cafe_197531-340.jpg?semt=ais_hybrid&w=740&q=80',
      intro: '',
      tag: 'Underserved'
    },
    {
       img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
        intro: '',
        tag: 'Underbanked'
    }
  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App