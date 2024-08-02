import { Mapper } from '@automapper/core';
import { It, Mock } from 'moq.ts';
import { TodoRepository } from '@app/modules/example/infrastructure/persistence/repositories/todo/todo.repository';
import { TodoRequestDto } from '@app/modules/example/domain/todo/dto/todo-request.dto';
import { TodoResponseDto } from '@app/modules/example/domain/todo/dto/todo-response.dto';
import { Todo } from '@app/modules/example/domain/todo/todo.entity';
import { CreateTodo } from '@app/modules/example/services/useCases/todo/createTodo.service';
import {
  TodoMock,
  TodoResponseMock,
} from '@test/mocks/exampleModule/todoMocks';

describe('Create Todo', () => {
  let createTodo: CreateTodo;

  // Mocks
  const mapperMock = new Mock<Mapper>();

  const todoRepositoryMock = new Mock<TodoRepository>();

  beforeEach(() => {
    createTodo = new CreateTodo(
      mapperMock.object(),
      todoRepositoryMock.object(),
    );
  });

  it('should create a todo', async () => {
    // Arrange
    mapperMock
      .setup((mapper) => mapper.map(It.IsAny(), TodoRequestDto, Todo))
      .returns(TodoMock);

    todoRepositoryMock
      .setup((todoRepository) => todoRepository.create(It.IsAny()))
      .returns(Promise.resolve(TodoMock));

    mapperMock
      .setup((mapper) => mapper.map(It.IsAny(), Todo, TodoResponseDto))
      .returns(TodoResponseMock);

    // Act
    const result = await createTodo.handle(It.IsAny());

    // Assert
    expect(result).toEqual(TodoResponseMock);
  });
});
