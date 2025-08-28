import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   const server = app.getHttpAdapter().getInstance() as express.Application;
    // Serve static Angular files
  server .use(express.static(join(__dirname, '..', 'public')));

  // Redirect all routes to Angular index.html
  server .get('*', (_req: Request, res: any) => {
    res.sendFile(join(__dirname, '..', 'public', 'index.html'));
  });
   app.enableCors({
    origin: 'http://localhost:4200', // your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
