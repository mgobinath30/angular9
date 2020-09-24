import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutServiceService {

  constructor() { }

  summary = {
    title: 'My New Project one',
    details : 'Create a new Angular 9 project and integrate Angular material Create a view (AppComponent) that matches the mockup we provided (use Angular Material,but we do not expect a pixel-perfect prototype).',
    milestone : ['step1', 'step 2', 'step3']
  };
}
