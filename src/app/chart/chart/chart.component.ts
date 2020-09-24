import { Component, OnInit } from '@angular/core';
import {ChartService} from '../chart.service';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

constructor(private chartService: ChartService) { }

graph = {
    data: [
        {  type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
        {  type: 'bar' , mode: 'lines+points', marker: {color: 'red'}},
    ],
    layout: {autosize: true, title: 'Twaice Temperature Sensors', xaxis: {tickformat: '%a %e %b \n %Y'}}
};

  data = [];
  chartdata = this.chartService.data.data;
  batteryModule = {
    x: this.chartdata[0].timestamps,
    y: this.chartdata[0].values,
    type: 'scatter'
  };

  currentModel = 0;

  isChecked = false;

  ngOnInit(): void {
    console.log(this.chartdata);
    this.data = [this.batteryModule];
  }

  battertModuleChange(value) {
    this.currentModel = value;
    this.batteryModule.x = this.chartdata[value].timestamps;
    this.batteryModule.y = this.chartdata[value].values;
  }

  changeView(){
    this.isChecked = !this.isChecked;
  }



}
