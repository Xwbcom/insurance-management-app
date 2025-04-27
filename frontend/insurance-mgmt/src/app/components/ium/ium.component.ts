import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ium',
  templateUrl: './ium.component.html',
  styleUrls: ['./ium.component.css']
})
export class IumComponent { // 确保类名正确
  constructor(private router: Router) {}

  navigateToPLM() {
    this.router.navigate(['/ium']); // 路径小写
  }
}