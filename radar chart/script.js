var w = 500,
    h = 500;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ['Yes','No'];

//Data
var d = [
          [
            {axis:"comfort with coworkers",value:0.383459},
            {axis:"comfort with supervisors",value:0.571429},
            {axis:"percieved impact on reputation",value:0.330827+0.082707},
            {axis:"observed/experienced behavior",value:0.410853+0.108384+0.179959},
            {axis:"percieved negative consequences",value:0.556391},
            {axis:"concern vs. physical health",value:0.548872},
          ],[
            {axis:"comfort with coworkers",value:0.190945},
            {axis:"comfort with supervisors",value:0.320866},
            {axis:"percieved impact on reputation",value:0.220472+0.027559},
            {axis:"observed/experienced behavior",value:0.453988+0.131783+0.186047},
            {axis:"percieved negative consequences",value:0.311024},
            {axis:"concern vs. physical health",value:0.202756},
          ]
        ];

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 0.6,
  levels: 6,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body')
    .selectAll('svg')
    .append('svg')
    .attr("width", w+300)
    .attr("height", h)

//Create the title for the legend
var text = svg.append("text")
    .attr("class", "title")
    .attr('transform', 'translate(90,0)') 
    .attr("x", w - 70)
    .attr("y", 10)
    .attr("font-size", "12px")
    .attr("fill", "#404040")
    .text("Formal discussion in workplace?");
        
//Initiate Legend   
var legend = svg.append("g")
    .attr("class", "legend")
    .attr("height", 100)
    .attr("width", 200)
    .attr('transform', 'translate(90,20)') 
    ;
    //Create colour squares
    legend.selectAll('rect')
      .data(LegendOptions)
      .enter()
      .append("rect")
      .attr("x", w - 65)
      .attr("y", function(d, i){ return i * 20;})
      .attr("width", 10)
      .attr("height", 10)
      .style("fill", function(d, i){ return colorscale(i);})
      ;
    //Create text next to squares
    legend.selectAll('text')
      .data(LegendOptions)
      .enter()
      .append("text")
      .attr("x", w - 52)
      .attr("y", function(d, i){ return i * 20 + 9;})
      .attr("font-size", "11px")
      .attr("fill", "#737373")
      .text(function(d) { return d; })
      ; 