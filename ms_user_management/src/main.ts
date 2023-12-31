import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
//enable cors to angular app
  app.enableCors({
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200, // Some legacy browsers (e.g., IE11) choke on 204
});
  //swagger implimentation
  const config = new DocumentBuilder()
    .setTitle('ms user managament')
    .setDescription('Microservice API Documentation')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config)
  ;
  SwaggerModule.setup('/', app, document);

  //dto implimentation
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(7000);

}
bootstrap();