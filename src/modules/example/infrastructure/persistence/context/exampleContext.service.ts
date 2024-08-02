import { AbstractRepository } from '@app/modules/database/classes/abstractRepository';
import { GenericRepository } from '@app/modules/database/classes/genericRepository';
import { Todo } from '@app/modules/example/domain/todo/todo.entity';
import { Inject, Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { Request } from 'express';
import { DataSource } from 'typeorm';

/**
 * The context for the example module.
 */
@Injectable()
export class ExampleContext {
  /**
   * Represents the repository for the 'Todo' entity.
   */
  todo: AbstractRepository<Todo>;

  /**
   * Creates an instance of ExampleContextService.
   * @param dataSource - The data source to be injected.
   * @param request - The request object to be injected.
   */
  constructor(
    @InjectDataSource('main') private readonly dataSource: DataSource,
    @Inject('REQUEST') private request: Request,
  ) {
    this.todo = new GenericRepository<Todo>(
      Todo,
      this.dataSource,
      this.request,
    );
  }
}
