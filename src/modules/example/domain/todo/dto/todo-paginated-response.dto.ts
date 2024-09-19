import { AutoMap } from '@automapper/classes';
import { TodoResponseDto } from './todo-response.dto';

/**
 * Represents the todo paginated response DTO
 */
export class TodoPaginatedResponseDto {
  /**
   * Paginated data
   */
  @AutoMap()
  public data: TodoResponseDto[];

  /**
   * Total pages
   */
  @AutoMap()
  public total: number;

  /**
   * Current page
   */
  @AutoMap()
  public currentPage: number;

  /**
   * Next page
   */
  @AutoMap()
  public nextPage: number;

  /**
   * Previous page
   */
  @AutoMap()
  public previousPage: number;

  /**
   * Last page
   */
  @AutoMap()
  public lastPage: number;

  /**
   * Limit
   */
  @AutoMap()
  public limit: number;
}
