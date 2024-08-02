import { AutoMap } from '@automapper/classes';

/**
 * A class representing a todo response dto.
 */
export class TodoResponseDto {
  /**
   * Todo id
   */
  @AutoMap()
  id: number;

  /**
   * Todo task
   */
  @AutoMap()
  task: string;

  /**
   * Todo status
   */
  @AutoMap()
  status: string;
}
