import { AutoMap } from '@automapper/classes';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

/**
 * A class representing a todo request dto.
 */
export class TodoRequestDto {
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
  @IsNotEmpty()
  @AutoMap()
  task: string;

  /**
   * Todo status
   */
  @IsString()
  @AutoMap()
  @IsOptional()
  status: string;
}
