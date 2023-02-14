import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors();
  await app.listen(parseInt(process.env.SERVER_PORT));
}
bootstrap();
