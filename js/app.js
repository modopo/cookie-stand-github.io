'use strict';

const HOUR_TOTALS = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//DOM access
let salesTable = document.getElementById('salesTable');
let storeForm = document.querySelector('form');

//initial Stores
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
  let thead = document.querySelector('thead');

  let tr = document.createElement('tr');
  let emptyTh = document.createElement('th');
  tr.appendChild(emptyTh);

  for (let i = 0; i < hours.length; i++) {
    let th = document.createElement('th');
    th.textContent = hours[i];
    tr.appendChild(th);
  }

  let locationTotal = document.createElement('th');
  locationTotal.textContent = 'Daily Location Total';
  tr.appendChild(locationTotal);

  thead.appendChild(tr);
}

function renderTableFooter(storeList) {
  document.querySelector('tfoot').remove();
  
  let tf = document.createElement('tfoot');
  salesTable.appendChild(tf)
  
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

  tf.appendChild(tr);
}

function ingestStore(event) {
  event.preventDefault();

  let city = event.target.cityName.value;
  let minCustomer = parseInt(event.target.minCustomer.value);
  let maxCustomer = parseInt(event.target.maxCustomer.value);
  let avgCookiesSold = parseInt(event.target.avgCookiesSold.value);

  let newStore = new Store(city, minCustomer, maxCustomer, avgCookiesSold);
  storeList.push(newStore);
  newStore.render();
  
  renderTableFooter(storeList);
}

function renderStoreList(stores) {
  stores.forEach(store => {
    store.render();
  });
}

//excutables
renderTableHeader(HOUR_TOTALS);
renderStoreList(storeList);
renderTableFooter(storeList);

storeForm.addEventListener('submit', ingestStore);