import { Component, OnInit } from '@angular/core';
import { importsModule } from '../../imports';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-about',
  imports: [importsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  userInfo: any;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.userInfo = this.sharedService.userInfo;
    if (!this.userInfo) {
      this.sharedService.getUserinfo().subscribe((res) => {
        this.userInfo = res.response;
        this.sharedService.setUserInfo(this.userInfo);
      });
    }
  }
  getUserDesc(data: string) {
    let newData = data.replace(/\\n/g, '\n');
    return newData;
  }
}
