import { SkillSet } from 'src/portofolio/portfolio.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @OneToMany(() => SkillSet, (skillSet) => skillSet.User)
  skills: SkillSet[];
}
