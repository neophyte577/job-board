import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jobsFilePath = path.join(__dirname, '..', 'jobs.json');
const backupJobsFilePath = path.join(__dirname, '..', 'backup', 'default_jobs.json');

export const resetData = () => {
    console.log("Reset function triggered at", new Date().toISOString());
    fs.copyFile(backupJobsFilePath, jobsFilePath, (err) => {
        if (err) console.error('Error resetting data:', err);
        else console.log('Data reset to initial conditions.');
    });
};

setInterval(resetData, 1.5 * 60 * 1000);