'use strict';
var summation = 0;
var hold = [ ];
//var arrayShop1 = [];
var tables = document.createElement('table');
var form = document.getElementById('forms');
/////Starting from 6, the DAILY TOTAL is number 20
//////Starting from 0, the DAILY TOTAL is number 13

///////CONSTRUCTOR///////////
function Store (location, minCust, maxCust, avgSalePC)
{

  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSalePC = avgSalePC;
  this.arrayShop = [];

  this.randomCust(this.minCust, this.maxCust);
  hold = this.info();
  this.arrayShop = hold;
  this.addArrToTable(this.location, this.arrayShop);
}

/////////END OF CONSTRUCTOR////////////////
Store.prototype.randomCust = function(minCust, maxCust)
{

  return Math.ceil(Math.random() * ((maxCust - minCust) + 1)) + minCust;
};

Store.prototype.info = function()
{

  

  var summation1 = 0;
  for (var i = 6; i < 13; i++ )
  {
    var value = 0;
    value = this.randomCust(this.minCust, this.maxCust);
    this.arrayShop[i - 6] = value; 
    summation1 += parseInt(value);
  }
  var summation2 = 0;
  for ( i = 13; i < 20; i++ )
  {
    value = 0;
    value = this.randomCust(this.minCust, this.maxCust);
    this.arrayShop[i - 6] = value;
    summation2 += parseInt(value); 

  }


  if( i === 20)
  { 
    summation = summation1 + summation2;
    this.arrayShop[14] = summation;
  }
 
  return this.arrayShop;
  
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
  columnForShop = document.createElement('td');

};

/////Creation of table
function createTable(){

  var tableLocation = document.getElementById('content');

  
  var heading = document.createElement('th');
  heading.textContent = '  ';
  tables.appendChild(heading);
  tableLocation.appendChild(tables);

  ///Add time header to columns
  for( var headingCounter = 6 ; headingCounter < 21; headingCounter++){

    heading = document.createElement('th');
    heading.textContent = headingCounter + 'AM';
    if(headingCounter === 12)
    {
      heading.textContent = headingCounter + 'PM';
    }
    if (headingCounter > 12)
    {
      heading.textContent = (headingCounter - 12) + 'PM';
    }
  


    if (headingCounter === 20)
    {
      heading.textContent = 'DAILY TOTAL';
    }

    heading.width = '70px';
    tables.appendChild(heading);
  }


  var rowHeading = document.createElement('tr');
  rowHeading.textContent = '';
  var colMargin = document.createElement('td');
  rowHeading.width = '30px';
  tables.appendChild(rowHeading);
  rowHeading.appendChild(colMargin);
}
//Creating object literals

createTable();

///Creating object 1
var seattle = new Store('Seattle', 23 , 65 , 6.3);


///Creating object 2
var tokyo = new Store('Tokyo', 3 , 24 , 1.2);

///Creating object 3
var dubai = new Store('Dubai', 11, 38, 3.7);

///Creating object 4
var paris = new Store('Paris', 20, 38, 2.3);

///Creating object 5
var lima = new Store('Lima', 2, 16, 4.6);

//////////Function to get data from form

form.addEventListener('submit', function(event) {

  event.preventDefault();
  //var storename = event.target.uname;
  var storename = document.getElementById('uname').value;
  var mincust = event.target.minc.value;
  var maxcust = event.target.maxc.value;
  var avgcust = event.target.avgc.value;

  var StoreS = new Store (storename, mincust, maxcust, avgcust);}
);
