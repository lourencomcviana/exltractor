
var fileName=process.argv[2];
const path = require('path');
var XLSX = require("xlsx");
var fs = require("fs");

fs.exists(fileName, (exists) => {
  if(exists){
    var workbook = XLSX.readFile(fileName);
    var sheet=workbook.SheetNames[0];
    console.log(workbook.Sheets[sheet].C5.v);
  }else{
      console.warn('especifique o caminho do arquivo');
  }
});
