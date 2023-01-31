'use strict';

const HOUR_TOTALS = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'];

const LOCATIONS = document.getElementById('locations');

let seattle = {
  name: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  averageCookiePerSale: 6.3,
  cookiesSold: [],
  cookiesSoldPerHour: function () {
    return Math.floor((Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer) * this.averageCookiePerSale);
  },
  calculateCookiesSold: function () {
    for (let i = 0; i < HOUR_TOTALS.length; i++) {
      this.cookiesSold.push(this.cookiesSoldPerHour());
    }
  },
  totalCookiesSold: function () {
    let total = 0;

    for (let idx = 0; idx < this.cookiesSold.length; idx++) {
      total += this.cookiesSold[idx];
    }

    this.cookiesSold.push(total);
  },
  listStore: function () {
    let storeSection = document.createElement('section');
    LOCATIONS.appendChild(storeSection);

    let storeHeading = document.createElement('h2');
    storeHeading.textContent = this.name;
    storeSection.appendChild(storeHeading);

    let storeList = document.createElement('ul');
    storeHeading.appendChild(storeList);

    for (let idx = 0; idx < this.cookiesSold.length; idx++) {
      let storeSales = document.createElement('li');
      storeSales.textContent = `${HOUR_TOTALS[idx]}: ${this.cookiesSold[idx]} cookies`;
      storeList.appendChild(storeSales);
    }
  }
};

let tokyo = {
  name: 'Tokyo',
  minCustomer: 3,
  maxCustomer: 24,
  averageCookiePerSale: 1.2,
  cookiesSold: [],
  cookiesSoldPerHour: function () {
    return Math.floor((Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer) * this.averageCookiePerSale);
  },
  calculateCookiesSold: function () {
    for (let i = 0; i < HOUR_TOTALS.length; i++) {
      this.cookiesSold.push(this.cookiesSoldPerHour());
    }
  },
  totalCookiesSold: function () {
    let total = 0;

    for (let idx = 0; idx < this.cookiesSold.length; idx++) {
      total += this.cookiesSold[idx];
    }

    this.cookiesSold.push(total);
  },
  listStore: function () {
    let storeSection = document.createElement('section');
    LOCATIONS.appendChild(storeSection);

    let storeHeading = document.createElement('h2');
    storeHeading.textContent = this.name;
    storeSection.appendChild(storeHeading);

    let storeList = document.createElement('ul');
    storeHeading.appendChild(storeList);

    for (let idx = 0; idx < this.cookiesSold.length; idx++) {
      let storeSales = document.createElement('li');
      storeSales.textContent = `${HOUR_TOTALS[idx]}: ${this.cookiesSold[idx]} cookies`;
      storeList.appendChild(storeSales);
    }
  }
};

let dubai = {
  name: 'Dubai',
  minCustomer: 11,
  maxCustomer: 38,
  averageCookiePerSale: 3.7,
  cookiesSold: [],
  cookiesSoldPerHour: function () {
    return Math.floor((Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer) * this.averageCookiePerSale);
  },
  calculateCookiesSold: function () {
    for (let i = 0; i < HOUR_TOTALS.length; i++) {
      this.cookiesSold.push(this.cookiesSoldPerHour());
    }
  },
  totalCookiesSold: function () {
    let total = 0;

    for (let idx = 0; idx < this.cookiesSold.length; idx++) {
      total += this.cookiesSold[idx];
    }

    this.cookiesSold.push(total);
  },
  listStore: function () {
    let storeSection = document.createElement('section');
    LOCATIONS.appendChild(storeSection);

    let storeHeading = document.createElement('h2');
    storeHeading.textContent = this.name;
    storeSection.appendChild(storeHeading);

    let storeList = document.createElement('ul');
    storeHeading.appendChild(storeList);

    for (let idx = 0; idx < this.cookiesSold.length; idx++) {
      let storeSales = document.createElement('li');
      storeSales.textContent = `${HOUR_TOTALS[idx]}: ${this.cookiesSold[idx]} cookies`;
      storeList.appendChild(storeSales);
    }
  }
};

let paris = {
  name: 'Paris',
  minCustomer: 20,
  maxCustomer: 38,
  averageCookiePerSale: 2.3,
  cookiesSold: [],
  cookiesSoldPerHour: function () {
    return Math.floor((Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer) * this.averageCookiePerSale);
  },
  calculateCookiesSold: function () {
    for (let i = 0; i < HOUR_TOTALS.length; i++) {
      this.cookiesSold.push(this.cookiesSoldPerHour());
    }
  },
  totalCookiesSold: function () {
    let total = 0;

    for (let idx = 0; idx < this.cookiesSold.length; idx++) {
      total += this.cookiesSold[idx];
    }

    this.cookiesSold.push(total);
  },
  listStore: function () {
    let storeSection = document.createElement('section');
    LOCATIONS.appendChild(storeSection);

    let storeHeading = document.createElement('h2');
    storeHeading.textContent = this.name;
    storeSection.appendChild(storeHeading);

    let storeList = document.createElement('ul');
    storeHeading.appendChild(storeList);

    for (let idx = 0; idx < this.cookiesSold.length; idx++) {
      let storeSales = document.createElement('li');
      storeSales.textContent = `${HOUR_TOTALS[idx]}: ${this.cookiesSold[idx]} cookies`;
      storeList.appendChild(storeSales);
    }
  }
};

let lima = {
  name: 'Lima',
  minCustomer: 2,
  maxCustomer: 16,
  averageCookiePerSale: 4.6,
  cookiesSoldPerHour: function () {
    return Math.floor((Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer) * this.averageCookiePerSale);
  },
  calculateCookiesSold: function () {
    for (let i = 0; i < HOUR_TOTALS.length; i++) {
      this.cookiesSold.push(this.cookiesSoldPerHour());
    }
  },
  totalCookiesSold: function () {
    let total = 0;

    for (let idx = 0; idx < this.cookiesSold.length; idx++) {
      total += this.cookiesSold[idx];
    }

    this.cookiesSold.push(total);
  },
  listStore: function () {
    let storeSection = document.createElement('section');
    LOCATIONS.appendChild(storeSection);

    let storeHeading = document.createElement('h2');
    storeHeading.textContent = this.name;
    storeSection.appendChild(storeHeading);

    let storeList = document.createElement('ul');
    storeHeading.appendChild(storeList);

    for (let idx = 0; idx < this.cookiesSold.length; idx++) {
      let storeSales = document.createElement('li');
      storeSales.textContent = `${HOUR_TOTALS[idx]}: ${this.cookiesSold[idx]} cookies`;
      storeList.appendChild(storeSales);
    }
  }
};

let stores = [seattle, tokyo, dubai, paris, lima];

for (let idx = 0; idx < stores.length; idx++) {
  stores[idx].calculateCookiesSold();
  stores[idx].listStore();
}

