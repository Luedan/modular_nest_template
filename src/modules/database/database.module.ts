import { envs } from '@app/config/envs';
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EXAMPLE_ENTITIES } from '../example/domain';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'main',
      type: 'postgres',
      url: envs.DATABASE_URL,
      entities: [...EXAMPLE_ENTITIES],
      logging: true,
      synchronize: true,
    }),
  ],
})
@Global()
export class DatabaseModule {}
