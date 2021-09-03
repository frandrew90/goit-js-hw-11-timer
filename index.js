"use strict";

class CounterTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);
    this.daysRef = this.selector.querySelector('[data-value="days"]');
    this.hoursRef = this.selector.querySelector('[data-value="hours"]');
    this.minsRef = this.selector.querySelector('[data-value="mins"]');
    this.secsRef = this.selector.querySelector('[data-value="secs"]');
  }

  getTime() {}
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2019"),
});

const days = Math.floor(time / (1000 * 60 * 60 * 24));

const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

const secs = Math.floor((time % (1000 * 60)) / 1000);
