'use strict';
var summation = 0;
//Creating object literals

///Creating object 1
var seattle = {

  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgSalePC:6.3,
  arrayShop: [],
  randomCust : function( minCust, maxCust){

    return Math.ceil(Math.random() * ((maxCust - minCust) + 1)) + minCust;
  },
  info : function()
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
  },
};

///Creating object 2
var tokyo = {

  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgSalePC: 1.2,
  arrayShop: [],

  randomCust : function( minCust, maxCust){

    return Math.ceil(Math.random() * ((maxCust - minCust) + 1)) + minCust;
  },
  info : function()
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

    if (i === 21 )
    {
      this.arrayShop[i - 6] = summation;
    }

  },
};




// ///Creating object 3
var dubai = {

  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgSalePC: 3.7,
  arrayShop: [],

  randomCust : function( minCust, maxCust){

    return Math.ceil(Math.random() * ((maxCust - minCust) + 1)) + minCust;
  },
  info : function()
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

    if (i === 21)
    {
      this.arrayShop[i - 6] = summation;
       
    }

  },
};


///Creating object 4
var paris = {

  location: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgSalePC: 2.3,
  arrayShop: [],

  randomCust : function( minCust, maxCust){

    return Math.ceil(Math.random() * ((maxCust - minCust) + 1)) + minCust;
  },
  info : function()
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

    if (i === 21)
    {
      this.arrayShop[i - 6] = summation;
    }
  },
};

///Creating object 5
var lima = {

  location: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgSalePC: 4.6,
  arrayShop: [],

  randomCust : function( minCust, maxCust){

    return Math.ceil(Math.random() * ((maxCust - minCust) + 1)) + minCust;
  },

  info : function()
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

    if ( i === 21)
    {
      this.arrayShop[i - 6] = summation;
    }
  },

};

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
  if (headingCounter === 21)
  {
    heading.textContent = 'DAILY TOTAL';
  }
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
