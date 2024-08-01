import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { ExampleModule } from './modules/example/example.module';

@Module({
  imports: [DatabaseModule, ExampleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
