import React, { useState } from 'react'
import { FaMapMarker } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const JobListing = ({job}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + '...';
  }

  return (
    <div className="bg-cream rounded-xl shadow-md relative">
        <div className="p-4">
        <div className="mb-6">
            <div className="text-gray-600 my-2">{job.type}</div>
            <h3 className="text-xl text-deepUnionRed font-bold mb-1">{job.title}</h3>
        </div>

        <div className="mb-2">
            {description}
            <button onClick={() => setShowFullDescription((prevState) => !prevState)} className="text-lightUnionRed ml-1 mb-3 hover:text-deepUnionRed">
              {showFullDescription ? 'Less' : 'More'}
            </button>
        </div>

        <h3 className="text-unionRed mb-3">{job.salary} / Year</h3>

        <div className="h-[1px] w-full bg-unionRed my-4"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="text-deepUnionRed mb-3">
            <FaMapMarker className='inline text-lg mb-1 mr-1' />
            {job.location}
            </div>
            <Link
            to={`/jobs/${job.id}`}
            className="h-[36px] bg-lightUnionRed hover:bg-unionRed text-cream px-4 py-2 rounded-lg text-center text-sm"
            >
            Read More
            </Link>
        </div>
        </div>
    </div>          
  )
}

export default JobListing