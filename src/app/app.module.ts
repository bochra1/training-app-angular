import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {RouterModule, Routes} from '@angular/router';
const appRoutes: Routes = [
{
path: 'list',
component: SessionItemListComponent},
{
path: 'admin',  
loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)
},
{ path: '', redirectTo: '/list', pathMatch: 'full' },
{ path: '**', component: PagenotfoundComponent }
];
@NgModule({
declarations: [
AppComponent,
SessionItemComponent,
SessionItemListComponent,
//InscriptionDisabledDirective,
PagenotfoundComponent,
],
imports: [RouterModule.forRoot(
appRoutes,
{ enableTracing: true }
),
BrowserModule,
FormsModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
