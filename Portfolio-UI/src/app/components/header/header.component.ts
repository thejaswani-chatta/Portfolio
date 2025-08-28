import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenu } from 'primeng/megamenu';

@Component({
  selector: 'app-header',
  imports: [MegaMenu],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
items: MegaMenuItem[] | undefined;

  constructor(private router: Router) {}

    ngOnInit() {
        this.items = [
            {
                label: 'About',
                icon: 'pi pi-home',
                command: () => {
                    this.router.navigate(['/aboutme']);
                }
            },
            {
                label: 'Skills',
                icon: 'pi pi-star'
            },
            {
                label: 'Projects',
                icon: 'pi pi-folder'
            },
            {
                label: 'Contact',
                icon: 'pi pi-phone'
            },
        ];
    }
}
