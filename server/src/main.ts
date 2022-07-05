import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  app.enableCors()
  await app.listen(process.env.PORT || 5000);
  console.log(process.env.PORT);
  console.log(11122212122);
  
  
}

bootstrap();
