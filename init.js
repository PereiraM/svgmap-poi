
var mapCanvasBackground     = '#ffffff',
    maxColour               = '#FFDED3',
    minColour               = '#A0D2F0',

    defaultMarkerFill       = '#E1191E',
    defaultMarkerStroke     = '#ffffff',

    hoverMarkerFill         = '#125278',
    hoverMarkerStroke       = '#ffffff',

    defaultRegionFill       = '#cfe8f7',
    defaultRegionStroke     = '#999999',

    hoverRegionFill         = '#cfe8f7',
    hoverRegionStroke       = '#999999',

    detail                  = '';

var dataMarkers  = [
    {id: 'santiago',   detail: 'santiagoDetail',   latLng: [-33.45, -70.67],   name: 'Church of the Company Fire, Santiago, Chile, December 8, 1863'},
    {id: 'halifax',    detail: 'halifaxDetail',    latLng: [44.65, -63.57],    name: 'Halifax explosion, 1917'},
    {id: 'tsugaru',    detail: 'tsugaruDetail',    latLng: [41.50, 140.62],    name: 'Sinking of the Toya Maru, Tsugaru Strait, 1954'},
    {id: 'courrieres', detail: 'courrieresDetail', latLng: [50.46 , 2.94],     name: 'Courrières mine disaster, France, 1906'},
    {id: 'bangladesh', detail: 'bangladeshDetail', latLng: [23.88, 90.28],     name: 'Collapse of the Rana Plaza, Savar Upazila, Bangladesh, April 24, 2013'},
    {id: 'benxihu',    detail: 'benxihuDetail',    latLng: [41.30, 123.77],    name: 'Benxihu Colliery explosion, China, 1942'},
    {id: 'bhopal',     detail: 'bhopalDetail',     latLng: [23.25, 77.42],     name: 'Bhopal disaster, India, 1984'},
    {id: 'chernobyl',  detail: 'chernobylDetail',  latLng: [51.39, 30.10],     name: 'Chernobyl disaster, Ukraine, April 26, 1986'},
    {id: 'kiangya',    detail: 'kiangyaDetail',    latLng: [31.20, 121.50],    name: 'Sinking of the SS Kiangya, off Shanghai, 1948'},
    {id: 'mecca',      detail: 'meccaDetail',      latLng: [21.42, 39.82],     name: 'Stampede by pilgrims inside a pedestrian tunnel in Mecca, 1990'},
    {id: 'titanic',    detail: 'titanicDetail',    latLng: [41.73, -49.95],    name: 'Sinking of The Titanic, North Atlantic, 1912'},
    {id: 'fukushima',  detail: 'fukushimaDetail',  latLng: [37.42,141.03],     name: 'Fukushima, Japan, 2011'},
    {id: 'texas',      detail: 'texasDetail',      latLng: [31.42, -97.82],    name: 'Texas explosion, 2013'},
    {id: 'bpgulf',     detail: 'bpgulfDetail',     latLng: [28.44, -88.21],    name: 'BP Gulf Spill, 2010'},
    {id: 'exxon',      detail: 'exxonDetail',      latLng: [60.83, -146.87],   name: 'Exxon Valdez oil spill, 1989'}
];


$(function(){

  $('.detail').hide();
  $('#defaultDetail').show();

  $('#mapsvg').vectorMap({
    map: 'world_mill_en',
    backgroundColor: mapCanvasBackground,
    zoomOnScroll: false,
    zoomButtons: false,
    markersSelectable: true,
    markersSelectableOne: true,
    markerStyle: {
      initial: {
        fill: defaultMarkerFill,
        stroke: defaultMarkerStroke
      },
      hover: {
        fill: hoverMarkerFill,
        stroke: hoverMarkerStroke
      },
      selected: {
        fill: hoverMarkerFill,
        stroke: hoverMarkerStroke
      }

    },
    markers: dataMarkers,

    onMarkerClick: function(events, index) {

      $('.detail').hide();
      $('.detail').css('display','none');

      var thisDetail = '#' + dataMarkers[index].detail;

      $(thisDetail).show();

    },

    regionStyle: {

      initial: {
        fill: defaultRegionFill,
            "fill-opacity": 1,
        stroke: defaultRegionStroke,
            "stroke-width": 1,
            "stroke-opacity": 1
      }

    },

    /* We don't want anything happening at the country level */
    onRegionOver: function(event, code){
      event.preventDefault();
    },
    onRegionClick: function(event, code){
      event.preventDefault();
    },
    onRegionOut: function(event, code){
      event.preventDefault();
    },
    onRegionLabelShow: function(event, label, code){
      event.preventDefault();
    }

  });
});

