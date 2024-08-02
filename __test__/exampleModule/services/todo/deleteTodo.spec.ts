import { TodoResponseDto } from '@app/modules/example/domain/todo/dto/todo-response.dto';
import { Todo } from '@app/modules/example/domain/todo/todo.entity';
import { TodoRepository } from '@app/modules/example/infrastructure/persistence/repositories/todo/todo.repository';
import { DeleteTodo } from '@app/modules/example/services/useCases/todo/deleteTodo.service';
import { Mapper } from '@automapper/core';
import {
  TodoMock,
  TodoResponseMock,
} from '@test/mocks/exampleModule/todoMocks';
import { Mock, It } from 'moq.ts';

describe('Delete Todo', () => {
  let deleteTodo: DeleteTodo;

  // Mocks
  const mapperMock = new Mock<Mapper>();
  const todoRepositoryMock = new Mock<TodoRepository>();

  beforeEach(() => {
    deleteTodo = new DeleteTodo(
      mapperMock.object(),
      todoRepositoryMock.object(),
    );
  });

  it('should delete a todo', async () => {
    // Arrange
    todoRepositoryMock
      .setup((todoRepository) => todoRepository.delete(It.IsAny()))
      .returns(Promise.resolve(TodoMock));

    mapperMock
      .setup((mapper) => mapper.map(It.IsAny(), Todo, TodoResponseDto))
      .returns(TodoResponseMock);

    // Act
    const result = await deleteTodo.handle(It.IsAny());

    // Assert
    expect(result).toEqual(TodoResponseMock);
  });
});
