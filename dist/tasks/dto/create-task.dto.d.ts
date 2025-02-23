import { TaskCategory } from '../enums/task-category.enum';
export declare class CreateTaskDto {
    title: string;
    description: string;
    category?: TaskCategory;
}
