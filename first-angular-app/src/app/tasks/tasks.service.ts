import { Injectable } from "@angular/core";
import { Task } from "./task/task.component";

@Injectable({ providedIn: 'root' })
export class TaskService {
    private ipsum: Task[] = [
        {
            id: "t1",
            userID: "u1",
            title: "XIU PIXAU",
            summary: "pinxiling binxqao hao, hatakakari, mussará tarafadorti!",
            dueDate: new Date("2024-05-31")
        }, {
            id: "t2",
            userID: "u2",
            title: "XIU PIXAU",
            summary: "pinxiling binxqao hao, hatakakari, mussará tarafadorti!",
            dueDate: new Date("2024-05-31")
        }, {
            id: "t3",
            userID: "u3",
            title: "XIU PIXAU",
            summary: "pinxiling binxqao hao, hatakakari, mussará tarafadorti!",
            dueDate: new Date("2024-05-24")
        }, {
            id: "t4",
            userID: "u4",
            title: "XIU PIXAU",
            summary: "pinxiling binxqao hao, hatakakari, mussará tarafadorti!",
            dueDate: new Date("2024-02-31")
        }, {
            id: "t5",
            userID: "u5",
            title: "XIU PIXAU",
            summary: "pinxiling binxqao hao, hatakakari, mussará tarafadorti!",
            dueDate: new Date("2024-05-01")
        }
    ];

    constructor() {
        const tasks = localStorage.getItem('tasks');

        if (tasks) {
            this.ipsum = JSON.parse(tasks);
        }
    }

    addTask(t: Task) {
        this.ipsum.unshift(t);
        console.log(this.ipsum);
    }

    removeTask(id: string) {
        this.ipsum = this.ipsum.filter((task) => { return task.id != id });
        this.saveTasks();
    }

    selectedUserTasks(userID: string): Task[] {
        return this.ipsum.filter((task) => {
            return task.userID === userID;
        });
    }

    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.ipsum));
    }
}