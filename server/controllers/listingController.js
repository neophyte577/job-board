import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jobsFilePath = path.join(__dirname, '../jobs.json');
let jobs = JSON.parse(fs.readFileSync(jobsFilePath, 'utf-8')).jobs;

// @desc    get all jobs
// @route   GET /api/jobs
export const getJobs = (req, res, next) => {
    const limit = parseInt(req.query.limit);
    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(jobs.slice(0,limit));
    }
    
    res.status(200).json(jobs);
};

// @desc    get single job
// @route   GET /api/jobs/:id
export const getJob = (req, res, next) => {
    const id = req.params.id;
    // res.status(200).json(jobs.filter((job) => job.id === id));
    const job = jobs.find((job) => job.id === id);
    if (!job) {
        const error = new Error(`No such ID as ${id}`);
        error.status = 404;
        return next(error);    
    }
    res.status(200).json(job);
};

// @desc    create new job
// @route   POST /api/jobs
export const createJob = (req, res, next) => {
    console.log("Received body:", req.body);
    const newjob = {id: jobs.length + 1, title: req.body.title};

    if (!newjob.title) {
        const error = new Error(`WRONG. Needful of title!!!1`);
        error.status = 400;
        return next(error);  
    }

    jobs.push(newJob);
    res.status(201).json(jobs);
};

// @desc    modify existing job
// @route   PUT /api/jobs/:id
export const updateJob = (req, res, next) => {
    const id = req.params.id;
    const job = jobs.find((job) => job.id === id);

    if (!job) {
        const error = new Error(`No such ID as ${id}`);
        error.status = 404;
        return next(error);  
    }

    job.title = req.body.title;
    res.status(200).json(jobs);
};

// @desc    delete job
// @route   DELETE /api/jobs/:id
export const deleteJob = (req, res, next) => {
    const id = req.params.id;
    const job = jobs.find((job) => job.id === id);

    if (!job) {
        const error = new Error(`No such ID as ${id}`);
        error.status = 404;
        return next(error);  
    }

    jobs = jobs.filter((job) => job.id != id);
    res.status(200).json(jobs);
};