import { TaskStatus } from '../tasks.entity';
import { IsNotEmpty, IsString, Min, IsOptional, IsIn} from 'class-validator';
export class CreateTaskDto {
  @IsString() //Este decorador es para especificar que solo debe recibir un STRING
  @IsNotEmpty() //Este decorador es para especificar que no se puede enviar vacio
  @Min(3) //Este decorador especifica el minimo de cantidad de caracteres que recibe
  title: string;
  description: string;
}

export class UpdateTaskDto {
  @IsOptional() //Este decorador especifica que el campo puede ser opcional 
  title?: string;
  description?: string;
  //Este decorador tiene como parametro un arreglo donde puedo pasar los multiples string que van a coincidir
  @IsIn([TaskStatus.PENDING, TaskStatus.DONE, TaskStatus.IN_PROGRESS])
  estado?: TaskStatus;
}
