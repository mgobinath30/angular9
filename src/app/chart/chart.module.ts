import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart/chart.component';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';
import { CombinedChartComponent } from './combined-chart/combined-chart.component';

PlotlyModule.plotlyjs = PlotlyJS;


@NgModule({
  declarations: [ChartComponent, CombinedChartComponent],
  imports: [
    CommonModule, MatSlideToggleModule, MatSelectModule, PlotlyModule
  ],
  exports: [ChartComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ChartModule { }
