import { Component, signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'angular-signal-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  signalContent  = signal('hello');

  inputChange(ev: KeyboardEvent) {
    this.signalContent.update((e) => (ev.target as HTMLInputElement).value + e || '' );
  }
}
