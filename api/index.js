import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import router from './routes/router.js';
import dotenv from 'dotenv';

dotenv.config();
console.log('GEMINI_API_KEY:', process.env.GEMINI_API_KEY); 

const app = express();

app.use(cors({
  origin: process.env.REACT_FRONTEND_URL,
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());
app.use('/api', router);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});