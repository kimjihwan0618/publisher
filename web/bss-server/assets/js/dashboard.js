window.addEventListener("load", function () {
  var hingom = new naver.maps.LatLng(37.498095, 127.02761),
    map = new naver.maps.Map("map", {
      center: hingom,
      zoom: 15,
    }),
    marker = new naver.maps.Marker({
      map: map,
      position: hingom,
    });

  const contentString = [
    '<div class="inner">',
    "   <h3 class='f__medium'>타이틀 : 강남역</h3>",
    "   <p>부제목 : ************</p>",
    "</div>",
  ].join("");

  var infowindow = new naver.maps.InfoWindow({
    content: contentString,
  });

  naver.maps.Event.addListener(marker, "click", function (e) {
    if (infowindow.getMap()) {
      infowindow.close();
    } else {
      infowindow.open(map, marker);
    }
  });

  setTimeout(function () {
    infowindow.open(map, marker);
    window.dispatchEvent(new Event("resize"));
  }, 600);

  // chart
  var options = {
    series: [
      {
        name: "PRODUCT A",
        data: [44, 55, 41, 67, 22, 43],
      },
      {
        name: "PRODUCT B",
        data: [13, 23, 20, 8, 13, 27],
      },
      {
        name: "PRODUCT C",
        data: [11, 17, 15, 15, 21, 14],
      },
      {
        name: "PRODUCT D",
        data: [21, 7, 25, 13, 22, 8],
      },
    ],
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
      },
    },
    xaxis: {
      type: "datetime",
      categories: [
        "01/01/2011 GMT",
        "01/02/2011 GMT",
        "01/03/2011 GMT",
        "01/04/2011 GMT",
        "01/05/2011 GMT",
        "01/06/2011 GMT",
      ],
    },
    legend: {
      position: "right",
      offsetY: 40,
    },
    fill: {
      opacity: 1,
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
  // // chart
});
