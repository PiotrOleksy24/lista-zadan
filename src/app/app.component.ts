import { Component} from '@angular/core';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private taskService: TasksService) {}

  save() {
    this.taskService.SaveTaskInDb();
  }
}
