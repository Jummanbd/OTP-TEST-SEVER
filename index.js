import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import connect from './database/conn.js';
import router from './router/route.js';
dotenv.config()
const app = express();

/** middlewares */
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');

const PORT = process.env.PORT


/** HTTP GET Request */
app.get('/', (req, res) => {
    res.status(201).json("Home GET Request");
});


/** api routes */
app.use('/api', router)

/** start server only when we have valid connection */
connect()
        app.listen(PORT, () => {
            console.log(`Server connected to http://localhost:${PORT}`);
        })

