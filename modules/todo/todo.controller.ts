import {Request, Response} from "express";
import {todoHelper} from "./todo.helper";
import {todoService} from "./todo.service";

async function tasks(req: Request, res: Response) {
    const result = await todoService.showTasks();
    res.status(200).json(result)
};

async function tasksPost(req: Request, res: Response) {
    const {title, completed} = req.body;

    const isValid = await todoHelper.validateTodoInput(title, completed);
    if(!isValid.success){
        return res.status(400).json({isValid})
    }

    await todoService.createTask(title, completed);

    res.status(200).json({
        title,
        completed
    })
};

async function tasksUnique(req: Request, res: Response) {
    const id =  req.params.id;
    const stringId: string = id?.toString() || "";
    const result = await todoService.showUniqueTasks(stringId);
    res.status(200).json(result)
};


async function tasksUniqueUpdate(req: Request, res: Response) {
    const id = req.params.id;
    const stringId = id?.toString() || "";
    const {title, completed} = req.body;

    const isValid = await todoHelper.validateTodoInput(title, completed);
    if(!isValid.success){
        return res.status(400).json({isValid})
    }

    const result = await todoService.updateTask(stringId, title, completed);

    res.status(200).json(result);
};


async function tasksUniqueDelete(req: Request, res: Response) {
    const id = req.params.id;
    const stringId = id?.toString() || "";
    const result = await todoService.deleteTask(stringId);
    res.status(200).json(result);
};

export const todoController = {
    tasks,
    tasksPost,
    tasksUnique,
    tasksUniqueUpdate,
    tasksUniqueDelete
};