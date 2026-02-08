import express, {Request, Response} from "express"
import {todoRoutes} from "./modules/todo/todo.routes"; 

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/", todoRoutes);

app.listen(process.env.SERVER_PORT, ()=>{console.log(`Server running at http://localhost:${process.env.SERVER_PORT}`)})