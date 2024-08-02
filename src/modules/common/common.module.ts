import { Global, Module } from '@nestjs/common';
import { HttpAdapter } from './adapters/httpAdapter.service';
import { HttpModule } from '@nestjs/axios';

/**
 * A module representing the common module.
 */
@Module({
  imports: [HttpModule],
  providers: [HttpAdapter],
  exports: [HttpAdapter],
})
@Global()
export class CommonModule {}
