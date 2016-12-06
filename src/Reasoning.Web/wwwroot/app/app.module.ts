import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routes';
import { AppComponent } from './components/app.component';
import { ChatComponent } from './components/chat/chat.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
    imports: [BrowserModule, routing],
    declarations: [AppComponent, ChatComponent, DashboardComponent],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule { }