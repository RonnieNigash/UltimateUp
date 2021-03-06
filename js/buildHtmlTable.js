var myList = [
  {
    "Name": "Dan",
    "Score": "9999",
    "Avg Speed:": "9999",
    "Avg Distance": "9999",
    "Avg Airtime": "9999",
    "Avg Rotation": "9999"
  },
  {
    "Name": "Michael",
    "Score": "100",
    "Avg Speed:": "234",
    "Avg Distance": "1234",
    "Avg Airtime": "653",
    "Avg Rotation": "366"
  },
  {
    "Name": "Robot",
    "Score": "354",
    "Avg Speed:": "334",
    "Avg Distance": "276",
    "Avg Airtime": "345",
    "Avg Rotation": "5552"
  }
]


// Builds the HTML Table out of myList json data from Ivy restful service.
 function buildHtmlTable() {
     var columns = addAllColumnHeaders(myList);

     for (var i = 0 ; i < myList.length ; i++) {
         var row$ = $('<tr/>');
         for (var colIndex = 0 ; colIndex < columns.length ; colIndex++) {
             var cellValue = myList[i][columns[colIndex]];

             if (cellValue == null) { cellValue = ""; }

             row$.append($('<td/>').html(cellValue));
         }
         $("#excelDataTable").append(row$);
     }
 }

 // Adds a header row to the table and returns the set of columns.
 // Need to do union of keys from all records as some records may not contain
 // all records
 function addAllColumnHeaders(myList)
 {
     var columnSet = [];
     var headerTr$ = $('<tr/>');

     for (var i = 0 ; i < myList.length ; i++) {
         var rowHash = myList[i];
         for (var key in rowHash) {
             if ($.inArray(key, columnSet) == -1){
                 columnSet.push(key);
                 headerTr$.append($('<th/>').html(key));
             }
         }
     }
     $("#excelDataTable").append(headerTr$);

     return columnSet;
 }
