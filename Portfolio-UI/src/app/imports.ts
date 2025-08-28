import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

@NgModule({
    exports: [
        CommonModule,
        CardModule,
        DividerModule
    ]
})

export class importsModule{}