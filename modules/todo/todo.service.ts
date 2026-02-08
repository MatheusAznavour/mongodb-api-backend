import { ObjectId } from "mongodb";
import { db } from "../../config/database";

const collection = db.database.collection("tasks");

async function showTasks() {
    const result = collection.find({}).toArray();
    return result;
}

async function showUniqueTasks(id: string) {
    const result = await collection.findOne({_id: new ObjectId(id)})
    return result
}

async function createTask(title: string, completed: boolean) {
    const date = new Date();
    const doc = {title, completed, date};
    const result = await collection.insertOne(doc);

    return result;
};

async function updateTask(id: string, title: string, completed: boolean) {
    const date = new Date();
    const doc = {title, completed, date};
    const result = collection.updateOne({_id: new ObjectId(id)}, {$set: doc});
    return result;
};

async function deleteTask(id: string) {
    const result = await collection.deleteOne({_id: new ObjectId(id)});
    return result
};

export const todoService = {
    showTasks,
    showUniqueTasks,
    createTask,
    updateTask,
    deleteTask
}