import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRequestComponent } from './user-folder/user-request/user-request.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserLoginComponent } from './user-folder/user-login/user-login.component';
import { UserListComponent } from './user-folder/user-list/user-list.component';
import { ViewUserComponent } from './user-folder/view-user/view-user.component';
import { EditUserComponent } from './user-folder/edit-user/edit-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavLoginComponent } from './nav-login/nav-login.component';
import { NavDashboardComponent } from './nav-dashboard/nav-dashboard.component';
import { CreateTaskComponent } from './task-folder/create-task/create-task.component';
import { TaskListComponent } from './task-folder/task-list/task-list.component';
import { ViewTaskComponent } from './task-folder/view-task/view-task.component';
import { UpdateTaskComponent } from './task-folder/update-task/update-task.component';
import { ViewTaskstatusComponent } from './task-folder/view-taskstatus/view-taskstatus.component';
import { OrderTaskpriorityComponent } from './task-folder/order-taskpriority/order-taskpriority.component';
import { SearchTaskComponent } from './task-folder/search-task/search-task.component';
import { Router } from '@angular/router';
import { TaskTableComponent } from './task-folder/task-table/task-table.component';
import { CreateProjectComponent } from './project-folder/create-project/create-project.component';
import { CreateProjectTaskComponent } from './project-folder/create-project-task/create-project-task.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ViewProjectComponent } from './project-folder/view-project/view-project.component';
import { UpdateProjectComponent } from './project-folder/update-project/update-project.component';
import { UpdateProjectTaskComponent } from './project-folder/update-project-task/update-project-task.component';
import { NgToastModule } from 'ng-angular-popup';
import { SuccessModalComponent } from './success-modal/success-modal.component';
import { UserprojectListComponent } from './user-folder/userproject-list/userproject-list.component';
import { UserTaskComponent } from './user-folder/user-task/user-task.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRequestComponent,
    UserLoginComponent,
    UserListComponent,
    ViewUserComponent,
    EditUserComponent,
    DashboardComponent,
    NavLoginComponent,
    NavDashboardComponent,
    CreateTaskComponent,
    TaskListComponent,
    ViewTaskComponent,
    UpdateTaskComponent,
    ViewTaskstatusComponent,
    OrderTaskpriorityComponent,
    SearchTaskComponent,
    TaskTableComponent,
    CreateProjectComponent,
    CreateProjectTaskComponent,
    ProjectListComponent,
    ViewProjectComponent,
    UpdateProjectComponent,
    UpdateProjectTaskComponent,
    SuccessModalComponent,
    UserprojectListComponent,
    UserTaskComponent
  ],
  imports: [
    NgToastModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
