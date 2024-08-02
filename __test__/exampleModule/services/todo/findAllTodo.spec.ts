import { TodoResponseDto } from '@app/modules/example/domain/todo/dto/todo-response.dto';
import { Todo } from '@app/modules/example/domain/todo/todo.entity';
import { TodoRepository } from '@app/modules/example/infrastructure/persistence/repositories/todo/todo.repository';
import { FindAllTodo } from '@app/modules/example/services/useCases/todo/findAllTodo.service';
import { Mapper } from '@automapper/core';
import {
  TodoMockArray,
  TodoResponseMockArray,
} from '@test/mocks/exampleModule/todoMocks';
import { Mock } from 'moq.ts';

describe('Find All Todo', () => {
  let findAllTodo: FindAllTodo;

  // Mocks
  const mapperMock = new Mock<Mapper>();
  const todoRepositoryMock = new Mock<TodoRepository>();

  beforeEach(() => {
    findAllTodo = new FindAllTodo(
      mapperMock.object(),
      todoRepositoryMock.object(),
    );
  });

  it('should return all todos', async () => {
    // Arrange
    todoRepositoryMock
      .setup((todoRepository) => todoRepository.getAll())
      .returns(Promise.resolve(TodoMockArray));

    mapperMock
      .setup((mapper) => mapper.mapArray(TodoMockArray, Todo, TodoResponseDto))
      .returns(TodoResponseMockArray);

    // Act
    const result = await findAllTodo.handle();

    // Assert
    expect(result).toEqual(TodoResponseMockArray);
  });
});
