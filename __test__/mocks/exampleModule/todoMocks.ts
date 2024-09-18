import { PaginatedResponseDto } from '@app/modules/common/domain/dtos/paginateResponse.dto';
import { TodoRequestDto } from '@app/modules/example/domain/todo/dto/todo-request.dto';
import { TodoResponseDto } from '@app/modules/example/domain/todo/dto/todo-response.dto';
import { TodoUpdateDto } from '@app/modules/example/domain/todo/dto/todo-update.dto';
import { Todo } from '@app/modules/example/domain/todo/todo.entity';

export const TodoMock: Todo = {
  id: 1,
  task: 'Test',
  status: 'todo',
};

export const TodoMockArray: Todo[] = [
  {
    id: 1,
    task: 'Test',
    status: 'todo',
  },
];

export const TodoPaginatedMock: [Todo[], number] = [
  [{ id: 1, task: 'Test', status: 'todo' }],
  1,
];

export const TodoResponseMock: TodoResponseDto = {
  id: 1,
  task: 'Test',
  status: 'todo',
};

export const TodoResponseMockArray: TodoResponseDto[] = [
  {
    id: 1,
    task: 'Test',
    status: 'todo',
  },
];

export const TodoPaginatedResponseMock: PaginatedResponseDto<TodoResponseDto> =
  {
    data: [
      {
        id: 1,
        task: 'Test',
        status: 'todo',
      },
    ],
    total: 1,
    limit: 10,
    currentPage: 1,
    nextPage: null,
    previousPage: null,
    lastPage: 1,
  };

export const TodoRequestMock: TodoRequestDto = {
  id: 1,
  task: 'Test',
  status: 'todo',
};

export const TodoUpdateMock: TodoUpdateDto = {
  id: 1,
  task: 'Test',
  status: 'todo',
};
