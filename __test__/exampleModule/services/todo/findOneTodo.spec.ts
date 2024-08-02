import { TodoResponseDto } from '@app/modules/example/domain/todo/dto/todo-response.dto';
import { Todo } from '@app/modules/example/domain/todo/todo.entity';
import { TodoRepository } from '@app/modules/example/infrastructure/persistence/repositories/todo/todo.repository';
import { FindOneTodo } from '@app/modules/example/services/useCases/todo/findOneTodo.service';
import { Mapper } from '@automapper/core';
import {
  TodoMock,
  TodoResponseMock,
} from '@test/mocks/exampleModule/todoMocks';
import { Mock, It } from 'moq.ts';

describe('Find One Todo', () => {
  let findOneTodo: FindOneTodo;

  // Mocks
  const mapperMock = new Mock<Mapper>();
  const todoRepositoryMock = new Mock<TodoRepository>();

  beforeEach(() => {
    findOneTodo = new FindOneTodo(
      mapperMock.object(),
      todoRepositoryMock.object(),
    );
  });

  it('should return a todo', async () => {
    // Arrange
    todoRepositoryMock
      .setup((todoRepository) => todoRepository.findBy(It.IsAny()))
      .returns(Promise.resolve(TodoMock));

    mapperMock
      .setup((mapper) => mapper.map(It.IsAny(), Todo, TodoResponseDto))
      .returns(TodoResponseMock);

    // Act
    const result = await findOneTodo.handle(It.IsAny());

    // Assert
    expect(result).toEqual(TodoResponseMock);
  });
});
