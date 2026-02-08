import express from "express";
import {todoController} from "./todo.controller";
const router = express.Router();

router.get("/tasks", todoController.tasks);
router.post("/tasks", todoController.tasksPost);

router.get("/tasks/:id", todoController.tasksUnique);
router.put("/tasks/:id", todoController.tasksUniqueUpdate);
router.delete("/tasks/:id", todoController.tasksUniqueDelete);

export {
    router as todoRoutes
};