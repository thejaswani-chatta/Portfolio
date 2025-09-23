import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { TextareaModule } from 'primeng/textarea';
import { AccordionModule } from 'primeng/accordion';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
@NgModule({
    imports: [
        FloatLabel,
        FormsModule
    ],
    exports: [
        CommonModule,
        CardModule,
        DividerModule,
        ButtonModule,
        InputTextModule,
        FormsModule,
        FloatLabel,
        TextareaModule,
        AccordionModule,
        ToastModule,
        ProgressSpinnerModule
    ]
})

export class importsModule{}