import 'dotenv/config';
import connectDB from "./db/connection";


const PORT : number = 5000 || process.env.PORT 
connectDB()
    .then(() => {
        app.on('error', (error : any) =>{
            console.log(`Error starting the server: ${error.message}`)
        })

        app.listen( PORT, () =>{
            console.log(`Server started at http://localhost:${PORT}`)
        })
    })
    .catch((err : any) => {
        console.log(`Error connecting to the database: ${err.message}`)
        process.exit(1)
    })


import app from './app';



