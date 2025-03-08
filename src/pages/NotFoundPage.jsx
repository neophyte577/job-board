import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {

  useEffect(() => {
    document.title = '⚠️WRONG⚠️';
  }, []);

  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <FaExclamationTriangle className='text-red-700 text-6xl mb-4'/>
      <i className="fas fa-exclamation-triangle text-red-400 fa-4x mb-4"></i>
      <h1 className="text-6xl font-bold mb-4">404 - Not Found</h1>
      <p className="text-2xl mb-4 font-semibold">¡Página no existe!</p>
      <p className="text-xl">With this failed navigation, the thread of prophecy is severed.</p>
      <p className="text-xl mb-4">Click below to restore the weave of fate, or persist in the doomed world you have created.</p>
      <Link
        to="/"
        className="text-white bg-lightUnionRed hover:bg-unionRed rounded-md px-3 py-2 mt-3"
        >Go Back</Link>
    </section>
  )

}

export default NotFoundPage