import { Module } from '@nestjs/common';
import {
  EXAMPLE_PERSISTENCE_PROVIDERS,
  EXAMPLE_EXTERNAL_PROVIDERS,
} from './infrastructure';
import { classes } from '@automapper/classes';
import { AutomapperModule } from '@automapper/nestjs';
import { JwtModule } from '@nestjs/jwt';
import { EXAMPLE_PROFILES, EXAMPLE_USE_CASES } from './services';
import { EXAMPLE_CONTROLLERS } from './presentation';

/**
 * A module representing the example module.
 */
@Module({
  imports: [
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
    JwtModule.register({
      secret: 'test-key',
      global: true,
      signOptions: {
        expiresIn: process.env.NODE_ENV === 'production' ? '30m' : '7d',
      },
    }),
  ],
  controllers: [...EXAMPLE_CONTROLLERS],
  providers: [
    ...EXAMPLE_PERSISTENCE_PROVIDERS,
    ...EXAMPLE_EXTERNAL_PROVIDERS,
    ...EXAMPLE_PROFILES,
    ...EXAMPLE_USE_CASES,
  ],
})
export class ExampleModule {}
