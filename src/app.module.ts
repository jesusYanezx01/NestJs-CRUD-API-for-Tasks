import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';


//El decorador @Module le dice a nest que ese archivo es un modulo 
@Module({
  //Los imports es para poder añadir funcionalidad extra al modulo
  imports: [TasksModule],
  //Los controllers es para tener por aparte todas las rutas que puede tener este modulo 
  controllers: [],
  //Los providers es para poder obtener funciones para poder comunicarse a la base de datos
  //puede ser reutilizado para cualquier pa
  providers: [],
})
export class AppModule {}
