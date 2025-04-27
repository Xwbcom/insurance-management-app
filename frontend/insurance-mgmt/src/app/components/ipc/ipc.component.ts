import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ipc',
  templateUrl: './ipc.component.html',
  styleUrls: ['./ipc.component.css']
})
export class IpcComponent { // 确保类名正确
  constructor(private router: Router) {}

  navigateToPLM() {
    this.router.navigate(['/ipc']); // 路径小写
  }
}