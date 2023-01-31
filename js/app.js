'use strict';

const HOUR_TOTALS = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let salesTable = document.getElementById('salesTable');

let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

let storeList = [seattle, tokyo, dubai, paris, lima];

//constructor function for Store object
function Store(name, minCust, maxCust, avgCookiePerSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.averageCookiePerSale = avgCookiePerSale;
  this.cookieTotals = [];

  this.randomNumberOfCustomer = function () {
    return Math.floor((Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
  };

  this.cookiesSold = function () {
    for (let i = 0; i < HOUR_TOTALS.length; i++) {
      this.cookieTotals.push(Math.floor(this.randomNumberOfCustomer() * this.averageCookiePerSale));
    }
  };

  this.totalCookiesSold = function () {
    let total = 0;

    for (let i = 0; i < this.cookieTotals.length; i++) {
      total += this.cookieTotals[i];
    }

    this.cookieTotals.push(total);
  };

  this.render = function () {
    this.cookiesSold();
    this.totalCookiesSold();

    let salesTableBody = document.querySelector('tbody');
    let tr = document.createElement('tr');
    salesTableBody.appendChild(tr);
    let name = document.createElement('td');
    name.textContent = this.name;
    tr.appendChild(name);

    for (let i = 0; i < this.cookieTotals.length; i++) {
      let td = document.createElement('td');
      td.textContent = this.cookieTotals[i];
      tr.appendChild(td);
    }
  };
}

function renderTableHeader(hours) {
  let thead = document.createElement('thead');
  salesTable.appendChild(thead);

  let tr = document.createElement('tr');
  let emptyTh = document.createElement('th');
  tr.appendChild(emptyTh);

  for (let i = 0; i < hours.length; i++) {
    let th = document.createElement('th');
    th.textContent = hours[i];
    tr.appendChild(th);
  }
  thead.appendChild(tr);

  let locationTotal = document.createElement('th');
  locationTotal.textContent = 'Daily Location Total';
  tr.appendChild(locationTotal);

  let tbody = document.createElement('tbody');
  salesTable.appendChild(tbody);
}

function renderTableFooter(storeList) {
  let tfoot = document.createElement('tfoot');
  salesTable.append(tfoot);

  let tr = document.createElement('tr');
  let totalTd = document.createElement('td');
  totalTd.textContent = 'Totals';
  tr.appendChild(totalTd);

  for (let i = 0; i < HOUR_TOTALS.length + 1; i++) {
    let td = document.createElement('td');

    let totals = 0;
    for (let j = 0; j < storeList.length; j++) {
      totals += storeList[j].cookieTotals[i];
    }

    td.textContent = totals;
    tr.appendChild(td);
  }

  tfoot.appendChild(tr);
}

//excutables
renderTableHeader(HOUR_TOTALS);

/*
storeList.forEach(store => {
  store.render();
});
*/

for (let i = 0; i < storeList.length; i++) {
  storeList[i].render();
}

renderTableFooter(storeList);

