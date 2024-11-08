import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxZeroDialogService } from '../../../../projects/ngx-zero-dialog/src/public-api';
import { CodeSnippetComponent } from '../../code-snippet/code-snippet.component';
import { MyDialogComponent } from './my-dialog.component';

@Component({
  standalone: true,
  selector: 'app-component-modals-example',
  templateUrl: 'component-modals-example.component.html',
  styleUrl: 'component-modals-example.component.scss',
  imports: [CommonModule, MatTabsModule, CodeSnippetComponent],
})
export class ComponentModalsExampleComponent {
    readonly appComponentCode = `
        @Component({
            selector: 'app-component',
            template: \`<button (click)="openDialog()">Open component-based dialog</button>\`,
            styleUrl: './app.component.scss',
        })
        export class AppComponent {
            constructor(private readonly ngxDialogService: NgxDialogService) {}

            openModal() {
                this.ngxDialogService.openDialog(MyDialogComponent).subscribe();
            }
        }
    `;

    readonly myDialogComponentCode = `
        @Component({
            selector: 'my-dialog.component.ts',
            template: \`
                    Hello! I'm component dialog <br> Close me if you wish
                \`
        })
        export class MyDialogComponent {}
    `;

  constructor(private readonly ngxDialogService: NgxZeroDialogService) {}

  openDialog() {
    this.ngxDialogService.openDialog(MyDialogComponent).subscribe();
  }
}
