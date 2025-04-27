import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cp',
  templateUrl: './cp.component.html',
  styleUrls: ['./cp.component.css']
})
export class CpComponent { // 确保类名正确
  constructor(private router: Router) {}

  navigateToPLM() {
    this.router.navigate(['/cp']); // 路径小写
  }
}