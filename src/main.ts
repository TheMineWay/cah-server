import packageJson from '../package.json';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './api/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { getConfig } from './utils/config/get-config.util';
import helmet from 'helmet';

async function bootstrap() {
  const { enableSwagger, enableCors } = getConfig();

  const app = await NestFactory.create(AppModule);
  app.use(helmet());

  // CORS
  if (enableCors) app.enableCors();

  // Open API
  if (enableSwagger) {
    const config = new DocumentBuilder()
      .setTitle(packageJson.name)
      .setDescription(packageJson.description)
      .setVersion(packageJson.version)
      .addBasicAuth()
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('documentation', app, document);
  }

  await app.listen(4000);
}
bootstrap();
