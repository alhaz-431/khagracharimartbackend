import express, { Application } from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes';

const app: Application = express();

app.use(cors({
  origin: '*', // পরে frontend deploy হলে specific URL বসাবে
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Khagrachari Online Mart API is running');
});

app.use('/api/auth', authRoutes);

export default app;