import { Project } from "../project-folder/project";

export class Task {
	id: number;
	taskname: string;
	deadline: Date | null;
	priority: string;
	status: string;
	taskProjects: Project[];
}