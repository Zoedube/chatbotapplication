import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import router from './routes/router.js';
import dotenv from 'dotenv';

dotenv.config();
console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY); // Debug
const app = express();

app.use(cors({
  origin: 'http://localhost:3001',
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());
app.use('/api', router);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});