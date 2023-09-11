import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Para ejecutar las validaciones ponemos la siguiente linea de codigo
  //Forma de decir que valide todo
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
