import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { importsModule } from './imports';
import { SharedService } from './services/shared.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, importsModule],
  providers: [SharedService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio-UI';
}
