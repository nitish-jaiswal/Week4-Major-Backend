"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const task_category_enum_1 = require("./enums/task-category.enum");
const task_schema_1 = require("./schemas/task.schema");
let TasksService = class TasksService {
    taskModel;
    constructor(taskModel) {
        this.taskModel = taskModel;
    }
    async create(createTaskDto, userId) {
        const createdTask = new this.taskModel({
            ...createTaskDto,
            userId,
        });
        return createdTask.save();
    }
    async findAll(userId) {
        return this.taskModel.find({ userId }).exec();
    }
    async findOne(id, userId) {
        const task = await this.taskModel.findOne({ _id: id, userId }).exec();
        if (!task) {
            throw new common_1.NotFoundException(`Task with ID ${id} not found`);
        }
        return task;
    }
    async update(id, updateTaskDto, userId) {
        const updatedTask = await this.taskModel
            .findOneAndUpdate({ _id: id, userId }, updateTaskDto, { new: true })
            .exec();
        if (!updatedTask) {
            throw new common_1.NotFoundException(`Task with ID ${id} not found`);
        }
        return updatedTask;
    }
    async remove(id, userId) {
        const result = await this.taskModel.deleteOne({ _id: id, userId }).exec();
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException(`Task with ID ${id} not found`);
        }
    }
    async findByCategory(category, userId) {
        if (!Object.values(task_category_enum_1.TaskCategory).includes(category)) {
            throw new common_1.BadRequestException(`Invalid category: ${category}`);
        }
        try {
            const tasks = await this.taskModel.find({
                userId,
                category
            }).exec();
            return tasks;
        }
        catch (error) {
            throw new common_1.BadRequestException('Error fetching tasks by category');
        }
    }
    async findCompleted(userId) {
        try {
            const tasks = await this.taskModel.find({
                userId,
                completed: true
            }).exec();
            return tasks;
        }
        catch (error) {
            throw new common_1.BadRequestException('Error fetching completed tasks');
        }
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(task_schema_1.Task.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TasksService);
//# sourceMappingURL=tasks.service.js.map