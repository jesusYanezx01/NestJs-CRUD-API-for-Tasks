import {
  Param,
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Patch,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  //Decorador get para especificar el metodo
  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Post('/createTask')
  createTasks(@Body() newTask: CreateTaskDto) {
    return this.tasksService.createAllTasks(newTask.title, newTask.description);
  }

  @Delete('/deleteTask/:id')
  deleteTasks(@Param('id') id: string) {
    this.tasksService.deleteAllTasks(id);
  }

  @Patch('/updateTask/:id')
  updateTask(@Param('id') id: string, @Body() updateFilds: UpdateTaskDto) {
    return this.tasksService.updateAllTasks(id, updateFilds);
  }
}
