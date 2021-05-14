function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}

  function optionChanged(newSample) {
    console.log(newSample);
    buildMetadata(newSample);
    buildCharts(newSample);
  
}
function buildMetadata(id)
{
    d3.json("samples.json").then((data) =>
    {
        var metadata = data.metadata;
        var resultArray = metadata.filter(sample => sample.id == id);
        var result = resultArray[0];
        var meta = Object.entries(result)
        var PANEL = d3.select("#sample-metadata")
        PANEL.html("");
        console.log(result)
        meta.forEach(([index,value]) => 
            PANEL.append("h6").text(index.toUpperCase() + " : " +value));
    })

}
function buildCharts(id)
{

}
  
  init();
  