//Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

// var trace = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
//        "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: 'pie'
//   };
//   var data = [trace];
//   var layout = {
//     title: "'Pie' Chart",
//   };
//   Plotly.newPlot("plotArea", data, layout);

// var words = ['seal','dog','scorpion','salamander','giraffe']
// let re = /^s/
// var s = words.filter(x => x.match(re))
// console.log(s)

//console.log(cityGrowths)
var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();
console.log(sortedCities)
var topFiveCities = sortedCities.slice(0,5);

var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

var trace = {x:topFiveCityNames,y:topFiveCityGrowths,type:'bar'}
var layout = {title: 'Most rapidly growing cities',
            xaxis:{title:"city"},yaxis:{title:"Pop growth 2016-17"}};
Plotly.newPlot("bar-plot",[trace],layout)