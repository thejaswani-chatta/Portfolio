import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { userdto } from './user';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User)
    private usersRepository: Repository<User>,) { }

    async addUser(user: userdto) {
        try {
            await this.usersRepository
                .createQueryBuilder()
                .insert()
                .into(User)
                .values(
                    user
                )
                .execute()
            return 'added user'
        }
        catch (error) {
            return error;
        }

    }

    async getUser(id) {
        try {
            console.log('Incoming id:', id, typeof id);

            const user = await this.usersRepository.findOneBy({ id: Number(id) });

            console.log('Result from repo:', user);

            return user;
        }
        catch (err) {
            return err
        }
    }
}
