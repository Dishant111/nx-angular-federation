import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  imports: [CommonModule, NxWelcomeComponent,RouterModule],
  selector: 'app-remotea-entry',
  template: `<app-nx-welcome></app-nx-welcome>`,
})
export class RemoteEntryComponent {}
