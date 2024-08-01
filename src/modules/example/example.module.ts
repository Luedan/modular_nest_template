import { Module } from '@nestjs/common';
import { PERSISTENCE_PROVIDERS } from './infrastructure';
import { classes } from '@automapper/classes';
import { AutomapperModule } from '@automapper/nestjs';
import { JwtModule } from '@nestjs/jwt';
import { EXAMPLE_PROFILES, EXAMPLE_USE_CASES } from './services';
import { EXAMPLE_CONTROLLERS } from './presentation';

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
    ...PERSISTENCE_PROVIDERS,
    ...EXAMPLE_PROFILES,
    ...EXAMPLE_USE_CASES,
  ],
})
export class ExampleModule {}
