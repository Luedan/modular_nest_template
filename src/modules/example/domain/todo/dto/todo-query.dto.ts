import { AutoMap } from '@automapper/classes';
import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Represents the todo pagination query DTO without query.
 */
export class TodoPaginatedQueryDto {
  /**
   * Current page.
   */
  @AutoMap()
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  @ApiProperty({ required: false })
  public page: number;

  /**
   * Limit.
   */
  @AutoMap()
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  @ApiProperty({ required: false })
  public limit: number;
}
