import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskCategory } from './enums/task-category.enum';
import { TasksService } from './tasks.service';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(createTaskDto: CreateTaskDto, req: any): Promise<import("./schemas/task.schema").Task>;
    findAll(req: any): Promise<import("./schemas/task.schema").Task[]>;
    getCompletedTasks(req: any): Promise<import("./schemas/task.schema").Task[]>;
    getTasksByCategory(category: TaskCategory, req: any): Promise<import("./schemas/task.schema").Task[]>;
    findOne(id: string, req: any): Promise<import("./schemas/task.schema").Task>;
    update(id: string, updateTaskDto: UpdateTaskDto, req: any): Promise<import("./schemas/task.schema").Task>;
    remove(id: string, req: any): Promise<void>;
}
