import { Task } from "../task-folder/task";

export class Project {
	id: number;
	projectname: string;
	description: string;
	deadline: Date;
	projectTasks: Task[];
}