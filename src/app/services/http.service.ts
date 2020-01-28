import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly URL_DB = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/tasksapplication-fzemv/service/http/incoming_webhook';

  constructor(private http: HttpClient) {
    this.getTasks();
   }

  getTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(`${this.URL_DB}/get`);
  }

  saveTasks(list: Array<Task>) {
    this.http.put(`${this.URL_DB}/put`, list)
    .subscribe(data => {
      confirm(data.toString());
      console.log(data);
    });
  }
}
