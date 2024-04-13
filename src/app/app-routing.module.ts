import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRequestComponent } from './user-folder/user-request/user-request.component';
import { UserLoginComponent } from './user-folder/user-login/user-login.component';
import { UserListComponent } from './user-folder/user-list/user-list.component';
import { ViewUserComponent } from './user-folder/view-user/view-user.component';
import { EditUserComponent } from './user-folder/edit-user/edit-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateTaskComponent } from './task-folder/create-task/create-task.component';
import { TaskListComponent } from './task-folder/task-list/task-list.component';
import { ViewTaskComponent } from './task-folder/view-task/view-task.component';
import { UpdateTaskComponent } from './task-folder/update-task/update-task.component';
import { ViewTaskstatusComponent } from './task-folder/view-taskstatus/view-taskstatus.component';
import { OrderTaskpriorityComponent } from './task-folder/order-taskpriority/order-taskpriority.component';
import { SearchTaskComponent } from './task-folder/search-task/search-task.component';
import { CreateProjectComponent } from './project-folder/create-project/create-project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ViewProjectComponent } from './project-folder/view-project/view-project.component';
import { UpdateProjectComponent } from './project-folder/update-project/update-project.component';
import { CreateProjectTaskComponent } from './project-folder/create-project-task/create-project-task.component';
import { UpdateProjectTaskComponent } from './project-folder/update-project-task/update-project-task.component';
import { UserprojectListComponent } from './user-folder/userproject-list/userproject-list.component';
import { UserTaskComponent } from './user-folder/user-task/user-task.component';

const routes: Routes = [
  {
  path:"signin", component: UserRequestComponent
  },
  {
    path:"login", component: UserLoginComponent
  },
  {
    path:"users", component: UserListComponent
  },
  {
    path:"user/:id", component: ViewUserComponent 
  },
  {
    path:"edit-user/:id", component: EditUserComponent
  }
  ,
  {
    path:"user-project-list/:id", component: UserprojectListComponent
  },
  {
    path:"user-task-list/:id", component: UserTaskComponent
  },
  {
    path:"dashboard/:id", component: DashboardComponent
  },
  {
    path:"create-task/:id", component: CreateTaskComponent
  },
  {
    path:"allTask", component: TaskListComponent
  },
  {
    path:"view-task/:id", component: ViewTaskComponent
  },
  {
    path:"update-task/:id", component: UpdateTaskComponent
  },
  {
    path:"sortTask", component: ViewTaskstatusComponent
  },
  {
    path:"orderTask", component: OrderTaskpriorityComponent
  },
  {
    path:"searchTask", component: SearchTaskComponent
  },
  {
    path:"createProject/:id", component: CreateProjectComponent
  },
  {
    path:"allProjects", component: ProjectListComponent
  },
  {
    path:"project/:id", component: ViewProjectComponent
  },
  {
    path:"update-project/:id", component: UpdateProjectComponent
  },
  {
    path:"createProjectTask/:id", component: CreateProjectTaskComponent
  },
  {
    path:"updateProjectTask/:projectId/:taskId", component: UpdateProjectTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
