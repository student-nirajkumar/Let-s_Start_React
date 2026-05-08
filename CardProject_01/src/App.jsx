import React from 'react'
import Card from './components/Card'

const App = () => {

  const jobs = [

  {
    company: "Google",
    role: "Frontend Developer",
    salary: "12 LPA",
    logo: "https://logo.clearbit.com/google.com"
  },

  {
    company: "Amazon",
    role: "Backend Developer",
    salary: "15 LPA",
    logo: "https://logo.clearbit.com/amazon.com"
  },

  {
    company: "Microsoft",
    role: "Full Stack Developer",
    salary: "18 LPA",
    logo: "https://logo.clearbit.com/microsoft.com"
  },

  {
    company: "Netflix",
    role: "React Developer",
    salary: "20 LPA",
    logo: "https://logo.clearbit.com/netflix.com"
  },

  {
    company: "Adobe",
    role: "UI Developer",
    salary: "14 LPA",
    logo: "https://logo.clearbit.com/adobe.com"
  }

]
  return (
    <div className='min-h-screen bg-gray-200 flex gap-5 flex-wrap p-5'>

      {
        jobs.map(function(elem, idx){

          return (
            <Card
              key={idx}
              company={elem.company}
              role={elem.role}
              salary={elem.salary}
              logo={elem.logo}
            />
          )

        })
      }

    </div>
  )
}

export default App