"use strict";

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);
    this.daysRef = this.selector.querySelector('[data-value="days"]');
    this.hoursRef = this.selector.querySelector('[data-value="hours"]');
    this.minsRef = this.selector.querySelector('[data-value="mins"]');
    this.secsRef = this.selector.querySelector('[data-value="secs"]');

    this.targetDate = targetDate;
  }

  getTime(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

    const secs = Math.floor((time % (1000 * 60)) / 1000);

    return { days, hours, mins, secs };
  }

  timeUpdater(time) {
    const { days, hours, mins, secs } = this.getTime(time);
    this.daysRef.textContent = this.padTime(days);
    this.hoursRef.textContent = this.padTime(hours);
    this.minsRef.textContent = this.padTime(mins);
    this.secsRef.textContent = this.padTime(secs);
  }

  padTime(value) {
    return String(value).padStart(2, "0");
  }

  start() {
    const time = this.targetDate - Date.now();
    if (time <= 0) {
      this.daysRef.textContent = "00";
      this.hoursRef.textContent = "00";
      this.minsRef.textContent = "00";
      this.secsRef.textContent = "00";
      return;
    }
    this.timeUpdater(time);
    setTimeout(() => {
      this.start();
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2025"),
});

timer.start();
