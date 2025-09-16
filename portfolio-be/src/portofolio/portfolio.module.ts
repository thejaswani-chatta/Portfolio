import { Module } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { PortofolioController } from './portfolio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactMessage, SkillSet } from './portfolio.entity';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    TypeOrmModule.forFeature([SkillSet, ContactMessage]),
    // MailerModule.forRoot({
    //   transport: {
    //     host: 'smtp.gmail.com',
    //     port: 587,
    //     auth: {
    //       user: process.env.EMAIL_USER,
    //       pass: process.env.EMAIL_PASS,
    //     },
    //   },
    // }),
  ],
  controllers: [PortofolioController],
  providers: [PortfolioService],
})
export class PortfolioModule {}
