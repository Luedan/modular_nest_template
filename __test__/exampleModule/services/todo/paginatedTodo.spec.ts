import { TodoResponseDto } from '@app/modules/example/domain/todo/dto/todo-response.dto';
import { Todo } from '@app/modules/example/domain/todo/todo.entity';
import { TodoRepository } from '@app/modules/example/infrastructure/persistence/repositories/todo/todo.repository';
import { PaginatedTodo } from '@app/modules/example/services/useCases/todo/paginatedTodo.service';
import { Mapper } from '@automapper/core';
import {
  TodoPaginatedMock,
  TodoPaginatedResponseMock,
  TodoResponseMockArray,
} from '@test/mocks/exampleModule/todoMocks';
import { It, Mock } from 'moq.ts';

describe('paginated Todo', () => {
  let paginatedTodo: PaginatedTodo;

  // Mocks
  const mapperMock = new Mock<Mapper>();
  const todoRepositoryMock = new Mock<TodoRepository>();

  beforeEach(() => {
    paginatedTodo = new PaginatedTodo(
      mapperMock.object(),
      todoRepositoryMock.object(),
    );
  });

  it('should return all paginated todos', async () => {
    // Arrange
    todoRepositoryMock
      .setup((todoRepository) => todoRepository.getAllPaginated(It.IsAny()))
      .returns(Promise.resolve(TodoPaginatedMock));

    mapperMock
      .setup((mapper) => mapper.mapArray(It.IsAny(), Todo, TodoResponseDto))
      .returns(TodoResponseMockArray);

    // Act
    const result = await paginatedTodo.handle(1, 10);

    // Assert
    expect(result).toEqual(TodoPaginatedResponseMock);
  });
});
