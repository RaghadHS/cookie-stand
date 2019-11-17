'use strict';

//Creating object literals

///Creating object 1
var Seattle = {

  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgSalePC:6.3,

  randomCust : function( minCust, maxCust){

    return Math.ceil(Math.random() * ((maxCust - minCust) + 1)) + minCust;
  },
};

///Creating object 2
var Tokyo = {

  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgSalePC: 1.2,

  randomCust : function( minCust, maxCust){

    return Math.ceil(Math.random() * ((maxCust - minCust) + 1)) + minCust;
  },
};


///Creating object 3
var Dubai = {

  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgSalePC: 3.7,

  randomCust : function( minCust, maxCust){

    return Math.ceil(Math.random() * ((maxCust - minCust) + 1)) + minCust;
  },
};


///Creating object 4
var Paris = {

  location: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgSalePC: 2.3,

  randomCust : function( minCust, maxCust){

    return Math.ceil(Math.random() * ((maxCust - minCust) + 1)) + minCust;
  },
};

///Creating object 5
var Lima = {

  location: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgSalePC: 4.6,

  randomCust : function( minCust, maxCust){

    return Math.ceil(Math.random() * ((maxCust - minCust) + 1)) + minCust;
  },

};

///Adding name of Seattle
function infoSeattle(){
  var paragraph = document.createElement('p');
  var content = document.getElementById('content');
  content.appendChild(paragraph);

  var ulList = document.createElement('ul');
  ulList.textContent = Seattle.location;
  content.appendChild(ulList);
  var total = document.createElement('li');
  var value = 0;


  for (var i = 6; i < 13; i++ )
  {
    var liHOURSALE = document.createElement('li');
    value = Seattle.randomCust(Seattle.minCust, Seattle.maxCust);
    liHOURSALE.textContent = i + ' AM: ' + value + ' Cookies';
    total.textContent += value;
    ulList.appendChild(liHOURSALE);
  }
  for (var y = 1; y < 8; y++ )
  {
    liHOURSALE = document.createElement('li');
    value = Seattle.randomCust(Seattle.minCust, Seattle.maxCust);
    liHOURSALE.textContent = y + ' PM: ' + value + ' Cookies' ;
    ulList.appendChild(liHOURSALE);
    total.textContent += value;
  }

  ulList.appendChild(total);
}

infoSeattle();

///Adding name of Tokyo
function infoTokyo(){
  var paragraph = document.createElement('p');
  var content = document.getElementById('content');
  content.appendChild(paragraph);

  var ulList = document.createElement('ul');
  ulList.textContent = Tokyo.location;
  content.appendChild(ulList);
  var total = document.createElement('li');
  var value = 0;
  
  
  for (var i = 6; i < 13; i++ )
  {
    var liHOURSALE = document.createElement('li');
    value = Tokyo.randomCust(Tokyo.minCust, Tokyo.maxCust);
    liHOURSALE.textContent = i + ' AM: ' + value + ' Cookies';
    total.textContent += value;
    ulList.appendChild(liHOURSALE);
  }
  for (var y = 1; y < 8; y++ )
  {
    liHOURSALE = document.createElement('li');
    value = Tokyo.randomCust(Tokyo.minCust, Tokyo.maxCust);
    liHOURSALE.textContent = y + ' PM: ' + value + ' Cookies' ;
    ulList.appendChild(liHOURSALE);
    total.textContent += value;
  }
  
  ulList.appendChild(total);
}
infoTokyo();

///Adding name of Dubai
function infoDubai(){
  var paragraph = document.createElement('p');
  var content = document.getElementById('content');
  content.appendChild(paragraph);
  
  var ulList = document.createElement('ul');
  ulList.textContent = Dubai.location;
  content.appendChild(ulList);
  var total = document.createElement('li');
  var value = 0;
    
    
  for (var i = 6; i < 13; i++ )
  {
    var liHOURSALE = document.createElement('li');
    value = Dubai.randomCust(Dubai.minCust, Dubai.maxCust);
    liHOURSALE.textContent = i + ' AM: ' + value + ' Cookies';
    total.textContent += value;
    ulList.appendChild(liHOURSALE);
  }
  for (var y = 1; y < 8; y++ )
  {
    liHOURSALE = document.createElement('li');
    value = Dubai.randomCust(Dubai.minCust, Dubai.maxCust);
    liHOURSALE.textContent = y + ' PM: ' + value + ' Cookies' ;
    ulList.appendChild(liHOURSALE);
    total.textContent += value;
  }
    
  ulList.appendChild(total);
}
infoDubai();

///Adding name of Paris
function infoParis(){
  var paragraph = document.createElement('p');
  var content = document.getElementById('content');
  content.appendChild(paragraph);
  
  var ulList = document.createElement('ul');
  ulList.textContent = Paris.location;
  content.appendChild(ulList);
  var total = document.createElement('li');
  var value = 0;
    
    
  for (var i = 6; i < 13; i++ )
  {
    var liHOURSALE = document.createElement('li');
    value = Paris.randomCust(Paris.minCust, Paris.maxCust);
    liHOURSALE.textContent = i + ' AM: ' + value + ' Cookies';
    total.textContent += value;
    ulList.appendChild(liHOURSALE);
  }
  for (var y = 1; y < 8; y++ )
  {
    liHOURSALE = document.createElement('li');
    value = Paris.randomCust(Paris.minCust, Paris.maxCust);
    liHOURSALE.textContent = y + ' PM: ' + value + ' Cookies' ;
    ulList.appendChild(liHOURSALE);
    total.textContent += value;
  }
    
  ulList.appendChild(total);
}
infoParis();

///Adding name of Lima
function infoLima(){
  var paragraph = document.createElement('p');
  var content = document.getElementById('content');
  content.appendChild(paragraph);
    
  var ulList = document.createElement('ul');
  ulList.textContent = Lima.location;
  content.appendChild(ulList);
  var total = document.createElement('li');
  var value = 0;
      
      
  for (var i = 6; i < 13; i++ )
  {
    var liHOURSALE = document.createElement('li');
    value = Lima.randomCust(Lima.minCust, Lima.maxCust);
    liHOURSALE.textContent = i + ' AM: ' + value + ' Cookies';
    total.textContent += value;
    ulList.appendChild(liHOURSALE);
  }
  for (var y = 1; y < 8; y++ )
  {
    liHOURSALE = document.createElement('li');
    value = Lima.randomCust(Lima.minCust, Lima.maxCust);
    liHOURSALE.textContent = y + ' PM: ' + value + ' Cookies' ;
    ulList.appendChild(liHOURSALE);
    total.textContent += value;
  }
      
  ulList.appendChild(total);
}
infoLima();

////////////END OF FUNCTIONS////////////

/////Creation of table
var tables = document.createElement('table');
var tableLocation = document.getElementById('content');
tableLocation.appendChild(tables);
///Function to add time header to columns
for( var headingCounter = 6 ; headingCounter < 20; headingCounter++){
  var heading = document.createElement('th');
  heading.textContent = headingCounter + 'AM';
  if(headingCounter === 12)
  {
    heading.textContent = headingCounter + 'PM';
  }
  if (headingCounter > 12)
  {
    heading.textContent = (headingCounter - 12) + 'PM';
  }
  heading.width = '70px';
  tables.appendChild(heading);
}

////Adding the rows to the table
var rowHeading = document.createElement('tr');
rowHeading.textContent = 'First Row';
rowHeading.width = '30px';
tables.appendChild(rowHeading);
