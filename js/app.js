'use strict';

//Creating object literals

///Creating object 1
var Seattle = {

  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgSale:6.3,
};

///Creating object 2
var Tokyo = {

  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
};


///Creating object 3
var Dubai = {

  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
};


///Creating object 3
var Paris = {

  location: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
};

///Creating object 3
var Lima = {

  location: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
};

function hours(){

  for( var i = 0; i < 5; i++)
  {
    document.appendChild('List number : ' + i);
    
  }

}
hours();
