import { TodoResponseDto } from '@app/modules/example/domain/todo/dto/todo-response.dto';
import { Todo } from '@app/modules/example/domain/todo/todo.entity';
import { TodoRepository } from '@app/modules/example/infrastructure/persistence/repositories/todo/todo.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding a todo by its ID.
 */
@Injectable()
export class FindOneTodo {
  /**
   * Constructs a new instance of the FindOneTodoService class.
   * @param _mapper - The mapper used for mapping data.
   * @param _todoRepository - The repository for accessing todo data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _todoRepository: TodoRepository,
  ) {}

  /**
   * Retrieves a todo by its ID.
   *
   * @param id - The ID of the todo to retrieve.
   * @returns A Promise that resolves to a TodoResponseDto object representing the retrieved todo.
   */
  async handle(id: number): Promise<TodoResponseDto> {
    const todo = await this._todoRepository.findBy({
      where: { id },
    });

    const response = this._mapper.map(todo, Todo, TodoResponseDto);

    return response;
  }
}
