import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { Observable } from 'rxjs';
import { Project } from './project';
import { Task } from '../task-folder/task';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {
  private baseUrl = "http://localhost:8080/api/v1/project";
  constructor(private httpClient: HttpClient, private localstorageservice: LocalStorageService) { }

  private getHeaders(): HttpHeaders {
    const authToken = this.localstorageservice.get('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    });
  }

  createProject(id: number, project: Project): Observable<Object> {
    const headers = this.getHeaders();
    return this.httpClient.post<Object>(`${this.baseUrl}/createProject/${id}`, project, {headers});
  }

  getAllProjects(): Observable<Project[]> {
    const headers = this.getHeaders();
    return this.httpClient.get<Project[]>(`${this.baseUrl}/allProjects`, {headers});
  }

  getProjectById(id: number): Observable<Project> {
    const headers = this.getHeaders();
    return this.httpClient.get<Project>(`${this.baseUrl}/getProject/${id}`, {headers});
  }

  updateProject(id: number, project: Project): Observable<Object> {
    const headers = this.getHeaders();
    return this.httpClient.patch<Object>(`${this.baseUrl}/updateProject/${id}`, project, {headers});
  }

  deleteProject(id: number): Observable<string> {
    const headers = this.getHeaders();
    return this.httpClient.delete(`${this.baseUrl}/deleteProject/${id}`, {headers, responseType:'text'});
  }

  createProjectTask(id: number, task: Task): Observable<Object> {
    const headers = this.getHeaders();
    return this.httpClient.patch<Object>(`${this.baseUrl}/addProjectTask/${id}`, task, {headers})
  }

  updateProjectTask(projectId: number, taskId: number, task: Task): Observable<Object> {
    const headers = this.getHeaders();
    return this.httpClient.patch<Object>(`${this.baseUrl}/updateProjectTask/${projectId}/${taskId}`, task, {headers});
  }

  searchProject(project: string): Observable<Project[]> {
    const headers = this.getHeaders();
    const params = new HttpParams().set('name', project);
    return this.httpClient.get<Project[]>(`${this.baseUrl}/search`, {params,headers});
  }


}
