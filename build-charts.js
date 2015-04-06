//pay attention to what can be global variables + what can be local
//xml data should be local hMM wat
//ie basically do errything you can over weekend except buildtable idk

//xml file? excel file, save as CSV (just stuff you wanna save), convert to XML. you can do multiple files
//do diff load xml things like;;;
//doc ready = loadXML(sugar) crap
//loadXML(fat // myfile.xml)

//don't have to follow this template - all of this could be done in parseXML

$(document).ready(function(){
    loadXML();
})

var date = [];
var tons = [];

function loadXML() {
   $.ajax({
   type: "GET",
   url: "sugar-use.xml",
   dataType: "xml"
   success:parseXML(xml);
}

function parseXML(xml) {
  //loop through data
  $(xml).find('year').each(function(){
  //console.log("once for every year");
  var $year = $(this);
  date.push($year.attr("name"));
  tons.push($year.find(tons).text());

  buildHTML();
  buildCharts();
  buildTable();

  )};
}

console.log(year[]);
console.log()

function buildHTML() {
  //store and write all the html code to the page
  //there will be divs like writing where stuff will go like chart1 etc
  //so if you didn't have any HTML that wasn't dynamic (coming from data file), you wouldn' thave to have this
  //this is like the html += stuff; building in html from the data; H1 etc stuff would be separate
  //this is like the pieces / parts that will go in diff places

}

function buildCharts() {
  //do highcharts stuff
}

function buildTable(){
   //do dataTables.js stuff
}
