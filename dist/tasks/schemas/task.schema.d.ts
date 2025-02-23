import { Document, Types } from 'mongoose';
import { TaskCategory } from '../enums/task-category.enum';
export declare class Task {
    title: string;
    description: string;
    completed: boolean;
    category: TaskCategory;
    userId: Types.ObjectId;
}
export type TaskDocument = Task & Document;
export declare const TaskSchema: import("mongoose").Schema<Task, import("mongoose").Model<Task, any, any, any, Document<unknown, any, Task> & Task & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Task, Document<unknown, {}, import("mongoose").FlatRecord<Task>> & import("mongoose").FlatRecord<Task> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
