import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { User } from './user/user-request';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { LocalStorageService } from '../local-storage.service';
import { Task } from '../task-folder/task';
import { Project } from '../project-folder/project';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private baseUrl = "http://localhost:8080"

  constructor(private httpClient: HttpClient, private localstorageservice: LocalStorageService, private authService: AuthService) { }

  private getHeaders(): HttpHeaders {
    const authToken = this.localstorageservice.get('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    });
  }

  private getStringHeaders(): HttpHeaders {
    const authToken = this.localstorageservice.get('token');
    return new HttpHeaders({
      'Content-Type': 'text/plain',
      'Authorization': `Bearer ${authToken}`
    });
  }

  createUser(user: User): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/api/v1/auth/signup`, user);
  }
  verifyUser(user: User): Observable<Object> {
    return this.httpClient.post<any>(`${this.baseUrl}/api/v1/auth/login`,user);
  }
  getUsers(): Observable<User[]> {
    const headers = this.getHeaders();
    console.log(headers);
    return this.httpClient.get<any[]>(`${this.baseUrl}/api/v1/user/allUsers`, { headers })
  }
  getUserById(id: number): Observable<User> {
    const headers = this.getHeaders();
    return this.httpClient.get<User>(`${this.baseUrl}/api/v1/user/${id}`, {headers})
  }

  updateUser(id: number, user: User): Observable<User> {
    const headers = this.getHeaders();
    return this.httpClient.patch<User>(`${this.baseUrl}/api/v1/user/editUser/${id}`, user, {headers});
  }

  deleteUser(id: number): Observable<string> {
    const headers = this.getHeaders();
    return this.httpClient.delete<string>(`${this.baseUrl}/api/v1/user/deleteUser/${id}`, 
      {
        headers
      }
    );
  }
  filterUserStatus(id: number, status: string): Observable<Task[]> {
    const headers = this.getHeaders();
    const params = new HttpParams().set('status', status);
    return this.httpClient.get<Task[]>(`${this.baseUrl}/api/v1/user/get-userTask-status/${id}`, {params, headers});
  }
  orderUserPriority(id: number): Observable<Task[]> {
    const headers = this.getHeaders();
    return this.httpClient.get<Task[]>(`${this.baseUrl}/api/v1/user/orderUserPriority/${id}`, {headers});
  }

  searchUserTask(id: number, name: string): Observable<Task[]> {
    const headers = this.getHeaders();
    const params = new HttpParams().set('name', name);
    return this.httpClient.get<Task[]>(`${this.baseUrl}/api/v1/user/searchUserTask/${id}`,{params, headers});
  }

  searchUserProject(id: number, name: string): Observable<Project[]> {
    const headers = this.getStringHeaders();
    const params = new HttpParams().set('name', name);
    return this.httpClient.get<Project[]>(`${this.baseUrl}/api/v1/user/searchUserTask/${id}`,{params, headers});
  }

}
