import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './components/app.component';
import { ChatComponent } from './components/chat/chat.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'chat', component: ChatComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes, { useHash: false });