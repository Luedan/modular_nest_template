import { TodoResponseDto } from '@app/modules/example/domain/todo/dto/todo-response.dto';
import { Todo } from '@app/modules/example/domain/todo/todo.entity';
import { TodoRepository } from '@app/modules/example/infrastructure/persistence/repositories/todo/todo.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding all todos.
 */
@Injectable()
export class FindAllTodo {
  /**
   * Constructs a new instance of the `FindAllTodoService` class.
   * @param _mapper - The mapper used for mapping data.
   * @param _todoRepository - The repository for accessing todo data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _todoRepository: TodoRepository,
  ) {}

  /**
   * Handles the finding of all todos.
   * @returns A promise that resolves to an array of TodoResponseDto objects.
   */
  async handle(): Promise<TodoResponseDto[]> {
    const todos = await this._todoRepository.getAll();

    const response = this._mapper.mapArray(todos, Todo, TodoResponseDto);

    return response;
  }
}
