import { Module } from '@nestjs/common';
import { CoreEnvModule } from './core-env/core-env.module';
import { CoreMongooseModule } from './core-mongoose/core-mongoose.module';

@Module({
  imports: [CoreEnvModule, CoreMongooseModule],
})
export class CoreModule {}
