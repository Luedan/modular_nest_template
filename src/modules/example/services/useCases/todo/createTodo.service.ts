import { TodoRequestDto } from '@app/modules/example/domain/todo/dto/todo-request.dto';
import { TodoResponseDto } from '@app/modules/example/domain/todo/dto/todo-response.dto';
import { Todo } from '@app/modules/example/domain/todo/todo.entity';
import { TodoRepository } from '@app/modules/example/infrastructure/persistence/repositories/todo/todo.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for creating a new todo.
 */
@Injectable()
export class CreateTodo {
  /**
   * Creates an instance of the CreateTodoService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _todoRepository - The repository for managing Todo entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _todoRepository: TodoRepository,
  ) {}

  /**
   * Handles the creation of a new todo.
   *
   * @param createTodoDto - The data transfer object containing the todo details.
   * @returns The response containing the created todo.
   */
  async handle(todoRequestDto: TodoRequestDto): Promise<TodoResponseDto> {
    const todoPayload = this._mapper.map(todoRequestDto, TodoRequestDto, Todo);

    const todo = await this._todoRepository.create(todoPayload);

    const response = this._mapper.map(todo, Todo, TodoResponseDto);

    return response;
  }
}
