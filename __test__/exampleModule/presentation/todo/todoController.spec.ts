import { TodoController } from '@app/modules/example/presentation/controllers/todo/todo.controller';
import { CreateTodo } from '@app/modules/example/services/useCases/todo/createTodo.service';
import { DeleteTodo } from '@app/modules/example/services/useCases/todo/deleteTodo.service';
import { FindAllTodo } from '@app/modules/example/services/useCases/todo/findAllTodo.service';
import { FindOneTodo } from '@app/modules/example/services/useCases/todo/findOneTodo.service';
import { UpdateTodo } from '@app/modules/example/services/useCases/todo/updateTodo.service';
import { TodoResponseMock } from '@test/mocks/exampleModule/todoMocks';
import { It, Mock } from 'moq.ts';

describe('TodoController', () => {
  let todoController: TodoController;

  // Mocks
  const createTodo = new Mock<CreateTodo>();
  const findAllTodo = new Mock<FindAllTodo>();
  const findOneTodo = new Mock<FindOneTodo>();
  const updateTodo = new Mock<UpdateTodo>();
  const deleteTodo = new Mock<DeleteTodo>();

  beforeEach(async () => {
    todoController = new TodoController(
      createTodo.object(),
      updateTodo.object(),
      findAllTodo.object(),
      findOneTodo.object(),
      deleteTodo.object(),
    );
  });

  it('Create Todo', async () => {
    // Arrange
    createTodo
      .setup((i) => i.handle(It.IsAny()))
      .returns(Promise.resolve(TodoResponseMock));

    // Act
    const result = await todoController.create(It.IsAny());

    // Assert
    expect(result).toEqual(TodoResponseMock);
  });

  it('Find All Todo', async () => {
    // Arrange
    findAllTodo
      .setup((i) => i.handle())
      .returns(Promise.resolve([TodoResponseMock]));

    // Act
    const result = await todoController.findAll();

    // Assert
    expect(result).toEqual([TodoResponseMock]);
  });

  it('Find One Todo', async () => {
    // Arrange
    findOneTodo
      .setup((i) => i.handle(It.IsAny()))
      .returns(Promise.resolve(TodoResponseMock));

    // Act
    const result = await todoController.findOne(It.IsAny());

    // Assert
    expect(result).toEqual(TodoResponseMock);
  });

  it('Update Todo', async () => {
    // Arrange
    updateTodo
      .setup((i) => i.handle(It.IsAny(), It.IsAny()))
      .returns(Promise.resolve(TodoResponseMock));

    // Act
    const result = await todoController.update(It.IsAny(), It.IsAny());

    // Assert
    expect(result).toEqual(TodoResponseMock);
  });

  it('Delete Todo', async () => {
    // Arrange
    deleteTodo
      .setup((i) => i.handle(It.IsAny()))
      .returns(Promise.resolve(TodoResponseMock));

    // Act
    const result = await todoController.delete(It.IsAny());

    // Assert
    expect(result).toEqual(TodoResponseMock);
  });
});
