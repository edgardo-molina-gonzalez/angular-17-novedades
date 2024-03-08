import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidemenuComponent } from '../shared/sidemenu/sidemenu.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, SidemenuComponent],
  templateUrl: 'dashboard.component.html',
})
export default class DashboardComponent {}
