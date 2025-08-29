import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), // Angular build output folder
    }),
    TypeOrmModule.forRoot({
       type: 'postgres',
      url: process.env.DATABASE_URL,   // <-- use url instead of host
      autoLoadEntities: true,
      synchronize: true,               // ⚠️ safe only for dev
      logging: ['query'],
      ssl: process.env.RENDER ? { rejectUnauthorized: false } : undefined,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
