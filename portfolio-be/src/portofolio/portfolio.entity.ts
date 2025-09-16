import { User } from 'src/user/user.entity';
import { Column, Entity, Generated, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('SkillSet')
export class SkillSet {
  @PrimaryColumn()
  @Generated('uuid')
  skillId: string;

  @Column()
  skill: string;

  @Column()
  level: string;

  @Column()
  icon: string;

  @ManyToOne(() => User, (user) => user.skills)
  User: User;
}

@Entity('ContactMessage')
export class ContactMessage {
  @PrimaryColumn()
  @Generated('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  message: string;

  @Column()
  email: string;
}
