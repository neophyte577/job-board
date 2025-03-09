import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import jobs from './routes/requests.js';
import logger from './middleware/logger.js';
import { errorHandler, notFound } from './middleware/error.js';
import rateLimit from 'express-rate-limit'; 
import './middleware/reset.js';

const PORT = process.env.PORT || 8008;

// Get directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static('./dist'));

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger Middleware
app.use(logger);

// Rate Limiting Middleware
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 30 // 30 requests per windowMs
});

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Job Routes
app.use('/api/jobs', jobs);

// Apply rate limiter to all API routes
app.use('/api/', apiLimiter);

// Catch-all route for React Router
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Error Handler
app.use(errorHandler);
app.use(notFound);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
