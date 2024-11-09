import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
// ROUTE IMPORTS
import projectRouter from './routes/projectRoutes';
import taskRouter from './routes/taskRouter';
import searchRouter from './routes/searchRoutes';
import userRouter from './routes/userRoutes';
import teamRouter from './routes/teamRoutes';

// CONFIGURATION
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// ROUTES
app.use('/projects', projectRouter);
app.use("/tasks", taskRouter);
app.use('/search', searchRouter)
app.use('/users', userRouter)
app.use('/teams', teamRouter)

// SERVER
const PORT = Number(process.env.PORT) || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
