import express from 'express';
import cookieParser from 'cookie-parser';
import router from './routes/router.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
console.log('GEMINI_API_KEY:', process.env.GEMINI_API_KEY); 

const app = express();

app.use(cors({
  origin: 'https://chatbotapplication-ykgu.vercel.app',
  credentials: true, 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(cookieParser());
app.use('/api', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});