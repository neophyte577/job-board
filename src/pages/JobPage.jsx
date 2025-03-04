import React, {useEffect} from 'react'
import {useParams, useLoaderData, useNavigate} from 'react-router-dom'
import {FaArrowLeft, FaMapMarker} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {toast} from 'react-toastify'

const JobPage = ({deleteJob}) => {

  useEffect(() => {
    document.title = 'Union Job Board';
  }, []);

  const navigate = useNavigate();
  const {id} = useParams();
  const job = useLoaderData();

  const onDeleteClick = (jobId) => {
    const confirm = window.confirm('Are you surrrre?')

    if (!confirm) return;

    deleteJob(jobId);

    toast.success('Target elemonaded 💀')

    navigate('/jobs')
  }

  return (
    <>
      <section>
            <div className="container m-auto py-6 px-6 bg-cream">
              <Link
                to="/jobs"
                className="text-unionRed hover:text-deepUnionRed flex font-semibold items-center"
              >
                <FaArrowLeft className='mr-2' /> Back to Job Listings
              </Link>
            </div>
          </section>

          <section className="bg-blushClay">
            <div className="container m-auto py-10 px-6">
              <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                <main>
                  <div
                    className="bg-red-50 p-6 rounded-lg shadow-md text-center md:text-left"
                  >
                    <div className="text-gray-500 mb-4">{job.type}</div>
                    <h1 className="text-3xl font-bold mb-4">{job.title} </h1>
                    <div
                      className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
                    >
                      <FaMapMarker
                        className="text-orange-700 mr-1"
                      />
                      <p className="text-orange-700">{job.location}</p>
                    </div>
                  </div>

                  <div className="bg-red-50 p-6 rounded-lg shadow-md mt-6">
                    <h3 className="text-unionRed text-lg font-bold mb-6">
                      Job Description
                    </h3>

                    <p className="mb-4">{job.description}</p>

                    <h3 className="text-unionRed text-lg font-bold mb-2">Salary</h3>

                    <p className="mb-4">{job.salary} / Year</p>
                  </div>
                </main>

                <aside>
                  <div className="bg-red-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-6">Organization Info</h3>

                    <h2 className="text-2xl">{job.org.name}</h2>

                    <p className="my-2">{job.org.description} </p>

                    <hr className="my-4" />

                    <h3 className="text-xl">Contact Email:</h3>

                    <p className="my-2 bg-red-50 p-2 font-bold">{job.org.email}</p>

                    <h3 className="text-xl">Contact Phone:</h3>

                    <p className="my-2 bg-red-50 p-2 font-bold">{job.org.phone}</p>
                  </div>

                  <div className="bg-red-50 p-6 rounded-lg shadow-md mt-6">
                    <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                    <Link
                      to={`/edit-job/${job.id}`}
                      className="bg-paleHoney hover:bg-[#F5D79B] text-black text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                      >Edit Job</Link>
                    <button
                      onClick={() => onDeleteClick(job.id)}
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                    >
                      Delete Job
                    </button>
                  </div>
                </aside>
              </div>
            </div>
          </section>      
    </>
  )
};

const jobLoader = async ({params}) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  if (!res.ok) {
      throw new Error(`Network response was NOT okay: ${res.statusText}`);
  }
  const contentType = res.headers.get('content-type');
  if (!contentType || !contentType.includes('application/json')) {
      throw new TypeError("Received non-JSON response");
  }
  const data = await res.json();
  return data;
}

export {JobPage as default, jobLoader};