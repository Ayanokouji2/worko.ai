import express from 'express'
import userRouter from './router/user.routes';

const app = express()

app.use(express.json())


app.use('/worko/user', userRouter)



export default app;