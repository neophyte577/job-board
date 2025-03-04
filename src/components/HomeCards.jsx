import React from 'react'
import Card from './Card.jsx'
import { Link } from 'react-router-dom'

const HomeCards = () => {
  return (
    <>
      <section className="py-4">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <Card bg='bg-[#F8F1E3]'>
              <h2 className="text-2xl font-bold">For Job-Seekers</h2>
              <p className="mt-2 mb-4">
                Browse our jobs and start your union career today
              </p>
              <Link
                to="/jobs"
                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
              >
                Browse Jobs
              </Link>                
            </Card>
            <Card bg='bg-blushClay'>
              <h2 className="text-2xl text-deepUnionRed font-bold">For Unions and Employers</h2>
              <p className="mt-2 mb-4">
                Post your job to find the perfect labor for the role
              </p>
              <Link
                to="/add-job"
                className="inline-block bg-lightUnionRed text-cream rounded-lg px-4 py-2 hover:bg-unionRed"
              >
                Add Job
              </Link>                
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeCards