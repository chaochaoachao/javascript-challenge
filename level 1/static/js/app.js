// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select("#filter-btn");
var tableBody = d3.select("tbody");




button.on("click", function() {

    // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  //to detect if there is a input to filter
  if (inputValue != ''){

    var filteredData = data.filter(data => data.datetime === inputValue);}

  else {

    var filteredData = tableData; }
  
  // clear the tr and tds  
  var tbody = d3.select("tbody");
  tableBody.selectAll('tr').remove();
  tableBody.selectAll('td').remove();
 
  //populated the table
filteredData.forEach(sighting => {
  var row = tableBody.append("tr");
  Object.entries(sighting).forEach(([key,value]) => {
      var cell = row.append("td");
      cell.text(value);
  }); 
});

  //for each table header insert rows of data

})




