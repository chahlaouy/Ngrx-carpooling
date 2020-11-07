import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { RouterModule, Routes } from '@angular/router'

import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';

import { ChatInterfaceComponent } from './chat-interface/chat-interface.component'
import { ChatSingleComponent } from './chat-single/chat-single.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'chat-interface',
    component: ChatInterfaceComponent
  },
  {
    path: 'chat-interface:chatID',
    component: ChatSingleComponent
  },

]

@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    ChatInterfaceComponent,
    ChatSingleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    IonicModule
  ]
})
export class PassengerModule { }
