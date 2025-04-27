import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stm',
  templateUrl: './stm.component.html',
  styleUrls: ['./stm.component.css']
})
export class StmComponent { // 确保类名正确
  constructor(private router: Router) {}

  navigateToPLM() {
    this.router.navigate(['/stm']); // 路径小写
  }
}