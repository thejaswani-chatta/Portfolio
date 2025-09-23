import { Component } from '@angular/core';
import { importsModule } from '../../imports';
import { SharedService } from '../../services/shared.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact',
  imports: [importsModule],
  providers: [MessageService],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(private sharedService: SharedService, private messageService: MessageService) {}
  name: string | undefined;
  message: string  | undefined;
  email: string | undefined;

  send() {
    let payload = {
          name: this.name,
          email: this.email,
          message: this.message,
    }
    this.sharedService.sendContactData(payload).subscribe(res => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Your message sent successfully'})
    })
  }
}
