import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plm',
  templateUrl: './plm.component.html',
  styleUrls: ['./plm.component.css']
})
export class PLMComponent { // 确保类名正确
  constructor(private router: Router) {}

  navigateToPLM() {
    this.router.navigate(['/plm']); // 路径小写
  }
}