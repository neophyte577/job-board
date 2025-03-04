import React, {useEffect} from 'react'
import Hero from '../components/Hero.jsx';
import HomeCards from '../components/HomeCards.jsx'
import JobListings from '../components/JobListings.jsx'

const JobsPage = () => {
  useEffect(() => {
    document.title = 'Union Job Board';
  }, []);
  return <section className='bg-red-50 px-4 py-6'>
    <JobListings />
  </section>
}

export default JobsPage