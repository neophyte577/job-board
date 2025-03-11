import React, {useEffect} from 'react'
import Hero from '../components/Hero.jsx';
import HomeCards from '../components/HomeCards.jsx'
import JobListings from '../components/JobListings.jsx'
import ViewAllJobs from '../components/ViewAllJobs.jsx'

const HomePage = () => {
  useEffect(() => {
    document.title = 'Union Job Board';
  }, []);
  return (
    <>
      <section className='bg-red-50'>
        <Hero />
        <HomeCards />
        <JobListings isHome={true}/>
        <ViewAllJobs />
        <footer className='bg-red-50'>
          <h3 className='text-unionRed text-center font-semibold'>© 1925 - 2025</h3>
        </footer>
      </section>
    </>
  )
}

export default HomePage