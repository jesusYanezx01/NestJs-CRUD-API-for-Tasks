import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.entity';
import { v4 } from 'uuid';
import { UpdateTaskDto } from './dto/task.dto';

//decordador injectable es que podemos inyectar esta clase en otras clases de esta aplicacion
@Injectable()
export class TasksService {
  private task: Task[] = [
    {
      id: '1',
      title: 'primera tarea',
      descripcion: 'Esta es la primera tarea',
      estado: TaskStatus.PENDING,
    },
  ];

  getAllTasks() {
    return this.task;
  }
  createAllTasks(title: string, descripcion: string) {
    const task = {
      id: v4(),
      title,
      descripcion,
      estado: TaskStatus.PENDING,
    };

    this.task.push(task);

    return task;
  }

  updateAllTasks(id: string, updatedFields: UpdateTaskDto): Task {
    const task = this.getTaskByid(id);
    const newTask = Object.assign(task, updatedFields);
    this.task = this.task.map((task) => (task.id === id ? newTask : task));
    return newTask;
  }

  getTaskByid(id: string): Task {
    return this.task.find((task) => task.id === id);
  }

  deleteAllTasks(id: string) {
    this.task = this.task.filter((task) => task.id !== id);
  }
}
