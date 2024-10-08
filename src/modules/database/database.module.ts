/* istanbul ignore file */
import { envs } from '@app/config/envs';
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EXAMPLE_ENTITIES } from '../example/domain';

/**
 * A module representing the database.
 */
@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'main',
      type: 'postgres',
      url: envs.DATABASE_URL,
      entities: [...EXAMPLE_ENTITIES],
      logging: true,
      synchronize: process.env.NODE_ENV === 'production' ? false : true,
    }),
  ],
})
@Global()
export class DatabaseModule {}
