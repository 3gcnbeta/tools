import { Component, Input, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-value-with-rate',
  templateUrl: './value-with-rate.component.html',
  styleUrls: ['./value-with-rate.component.scss']
})
export class ValueWithRateComponent implements OnInit {


  data = 0;
  rate = 0;

  @Input("base")
  base = 0;

  @Input("name")
  name = "";

  @Input("rate-name")
  rateName = "";

  @Input("min")
  min = 0;

  @Input("max")
  max = 100;

  @Input("step")
  step = 0.1;

  @Input("value")
  value = 1.5;

  @Input("change")
  outPutChange = (i: number) => { };


  constructor() { }

  ngOnInit(): void {
  }


  onRateSliderChange(event: MatSliderChange) {
    this.rate = (event.value || 0) / 100;
    this.onRateChange();
  }

  onRateChange() {
    this.data = this.base * this.rate;
    this.onChange();
  }
  onChange() {
    this.outPutChange(this.data);
  }
}
