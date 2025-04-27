import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dad',
  templateUrl: './dad.component.html',
  styleUrls: ['./dad.component.css']
})
export class DadComponent { // 确保类名正确
  constructor(private router: Router) {}

  navigateToPLM() {
    this.router.navigate(['/dad']); // 路径小写
  }
}