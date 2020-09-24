import { Component, OnInit } from '@angular/core';
import {AboutServiceService} from './about-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  summary = {};

  constructor(private aboutServiceService: AboutServiceService) {
   }

  ngOnInit(): void {
    this.summary = this.aboutServiceService.summary;
  }

}
