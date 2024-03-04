import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './config/swagger.config';
import { ValidationPipe } from '@nestjs/common';
import { DelayInterceptor } from './interceptors/delay.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupSwagger(app);

  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  app.useGlobalInterceptors(new DelayInterceptor());
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
