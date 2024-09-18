import { PaginatedResponseDto } from '@app/modules/common/domain/dtos/paginateResponse.dto';
import { createPaginatedResponse } from '@app/modules/common/utils/functions';
import { TodoResponseDto } from '@app/modules/example/domain/todo/dto/todo-response.dto';
import { Todo } from '@app/modules/example/domain/todo/todo.entity';
import { TodoRepository } from '@app/modules/example/infrastructure/persistence/repositories/todo/todo.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for paginated all todos.
 */
@Injectable()
export class PaginatedTodo {
  /**
   * Constructs a new instance of the `PaginatedTodoService` class.
   * @param _mapper - The mapper used for mapping data.
   * @param _todoRepository - The repository for accessing todo data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _todoRepository: TodoRepository,
  ) {}

  /**
   * Handles the paginated of all todos.
   * @returns A promise that resolves to an array of TodoResponseDto objects.
   */
  async handle(
    page: number,
    limit: number,
  ): Promise<PaginatedResponseDto<TodoResponseDto>> {
    const [todos, total] = await this._todoRepository.getAllPaginated({
      take: limit,
      skip: (page - 1) * limit,
    });

    const response = this._mapper.mapArray(todos, Todo, TodoResponseDto);

    return createPaginatedResponse({ data: response, total, page, limit });
  }
}
