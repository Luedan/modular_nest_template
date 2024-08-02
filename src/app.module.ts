/* istanbul ignore file */
import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { ExampleModule } from './modules/example/example.module';
import { CommonModule } from './modules/common/common.module';

/**
 * A module representing the application.
 */
@Module({
  imports: [DatabaseModule, CommonModule, ExampleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
