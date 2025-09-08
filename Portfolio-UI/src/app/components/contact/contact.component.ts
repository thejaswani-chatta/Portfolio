import { Component } from '@angular/core';
import { importsModule } from '../../imports';

@Component({
  selector: 'app-contact',
  imports: [importsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  name: string | undefined;
  message: string  | undefined;
  email: string | undefined;
}
