import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './components/intro/intro.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/login/forgot-password/forgot-password.component';
import { AuthGuard } from './auth/auth.guard';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { CustomerManagementComponent } from './components/customermanagement/customer-management.component';
import { PLMComponent } from './components/plm/plm.component';
import { CpComponent } from './components/cp/cp.component';
import { IpcComponent } from './components/ipc/ipc.component';
import { StmComponent } from './components/stm/stm.component';
import { IumComponent } from './components/ium/ium.component';
import { CcsComponent } from './components/ccs/ccs.component';
import { DadComponent } from './components/dad/dad.component';

const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
  {
    path: 'customermanagement', // 访问路径
    component: CustomerManagementComponent // 关联组件
  },
   { path: 'plm', component: PLMComponent },
   { path: 'cp', component: CpComponent },
   { path: 'ipc', component: IpcComponent },
   { path: 'stm', component: StmComponent },
   { path: 'ium', component: IumComponent },
   { path: 'ccs', component: CcsComponent },
   { path: 'dad', component: DadComponent },
   
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    data: { expectedRole: 'ADMIN' }
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    data: { expectedRole: 'CUSTOMER' }
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    data: { expectedRole: 'EMPLOYEE' }
  },
  {
    path: 'agent',
    loadChildren: () => import('./agent/agent.module').then(m => m.AgentModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    data: { expectedRole: 'AGENT' }
  },
 

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
