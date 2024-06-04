import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {
  endTime: Date = new Date('2024-12-15T16:00:00Z');
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  private interval: any;

  constructor() { }

  ngOnInit(): void {
    this.calculateTimeLeft();
    this.interval = setInterval(() => {
      this.calculateTimeLeft();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  calculateTimeLeft(): void {
    const now = new Date().getTime();
    const difference = this.endTime.getTime() - now;

    this.days = Math.floor(difference / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((difference % (1000 * 60)) / 1000);
  }
}
