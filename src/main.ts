import { NestFactory } from '@nestjs/core';
import { AppModule } from './api/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import packageJson from '../package.json';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Open API
  const config = new DocumentBuilder()
    .setTitle(packageJson.name)
    .setDescription(packageJson.description)
    .setVersion(packageJson.version)
    .addBasicAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);

  await app.listen(4000);
}
bootstrap();
