import { PaginateRequestDto } from '@app/modules/common/domain/dtos/paginateRequest.dto';
import { TransactionInterceptor } from '@app/modules/common/interceptors/transaction.interceptor';
import { TodoRequestDto } from '@app/modules/example/domain/todo/dto/todo-request.dto';
import { TodoUpdateDto } from '@app/modules/example/domain/todo/dto/todo-update.dto';
import { CreateTodo } from '@app/modules/example/services/useCases/todo/createTodo.service';
import { DeleteTodo } from '@app/modules/example/services/useCases/todo/deleteTodo.service';
import { FindAllTodo } from '@app/modules/example/services/useCases/todo/findAllTodo.service';
import { FindOneTodo } from '@app/modules/example/services/useCases/todo/findOneTodo.service';
import { PaginatedTodo } from '@app/modules/example/services/useCases/todo/paginatedTodo.service';
import { UpdateTodo } from '@app/modules/example/services/useCases/todo/updateTodo.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseInterceptors,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

/**
 * Todo controller
 */
@Controller('todos')
@ApiTags('Todos')
export class TodoController {
  constructor(
    private readonly _createTodo: CreateTodo,
    private readonly _updateTodo: UpdateTodo,
    private readonly _findAllTodo: FindAllTodo,
    private readonly _findOneTodo: FindOneTodo,
    private readonly _deleteTodo: DeleteTodo,
    private readonly _paginatedTodo: PaginatedTodo,
  ) {}

  /**
   * Create a new todo
   * @param createTodoDto
   * @returns
   */
  @Post()
  @UseInterceptors(TransactionInterceptor)
  create(@Body() createTodoDto: TodoRequestDto) {
    return this._createTodo.handle(createTodoDto);
  }

  /**
   * Get all todos paginated
   * @param query
   * @returns
   */
  @Get('paginated')
  findAllPaginated(@Query() query: PaginateRequestDto) {
    return this._paginatedTodo.handle(query.currentPage, query.limit);
  }

  /**
   * Get all todos
   * @returns
   */
  @Get()
  findAll() {
    return this._findAllTodo.handle();
  }

  /**
   * Get todo by id
   * @param id
   * @returns
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._findOneTodo.handle(+id);
  }

  /**
   * Update todo
   * @param id
   * @param updateTodoDto
   * @returns
   */
  @Put(':id')
  @UseInterceptors(TransactionInterceptor)
  update(@Param('id') id: string, @Body() updateTodoDto: TodoUpdateDto) {
    return this._updateTodo.handle(+id, updateTodoDto);
  }

  /**
   * Delete todo
   * @param id
   * @returns
   */
  @Delete(':id')
  @UseInterceptors(TransactionInterceptor)
  delete(@Param('id') id: string) {
    return this._deleteTodo.handle(+id);
  }
}
