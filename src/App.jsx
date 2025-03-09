import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import React from 'react';
import HomePage from './pages/HomePage.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import JobsPage from './pages/JobsPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import JobPage, {jobLoader} from './pages/JobPage.jsx'
import AddJobPage from './pages/AddJobPage.jsx'
import EditJobPage from './pages/EditJobPage.jsx'
import TestPage from './pages/TestPage.jsx'

const App = () => {

  // Add Job
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })
  }

  // Delete Job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE'
    });
      return;
  };

  // Update Job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    });
    return;
  };
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/jobs' element={ <JobsPage /> } />
        <Route path='/jobs/:id' element={ <JobPage deleteJob={deleteJob}/> } loader={jobLoader} errorElement={<NotFoundPage />} />
        <Route path='/add-job' element={ <AddJobPage addJobSubmit={addJob} /> } />
        <Route path='/edit-job/:id' element={ <EditJobPage updateJobSubmit={updateJob} /> } loader={jobLoader} errorElement={<NotFoundPage />} />
        <Route path='/test' element={ <TestPage /> } />
        <Route path='*' element={ <NotFoundPage /> } />
      </Route>
    )
  );

  return <RouterProvider router={router} />;

};

export default App