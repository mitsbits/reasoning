import { Component } from '@angular/core';

@Component({
    selector: 'ang',
    templateUrl: 'app/components/app.component.html'
})

export class AppComponent {
    public appName: string;
    constructor() {
        this.appName = 'Ang 2 App ****';
    }
}