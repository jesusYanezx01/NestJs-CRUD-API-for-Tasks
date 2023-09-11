export enum TaskStatus{
    PENDING = 'PENDIG',
    IN_PROGRESS = 'IN_POGRESS',
    DONE = 'DONE',
}

//Utilizamos la palabra export, ya que lo utilizaremos fuera
export class Task{
    id: string;
    title: string; 
    descripcion: string; 
    estado: TaskStatus; 
}


