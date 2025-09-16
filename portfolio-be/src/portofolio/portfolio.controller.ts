import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { SkillSetDto } from './portfolio';

@Controller('portfolio')
export class PortofolioController {
  constructor(private portfolioService: PortfolioService) {}
  @Post('addSkillSet')
  addSkillSet(@Body() data: SkillSetDto) {
    return this.portfolioService.addSkillSet(data);
  }
  @Get('skillSet')
  getSkillSet(@Query('id', ParseIntPipe) id: number) {
    return this.portfolioService.getSkillSet(id);
  }
  @Post('contact')
  addContactMessage(@Body() data) {
    return this.portfolioService.addContactMessage(data);
  }
  @Get('messages')
  getAllMessages() {
    return this.portfolioService.getAllContactMessages();
  }
}
