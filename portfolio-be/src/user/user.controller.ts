import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import * as user from './user';

@Controller('user')
export class UserController {
        constructor(private userService: UserService) {
        
    }

    @Post('adduser')
    addUser(@Body() user: user.userdto) {
        return this.userService.addUser(user);
    }

    @Get(':id')
    getUser(@Param() id: Object){
        console.log('controller id',id)
        return this.userService.getUser(id['id'])
    }
}
