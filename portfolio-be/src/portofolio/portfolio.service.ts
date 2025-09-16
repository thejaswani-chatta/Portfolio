import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ContactMessage, SkillSet } from './portfolio.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectRepository(SkillSet) private skillSetRepo: Repository<SkillSet>,
    @InjectRepository(ContactMessage)
    private contactMessageRepo: Repository<ContactMessage>,
    //private readonly mailerService: MailerService,
  ) {}
  async addSkillSet(data) {
    try {
      await this.skillSetRepo
        .createQueryBuilder()
        .insert()
        .into(SkillSet)
        .values({
          skill: data.skill,
          level: data.level,
          icon: data.icon,
          User: { id: data.userId },
        })
        .execute();
      return 'Skills added successfully';
    } catch (e) {
      return e;
    }
  }

  async getSkillSet(id) {
    try {
      const skills = await this.skillSetRepo
        .createQueryBuilder()
        .where('SkillSet.userId = :id', { id: id })
        .getMany();
      return skills;
    } catch (e) {
      return e;
    }
  }

  async addContactMessage(data) {
    try {
      await this.contactMessageRepo
        .createQueryBuilder()
        .insert()
        .into(ContactMessage)
        .values({
          name: data.name,
          email: data.email,
          message: data.message,
        })
        .execute();
      //sawait this.sendMail(data);
      return 'Message sent successfully';
    } catch (e) {
      return e;
    }
  }
  // async sendMail(data) {
  //   await this.mailerService
  //     .sendMail({
  //       to: 'thejaswani.chatta@gmail.com', // list of receivers
  //       subject: 'You got a contact Message', // Subject line
  //       html: data.name + ', ' + data.email + ', ' + data.message + ', ', // HTML body content
  //     })
  //     .then(() => {})
  //     .catch(() => {});
  // }

  async getAllContactMessages() {
    try {
      const messages = await this.contactMessageRepo
        .createQueryBuilder()
        .getMany();
      return messages;
    } catch (e) {
      return e;
    }
  }
}
