import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
     type: 'postgres',
      host: process.env.DATABASE_URL, // since NestJS runs on your host machine
      port: 5432,
      username: 'nestuser',       // same as POSTGRES_USER
      password: 'nestpassword',   // same as POSTGRES_PASSWORD
      database: 'nestdb',         
      entities: [User],
      synchronize: true, 
      logging: ['query'],
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
