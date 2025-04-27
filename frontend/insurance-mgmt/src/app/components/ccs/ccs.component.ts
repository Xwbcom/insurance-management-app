import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ccs',
  templateUrl: './ccs.component.html',
  styleUrls: ['./ccs.component.css']
})
export class CcsComponent { // 确保类名正确
  constructor(private router: Router) {}

  navigateToPLM() {
    this.router.navigate(['/ccs']); // 路径小写
  }
}