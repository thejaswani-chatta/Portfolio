import { Component } from '@angular/core';
import { importsModule } from '../../imports';

@Component({
  selector: 'app-skills',
  imports: [importsModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
 skills = [
  {
    name: 'Angular',
    level: 'Advanced',
    image: 'assets/Angular.png',
    alt: 'Angular'
  },
  {
    name: 'Javascript',
    level: 'Advanced',
    image: 'assets/Javascript.png',
    alt: 'Javascript'
  },
    {
    name: 'Typescript',
    level: 'Advanced',
    image: 'assets/Typescript.png',
    alt: 'Typescript'
  },
  {
    name: 'HTML',
    level: 'Advanced',
    image: 'assets/HTML.png',
    alt: 'HTML'
  },

  {
    name: 'CSS/SCSS',
    level: 'Advanced',
    image: 'assets/CSS.png',
    alt: 'CSS'
  },
  {
    name: 'Bootstrap',
    level: 'Advanced',
    image: 'assets/Bootstrap.png',
    alt: 'Bootstrap'
  },
    {
    name: 'NestJs',
    level: 'Intermediate',
    image: 'assets/NestJs.png',
    alt: 'NestJs'
  },
  {
    name: 'Java',
    level: 'Advanced',
    image: 'assets/Java.png',
    alt: 'Java'
  },

   {
    name: 'Springboot',
    level: 'Advanced',
    image: 'assets/Springboot.png',
    alt: 'Springboot'
  },
    {
    name: 'Docker',
    level: 'Intermediate',
    image: 'assets/Docker.png',
    alt: 'Docker'
  },
  {
    name: 'Git/Gitlab',
    level: 'Advanced',
    image: 'assets/Git.png',
    alt: 'Git'
  },
  {
    name: 'MySql/Postgres/MongoDB',
    level: 'Intermediate',
    image: 'assets/Database.png',
    alt: 'Database'
  },
  {
    name: 'Unix',
    level: 'Intermediate',
    image: 'assets/Unix.png',
    alt: 'Unix'
  }
 ]
}
