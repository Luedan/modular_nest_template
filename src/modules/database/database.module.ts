import { envs } from '@app/config/envs';
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: envs.DATABASE_URL,
    }),
  ],
})
@Global()
export class DatabaseModule {}
