import { Project } from "src/app/project-folder/project";
import { Task } from "src/app/task-folder/task";

export class User {
	id: number | any
	firstname: string | any; 
    lastname: string | any;
    email: string | any;
    password: string | any;
	createdAt: Date | any;
	tasks: Task[];
	projects: Project[];
}