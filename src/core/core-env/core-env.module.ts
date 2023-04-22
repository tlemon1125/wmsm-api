import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { coreEnvValidationSchema } from './core-env.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: coreEnvValidationSchema,
    }),
  ],
})
export class CoreEnvModule {}
