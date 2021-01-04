$(document).on("ready", function () {
    $(".center").slick({
      dots: false,
      infinite: true,
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplay: 500,
    });

    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawPieChart);
    google.charts.setOnLoadCallback(drawLineChart);
    google.charts.setOnLoadCallback(drawBarChart);
    google.charts.setOnLoadCallback(drawColChart);

    // Draw the chart and set the chart values
    function drawPieChart() {
      var data = google.visualization.arrayToDataTable([
        ["Unified Portal", "Project completed"],
        ["NEB", 8],
        ["CTEVT", 8],
        ["UGC", 5],
        ["Kaiser Library", 5],
        ["Medical Education Commission", 5],
      ]);

      // Optional; add a title and set the width and height of the chart
      var options = { title: "Progress Chart" };

      // Display the chart inside the <div> element with id="piechart"
      var chart = new google.visualization.PieChart(
        document.getElementById("piechart")
        ); 
      chart.draw(data, options);
    }
        function drawLineChart() {
        var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2004',  1000,      400],
        ['2005',  1170,      460],
        ['2006',  660,       1120],
        ['2007',  1030,      540]
        ]);

        var options = {
        title: 'Progress Line',
        curveType: 'function',
        legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
    }
    function drawBarChart() {
        var data = google.visualization.arrayToDataTable([
          ["Element", "Density", { role: "style" } ],
          ["NEB", 8.94, ""],
          ["UGC", 10.49, ""],
          ["CTEVT", 19.30, ""],
          ["Kaiser Library", 21.45, ""]
        ]);
  
        var view = new google.visualization.DataView(data);
        view.setColumns([0, 1,
                         { calc: "stringify",
                           sourceColumn: 1,
                           type: "string",
                           role: "annotation" },
                         2]);
  
        var options = {
          title: "Progress Bar",
          bar: {groupWidth: "95%"},
          legend: { position: "none" },
          bars: 'horizontal'
        };
        var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
        chart.draw(view, options);
    }
    function drawColChart() {
        var data = google.visualization.arrayToDataTable([
          ["Element", "Density", { role: "style" } ],
          ["Copper", 8.94, "#b87333"],
          ["Silver", 10.49, "silver"],
          ["Gold", 19.30, "gold"],
          ["Platinum", 21.45, "color: #e5e4e2"]
        ]);
  
        var view = new google.visualization.DataView(data);
        view.setColumns([0, 1,
                         { calc: "stringify",
                           sourceColumn: 1,
                           type: "string",
                           role: "annotation" },
                         2]);
  
        var options = {
          title: "Progress Column",
          bar: {groupWidth: "95%"},
          legend: { position: "none" },
        };
        var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
        chart.draw(view, options);
    }
  });