import { ExampleContext } from '@app/modules/example/infrastructure/persistence/context/exampleContext.service';
import { TodoRepository } from '@app/modules/example/infrastructure/persistence/repositories/todo/todo.repository';
import { HttpException } from '@nestjs/common';
import {
  TodoMock,
  TodoMockArray,
  TodoPaginatedMock,
} from '@test/mocks/exampleModule/todoMocks';
import {
  FakeInsertResult,
  FakeUpdateResult,
  ErrorWithoutStatus,
} from '@test/mocks/resultsMocks';
import { It, Mock } from 'moq.ts';

describe('TodoRepository', () => {
  let todoRepository: TodoRepository;

  // Mocks
  const appContext = new Mock<ExampleContext>();

  beforeEach(() => {
    todoRepository = new TodoRepository(appContext.object());
  });

  // Success cases

  it('Create a new todo', async () => {
    // Arrange
    appContext
      .setup((appContext) => appContext.todo.create(It.IsAny()))
      .returns(Promise.resolve(FakeInsertResult(TodoMock)));

    // Act
    const result = todoRepository.create(TodoMock);

    // Assert
    expect(result).resolves.toEqual(TodoMock);
  });

  it('Get all todos', () => {
    // Arrange
    appContext
      .setup((appContext) => appContext.todo.getAll(It.IsAny()))
      .returns(Promise.resolve(TodoMockArray));

    // Act
    const result = todoRepository.getAll(It.IsAny());

    // Assert
    expect(result).resolves.toEqual(TodoMockArray);
  });

  it('Get paginated todos', () => {
    // Arrange
    appContext
      .setup((appContext) => appContext.todo.getAllPaginated(It.IsAny()))
      .returns(Promise.resolve(TodoPaginatedMock));

    // Act
    const result = todoRepository.getAllPaginated(It.IsAny());

    // Assert
    expect(result).resolves.toEqual(TodoPaginatedMock);
  });

  it('Get todo by id', () => {
    // Arrange
    appContext
      .setup((appContext) => appContext.todo.getOne(It.IsAny()))
      .returns(Promise.resolve(TodoMock));

    // Act
    const result = todoRepository.findBy(It.IsAny());

    // Assert
    expect(result).resolves.toEqual(TodoMock);
  });

  it('Update a todo', () => {
    // Arrange
    appContext
      .setup((appContext) => appContext.todo.update(It.IsAny(), It.IsAny()))
      .returns(Promise.resolve(FakeUpdateResult(TodoMock)));

    // Act
    const result = todoRepository.update(It.IsAny(), TodoMock);

    // Assert
    expect(result).resolves.toEqual(TodoMock);
  });

  it('Delete a todo', () => {
    // Arrange
    appContext
      .setup((appContext) => appContext.todo.delete(It.IsAny()))
      .returns(Promise.resolve(FakeUpdateResult(TodoMock)));

    // Act
    const result = todoRepository.delete(It.IsAny());

    // Assert
    expect(result).resolves.toEqual(TodoMock);
  });

  it('Save a todo', () => {
    // Arrange
    appContext
      .setup((appContext) => appContext.todo.save(It.IsAny(), It.IsAny()))
      .returns(Promise.resolve(TodoMock));

    // Act
    const result = todoRepository.save(It.IsAny(), It.IsAny());

    // Assert
    expect(result).resolves.toEqual(TodoMock);
  });

  // Error cases
  it('Should throw an error when trying to create a todo', () => {
    // Arrange
    appContext
      .setup((appContext) => appContext.todo.create(It.IsAny()))
      .throws(ErrorWithoutStatus);

    // Act
    const result = todoRepository.create(It.IsAny());

    // Assert
    expect(result).rejects.toThrow(
      new HttpException('Error de DB: Error', 500),
    );
  });

  it('Should throw an error when trying to get all todos', () => {
    // Arrange
    appContext
      .setup((appContext) => appContext.todo.getAll(It.IsAny()))
      .throws(ErrorWithoutStatus);

    // Act
    const result = todoRepository.getAll(It.IsAny());

    // Assert
    expect(result).rejects.toThrow(
      new HttpException('Error de DB: Error', 500),
    );
  });

  it('Should throw an error when trying to get all paginated todos', () => {
    // Arrange
    appContext
      .setup((appContext) => appContext.todo.getAllPaginated(It.IsAny()))
      .throws(ErrorWithoutStatus);

    // Act
    const result = todoRepository.getAllPaginated(It.IsAny());

    // Assert
    expect(result).rejects.toThrow(
      new HttpException('Error de DB: Error', 500),
    );
  });

  it('Should throw an error when trying to get a todo by id', () => {
    // Arrange
    appContext
      .setup((appContext) => appContext.todo.getOne(It.IsAny()))
      .throws(ErrorWithoutStatus);

    // Act
    const result = todoRepository.findBy(It.IsAny());

    // Assert
    expect(result).rejects.toThrow(
      new HttpException('Error de DB: Error', 500),
    );
  });

  it('Should throw an error when trying to update a todo', () => {
    // Arrange
    appContext
      .setup((appContext) => appContext.todo.update(It.IsAny(), It.IsAny()))
      .throws(ErrorWithoutStatus);

    // Act
    const result = todoRepository.update(It.IsAny(), TodoMock);

    // Assert
    expect(result).rejects.toThrow(
      new HttpException('Error de DB: Error', 500),
    );
  });

  it('Should throw an error when trying to delete a todo', () => {
    // Arrange
    appContext
      .setup((appContext) => appContext.todo.delete(It.IsAny()))
      .throws(ErrorWithoutStatus);

    // Act
    const result = todoRepository.delete(It.IsAny());

    // Assert
    expect(result).rejects.toThrow(
      new HttpException('Error de DB: Error', 500),
    );
  });

  it('Should throw an error when trying to save a todo', () => {
    // Arrange
    appContext
      .setup((appContext) => appContext.todo.save(It.IsAny(), It.IsAny()))
      .throws(ErrorWithoutStatus);

    // Act
    const result = todoRepository.save(It.IsAny(), It.IsAny());

    // Assert
    expect(result).rejects.toThrow(
      new HttpException('Error de DB: Error', 500),
    );
  });
});
