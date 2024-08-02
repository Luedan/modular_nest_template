import { Global, Module } from '@nestjs/common';
import { HttpAdapter } from './adapters/httpAdapter.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [HttpAdapter],
  exports: [HttpAdapter],
})
@Global()
export class CommonModule {}
