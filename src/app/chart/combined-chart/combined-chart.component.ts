import { Component, OnInit } from '@angular/core';
import {ChartService} from '../chart.service';

@Component({
  selector: 'app-combined-chart',
  templateUrl: './combined-chart.component.html',
  styleUrls: ['./combined-chart.component.css']
})
export class CombinedChartComponent implements OnInit {

  constructor(private chartService: ChartService) { }

  graph = {
    data: [
        {  type: 'linear', mode: 'lines+points', marker: {color: 'red'} },
        {  type: 'linear' , mode: 'lines+points', marker: {color: 'red'}},
    ],
    layout: {autosize: true, title: 'Combined View Of Twaice Temperature Sensors', xaxis: {tickformat: '%a %e %b \n %Y'}}
};

data = [];
chartdata = this.chartService.data.data;
batteryModule = {};

currentModel = 0;

isChecked = false;

ngOnInit(): void {
  this.batteryModule = {
    x: this.chartdata[0].timestamps,
    y: this.chartdata[0].values,
    type: 'scatter'
  };
  const batteryModule0 = {
    x: this.chartdata[0].timestamps,
    y: this.chartdata[0].values,
    type: 'scatter'
  };
  const batteryModule1 = {
    x: this.chartdata[1].timestamps,
    y: this.chartdata[1].values,
    type: 'scatter'
  };
  const batteryModule2 = {
    x: this.chartdata[2].timestamps,
    y: this.chartdata[2].values,
    type: 'scatter'
  };
  const batteryModule3 = {
    x: this.chartdata[3].timestamps,
    y: this.chartdata[3].values,
    type: 'scatter'
  };

  const batteryModule4 = {
    x: this.chartdata[4].timestamps,
    y: this.chartdata[4].values,
    type: 'scatter'
  };

  const batteryModule5 = {
    x: this.chartdata[5].timestamps,
    y: this.chartdata[5].values,
    type: 'scatter'
  };

  const batteryModule6 = {
    x: this.chartdata[6].timestamps,
    y: this.chartdata[6].values,
    type: 'scatter'
  };
  const batteryModule7 = {
    x: this.chartdata[7].timestamps,
    y: this.chartdata[7].values,
    type: 'scatter'
  };

  const batteryModule8 = {
    x: this.chartdata[8].timestamps,
    y: this.chartdata[8].values,
    type: 'scatter'
  };

  const batteryModule9 = {
    x: this.chartdata[9].timestamps,
    y: this.chartdata[9].values,
    type: 'scatter'
  };

  const batteryModule10 = {
    x: this.chartdata[10].timestamps,
    y: this.chartdata[10].values,
    type: 'scatter'
  };

  const batteryModule11 = {
    x: this.chartdata[11].timestamps,
    y: this.chartdata[11].values,
    type: 'scatter'
  };

  const batteryModule12 = {
    x: this.chartdata[12].timestamps,
    y: this.chartdata[12].values,
    type: 'scatter'
  };

  const batteryModule13 = {
    x: this.chartdata[13].timestamps,
    y: this.chartdata[13].values,
    type: 'scatter'
  };

  const batteryModule14 = {
    x: this.chartdata[14].timestamps,
    y: this.chartdata[14].values,
    type: 'scatter'
  };

  const batteryModule15 = {
    x: this.chartdata[15].timestamps,
    y: this.chartdata[15].values,
    type: 'scatter'
  };

  const batteryModule16 = {
    x: this.chartdata[16].timestamps,
    y: this.chartdata[16].values,
    type: 'scatter'
  };

  const batteryModule17 = {
    x: this.chartdata[17].timestamps,
    y: this.chartdata[17].values,
    type: 'scatter'
  };

  const batteryModule18 = {
    x: this.chartdata[18].timestamps,
    y: this.chartdata[18].values,
    type: 'scatter'
  };
  this.data = [batteryModule0 , batteryModule1, batteryModule2, batteryModule3, batteryModule4, batteryModule5, batteryModule6,
    batteryModule7, batteryModule8, batteryModule9, batteryModule10, batteryModule11, batteryModule12, batteryModule13, batteryModule14,
    batteryModule15, batteryModule16, batteryModule17, batteryModule18];
}



}
