import { AutoMap } from '@automapper/classes';
import { IsNumber, IsOptional, IsString } from 'class-validator';

/**
 * A class representing a todo update dto.
 */
export class TodoUpdateDto {
  /**
   * Todo id
   */
  @IsNumber()
  @IsOptional()
  @AutoMap()
  id: number;

  /**
   * Todo task
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  task: string;

  /**
   * Todo status
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  status: string;
}
