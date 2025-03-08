import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const jobsFilePath = path.join(__dirname, '../jobs.json');

// @desc    get all jobs
// @route   GET /api/jobs
export const getJobs = (req, res, next) => {
    fs.readFile(jobsFilePath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        const jobs = JSON.parse(data).jobs;
        const limit = parseInt(req.query.limit);
        if (!isNaN(limit) && limit > 0) {
            return res.status(200).json(jobs.slice(0, limit));
        }
        res.status(200).json(jobs);
    });
};

// @desc    get single job
// @route   GET /api/jobs/:id
export const getJob = (req, res, next) => {
    const id = req.params.id;
    fs.readFile(jobsFilePath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        const jobs = JSON.parse(data).jobs;
        const job = jobs.find((job) => job.id === id);
        if (!job) {
            const error = new Error(`No such ID as ${id}`);
            error.status = 404;
            return next(error);
        }
        res.status(200).json(job);
    });
};

export const createJob = (req, res, next) => {
    fs.readFile(jobsFilePath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        const jobs = JSON.parse(data).jobs;

        const { title, type, location, description, salary, org } = req.body;

        if (!title || !type || !location || !description || !salary || !org?.name || !org?.email) {
            return res.status(400).json({ error: "All required fields must be provided" });
        }

        // locate highest existing id and increment 
        const newId = jobs.length > 0 
            ? (Math.max(...jobs.map(job => Number(job.id))) + 1).toString() 
            : "1";

        const newJob = {
            id: newId,
            title,
            type,
            location,
            description,
            salary,
            org
        };

        jobs.push(newJob);

        fs.writeFile(jobsFilePath, JSON.stringify({ jobs }, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to save job' });
            }
            res.status(201).json({ message: "Job added successfully", job: newJob });
        });
    });
};

// @desc    Modify an existing job
// @route   PUT /api/jobs/:id
export const updateJob = (req, res, next) => {
    fs.readFile(jobsFilePath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        let jobs = JSON.parse(data).jobs;
        const id = req.params.id;
        const jobIndex = jobs.findIndex((job) => job.id === id);

        if (jobIndex === -1) {
            return res.status(404).json({ error: `No such job with ID ${id}` });
        }

        // Extract fields from request body
        const { title, type, location, description, salary, org } = req.body;

        // Ensure required fields are present
        if (!title || !type || !location || !description || !salary || !org?.name || !org?.email) {
            return res.status(400).json({ error: "All required fields must be provided" });
        }

        // Update the job with new data while preserving the ID
        jobs[jobIndex] = {
            ...jobs[jobIndex], // Preserve existing data
            title,
            type,
            location,
            description,
            salary,
            org
        };

        fs.writeFile(jobsFilePath, JSON.stringify({ jobs }, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to update job' });
            }
            res.status(200).json({ message: "Job updated successfully", job: jobs[jobIndex] });
        });
    });
};


// @desc    delete job
// @route   DELETE /api/jobs/:id
export const deleteJob = (req, res, next) => {
    fs.readFile(jobsFilePath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        let jobs = JSON.parse(data).jobs;
        const id = req.params.id;

        if (!jobs.find((job) => job.id === id)) {
            const error = new Error(`No such ID as ${id}`);
            error.status = 404;
            return next(error);
        }

        jobs = jobs.filter((job) => job.id !== id);

        fs.writeFile(jobsFilePath, JSON.stringify({ jobs }), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            res.status(200).json(jobs);
        });
    });
};
