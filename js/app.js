'use strict';
var summation = 0;

///////CONSTRUCTOR///////////
function Store (location, minCust, maxCust, avgSalePC, arrayShop)
{

  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSalePC = avgSalePC;
  this.arrayShop = arrayShop;

}

/////////END OF CONSTRUCTOR////////////////
Store.prototype.randomCust = function(minCust, maxCust)
{

  return Math.ceil(Math.random() * ((maxCust - minCust) + 1)) + minCust;
};

Store.prototype.info = function()
{

  var value = 0;

  for (var i = 6; i < 13; i++ )
  {
    //var liHOURSALE = document.createElement('li');
    value = this.randomCust(this.minCust, this.maxCust);
    this.arrayShop[i - 6] = value; 
    summation = summation + value;
    
  }
  for ( i = 13; i < 21; i++ )
  {

    value = this.randomCust(this.minCust, this.maxCust);
    this.arrayShop[i - 6] = value;
    summation = summation + value;
  }

  if( i === 21)
  {
    this.arrayShop[i - 6] = summation;
  }
};

Store.prototype.addArrToTable = function (location, arrayShop) {

  var newRow = document.createElement('tr');
  tables.appendChild(newRow);
  var cityName = document.createElement('td');
  cityName.textContent = location;
  newRow.appendChild(cityName);
  for ( var c = 0; c < 15; c++)
  {
  
    var columnForShop = document.createElement('td');
    columnForShop.textContent = arrayShop[c];
    newRow.appendChild(columnForShop);
  
  }
  // columnForShop = document.createElement('td');
  // columnForShop.textContent
};






//Creating object literals

///Creating object 1
var contentArr = [];
var seattle = new Store('Seattle', 23 , 65 , 6.3, contentArr);
///Creating object 2
var contentArr2 = [];
var tokyo = new Store('Tokyo', 3 , 24 , 1.2, contentArr2);
///Creating object 3
var contentArr3 = [];
var dubai = new Store('Dubai', 11, 38, 3.7, contentArr3);
///Creating object 4
var contentArr4 = [];
var paris = new Store('Paris', 20, 38, 2.3, contentArr4);
///Creating object 5
var contentArr5 = [];
var lima = new Store('Lima', 2, 16, 4.6, contentArr5);

  
seattle.info();
tokyo.info();
dubai.info();
paris.info();
lima.info();


/////Creation of table
var tables = document.createElement('table');
var tableLocation = document.getElementById('content');
tableLocation.appendChild(tables);
var heading = document.createElement('th');
heading.textContent = '  ';
tables.appendChild(heading);

////Up till here, we created the table and added an empty column 
///to shift everything one cell to the right



///Function to add time header to columns
for( var headingCounter = 6 ; headingCounter < 21; headingCounter++){

  heading = document.createElement('th');
  if (headingCounter === 21)
  {
    heading.textContent = 'DAILY TOTAL';
  }
  heading.textContent = headingCounter + 'AM';
  if(headingCounter === 12)
  {
    heading.textContent = headingCounter + 'PM';
  }
  if (headingCounter > 12)
  {
    heading.textContent = (headingCounter - 12) + 'PM';
  }
  //// CONTINUE HERE
  // if (headingCounter === 21)
  // {
  //   heading.textContent = 'DAILY TOTAL';
  // }
  heading.width = '70px';
  tables.appendChild(heading);
}

////Adding the rows to the table
var rowHeading = document.createElement('tr');
rowHeading.textContent = '';
var colMargin = document.createElement('td');
rowHeading.width = '30px';
tables.appendChild(rowHeading);
rowHeading.appendChild(colMargin);


////Function to add arrayValue in table

function addArrToTable (location, array){
  var newRow = document.createElement('tr');
  tables.appendChild(newRow);
  var cityName = document.createElement('td');
  cityName.textContent = location;
  newRow.appendChild(cityName);
  for ( var c = 0; c < 15; c++)
  {

    var columnForShop = document.createElement('td');
    columnForShop.textContent = array[c];
    newRow.appendChild(columnForShop);

  }
// columnForShop = document.createElement('td');
// columnForShop.textContent
}

addArrToTable(seattle.location, seattle.arrayShop);
addArrToTable(tokyo.location, tokyo.arrayShop);
addArrToTable(dubai.location, dubai.arrayShop);
addArrToTable(paris.location, paris.arrayShop);
addArrToTable(lima.location, lima.arrayShop);
