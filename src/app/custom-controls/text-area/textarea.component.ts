import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';

@Component({
    selector: 'app-textarea',
    templateUrl: './textarea.component.html',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        KeyFilterModule,
        InputTextareaModule
    ]
})
export class TextareaComponent {
    @Input() label!: string;
    @Input() value: string | undefined;
    @Input() rows: number = 5;
    @Input() cols: number = 30;
    @Input() name!: string;
    @Input() id: string = `cc-textarea-${crypto.randomUUID()}`
    @Input() autoResize: boolean = false;
    @Input() pKeyFilter: "int" | "num" | "money" | "hex" | "alpha" | "alphanum" | RegExp = "alphanum";
    @Input() placeholder?: string = '';
}
