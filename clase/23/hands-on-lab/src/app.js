import express from 'express';
import UserRouter from './routes/userRouter.js';
import SessionRouter from './routes/sessionRouter.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const userRouter = new UserRouter();
app.use('/users', userRouter.getRouter());

const sessionRouter = new SessionRouter();
app.use('/session', sessionRouter.getRouter());

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Start Server in Port ${PORT}`);
});