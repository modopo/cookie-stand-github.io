'use strict';

const HOUR_TOTALS = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//const LOCATIONS = document.getElementById('locations');

function Store(name, minCust, maxCust, avgCookiePerSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.averageCookiePerSale = avgCookiePerSale;
  this.cookiesSoldTotals = [];

  this.randomNumberOfCustomer = function () {
    return Math.floor((Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
  };

  this.cookiesSold = function () {
    for (let i = 0; i < HOUR_TOTALS.length; i++) {
      this.cookiesSoldTotals.push(Math.floor(this.randomNumberOfCustomer() * this.averageCookiePerSale));
    }
  };

  this.totalCookiesSold = function () {
    let total = 0;

    for (let i = 0; i < this.cookiesSoldTotals.length; i++) {
      total += this.cookiesSoldTotals[i];
    }

    return total;
  };
}

let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

let storeList = [seattle, tokyo, dubai, paris, lima]

seattle.cookiesSold();

console.log(seattle);

