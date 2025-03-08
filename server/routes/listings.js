import express from 'express';
import { getJob, getJobs, createJob, updateJob, deleteJob } from '../controllers/listingController.js';

const router = express.Router();

// GET jobs
router.get('/', getJobs);

// GET single job by id
router.get(`/:id`, getJob);

// CREATE new job
router.post('/', createJob);

// PUT 
router.put('/:id', updateJob);

// DELETE 
router.delete('/:id', deleteJob);

export default router;