/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!************************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/documentation/charts/amcharts/maps.js ***!
  \************************************************************************************************/


// Class definition
var KTGeneralAmChartsMaps = function () {
    // Shared variables
    var chart;

    // Private functions
    var _demo1 = function () {
        // Init AmChart -- for more info, please visit the official documentiation: https://www.amcharts.com/docs/v4/
        am4core.ready(function () {

            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end

            // Create map instance
            chart = am4core.create("kt_amcharts_1", am4maps.MapChart);

            // Set map definition
            chart.geodata = am4geodata_worldLow;

            // Set projection
            chart.projection = new am4maps.projections.Miller();

            // Create map polygon series
            var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

            // Exclude Antartica
            polygonSeries.exclude = ["AQ"];

            // Make map load polygon (like country names) data from GeoJSON
            polygonSeries.useGeodata = true;

            // Configure series
            var polygonTemplate = polygonSeries.mapPolygons.template;
            polygonTemplate.tooltipText = "{name}";
            polygonTemplate.polygon.fillOpacity = 0.6;


            // Create hover state and set alternative fill color
            var hs = polygonTemplate.states.create("hover");
            hs.properties.fill = chart.colors.getIndex(0);

            // Add image series
            var imageSeries = chart.series.push(new am4maps.MapImageSeries());
            imageSeries.mapImages.template.propertyFields.longitude = "longitude";
            imageSeries.mapImages.template.propertyFields.latitude = "latitude";
            imageSeries.mapImages.template.tooltipText = "{title}";
            imageSeries.mapImages.template.propertyFields.url = "url";

            var circle = imageSeries.mapImages.template.createChild(am4core.Circle);
            circle.radius = 3;
            circle.propertyFields.fill = "color";
            circle.nonScaling = true;

            var circle2 = imageSeries.mapImages.template.createChild(am4core.Circle);
            circle2.radius = 3;
            circle2.propertyFields.fill = "color";


            circle2.events.on("inited", function (event) {
                animateBullet(event.target);
            })


            function animateBullet(circle) {
                var animation = circle.animate([{ property: "scale", from: 1 / chart.zoomLevel, to: 5 / chart.zoomLevel }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
                animation.events.on("animationended", function (event) {
                    animateBullet(event.target.object);
                })
            }

            var colorSet = new am4core.ColorSet();

            imageSeries.data = [{
                "title": "Brussels",
                "latitude": 50.8371,
                "longitude": 4.3676,
                "color": colorSet.next()
            }, {
                "title": "Copenhagen",
                "latitude": 55.6763,
                "longitude": 12.5681,
                "color": colorSet.next()
            }, {
                "title": "Paris",
                "latitude": 48.8567,
                "longitude": 2.3510,
                "color": colorSet.next()
            }, {
                "title": "Reykjavik",
                "latitude": 64.1353,
                "longitude": -21.8952,
                "color": colorSet.next()
            }, {
                "title": "Moscow",
                "latitude": 55.7558,
                "longitude": 37.6176,
                "color": colorSet.next()
            }, {
                "title": "Madrid",
                "latitude": 40.4167,
                "longitude": -3.7033,
                "color": colorSet.next()
            }, {
                "title": "London",
                "latitude": 51.5002,
                "longitude": -0.1262,
                "url": "http://www.google.co.uk",
                "color": colorSet.next()
            }, {
                "title": "Peking",
                "latitude": 39.9056,
                "longitude": 116.3958,
                "color": colorSet.next()
            }, {
                "title": "New Delhi",
                "latitude": 28.6353,
                "longitude": 77.2250,
                "color": colorSet.next()
            }, {
                "title": "Tokyo",
                "latitude": 35.6785,
                "longitude": 139.6823,
                "url": "http://www.google.co.jp",
                "color": colorSet.next()
            }, {
                "title": "Ankara",
                "latitude": 39.9439,
                "longitude": 32.8560,
                "color": colorSet.next()
            }, {
                "title": "Buenos Aires",
                "latitude": -34.6118,
                "longitude": -58.4173,
                "color": colorSet.next()
            }, {
                "title": "Brasilia",
                "latitude": -15.7801,
                "longitude": -47.9292,
                "color": colorSet.next()
            }, {
                "title": "Ottawa",
                "latitude": 45.4235,
                "longitude": -75.6979,
                "color": colorSet.next()
            }, {
                "title": "Washington",
                "latitude": 38.8921,
                "longitude": -77.0241,
                "color": colorSet.next()
            }, {
                "title": "Kinshasa",
                "latitude": -4.3369,
                "longitude": 15.3271,
                "color": colorSet.next()
            }, {
                "title": "Cairo",
                "latitude": 30.0571,
                "longitude": 31.2272,
                "color": colorSet.next()
            }, {
                "title": "Pretoria",
                "latitude": -25.7463,
                "longitude": 28.1876,
                "color": colorSet.next()
            }];

        }); // end am4core.ready()
    }

    var _demo2 = function () {
        // Init AmChart -- for more info, please visit the official documentiation: https://www.amcharts.com/docs/v4/
        am4core.ready(function () {

            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end

            // Create map instance
            chart = am4core.create("kt_amcharts_2", am4maps.MapChart);
            chart.geodata = am4geodata_worldLow;
            chart.projection = new am4maps.projections.Miller();
            chart.homeZoomLevel = 2.5;
            chart.homeGeoPoint = {
                latitude: 38,
                longitude: -60
            };

            // Create map polygon series
            var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
            polygonSeries.useGeodata = true;
            polygonSeries.mapPolygons.template.fill = chart.colors.getIndex(0).lighten(0.5);
            polygonSeries.mapPolygons.template.nonScalingStroke = true;
            polygonSeries.exclude = ["AQ"];

            // Add line bullets
            var cities = chart.series.push(new am4maps.MapImageSeries());
            cities.mapImages.template.nonScaling = true;

            var city = cities.mapImages.template.createChild(am4core.Circle);
            city.radius = 6;
            city.fill = chart.colors.getIndex(0).brighten(-0.2);
            city.strokeWidth = 2;
            city.stroke = am4core.color("#fff");

            function addCity(coords, title) {
                var city = cities.mapImages.create();
                city.latitude = coords.latitude;
                city.longitude = coords.longitude;
                city.tooltipText = title;
                return city;
            }

            var paris = addCity({ "latitude": 48.8567, "longitude": 2.3510 }, "Paris");
            var toronto = addCity({ "latitude": 43.8163, "longitude": -79.4287 }, "Toronto");
            var la = addCity({ "latitude": 34.3, "longitude": -118.15 }, "Los Angeles");
            var havana = addCity({ "latitude": 23, "longitude": -82 }, "Havana");

            // Add lines
            var lineSeries = chart.series.push(new am4maps.MapArcSeries());
            lineSeries.mapLines.template.line.strokeWidth = 2;
            lineSeries.mapLines.template.line.strokeOpacity = 0.5;
            lineSeries.mapLines.template.line.stroke = city.fill;
            lineSeries.mapLines.template.line.nonScalingStroke = true;
            lineSeries.mapLines.template.line.strokeDasharray = "1,1";
            lineSeries.zIndex = 10;

            var shadowLineSeries = chart.series.push(new am4maps.MapLineSeries());
            shadowLineSeries.mapLines.template.line.strokeOpacity = 0;
            shadowLineSeries.mapLines.template.line.nonScalingStroke = true;
            shadowLineSeries.mapLines.template.shortestDistance = false;
            shadowLineSeries.zIndex = 5;

            function addLine(from, to) {
                var line = lineSeries.mapLines.create();
                line.imagesToConnect = [from, to];
                line.line.controlPointDistance = -0.3;

                var shadowLine = shadowLineSeries.mapLines.create();
                shadowLine.imagesToConnect = [from, to];

                return line;
            }

            addLine(paris, toronto);
            addLine(toronto, la);
            addLine(la, havana);

            // Add plane
            var plane = lineSeries.mapLines.getIndex(0).lineObjects.create();
            plane.position = 0;
            plane.width = 48;
            plane.height = 48;

            plane.adapter.add("scale", function (scale, target) {
                return 0.5 * (1 - (Math.abs(0.5 - target.position)));
            })

            var planeImage = plane.createChild(am4core.Sprite);
            planeImage.scale = 0.08;
            planeImage.horizontalCenter = "middle";
            planeImage.verticalCenter = "middle";
            planeImage.path = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";
            planeImage.fill = chart.colors.getIndex(2).brighten(-0.2);
            planeImage.strokeOpacity = 0;

            var shadowPlane = shadowLineSeries.mapLines.getIndex(0).lineObjects.create();
            shadowPlane.position = 0;
            shadowPlane.width = 48;
            shadowPlane.height = 48;

            var shadowPlaneImage = shadowPlane.createChild(am4core.Sprite);
            shadowPlaneImage.scale = 0.05;
            shadowPlaneImage.horizontalCenter = "middle";
            shadowPlaneImage.verticalCenter = "middle";
            shadowPlaneImage.path = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";
            shadowPlaneImage.fill = am4core.color("#000");
            shadowPlaneImage.strokeOpacity = 0;

            shadowPlane.adapter.add("scale", function (scale, target) {
                target.opacity = (0.6 - (Math.abs(0.5 - target.position)));
                return 0.5 - 0.3 * (1 - (Math.abs(0.5 - target.position)));
            })

            // Plane animation
            var currentLine = 0;
            var direction = 1;
            function flyPlane() {

                // Get current line to attach plane to
                plane.mapLine = lineSeries.mapLines.getIndex(currentLine);
                plane.parent = lineSeries;
                shadowPlane.mapLine = shadowLineSeries.mapLines.getIndex(currentLine);
                shadowPlane.parent = shadowLineSeries;
                shadowPlaneImage.rotation = planeImage.rotation;

                // Set up animation
                var from, to;
                var numLines = lineSeries.mapLines.length;
                if (direction == 1) {
                    from = 0
                    to = 1;
                    if (planeImage.rotation != 0) {
                        planeImage.animate({ to: 0, property: "rotation" }, 1000).events.on("animationended", flyPlane);
                        return;
                    }
                }
                else {
                    from = 1;
                    to = 0;
                    if (planeImage.rotation != 180) {
                        planeImage.animate({ to: 180, property: "rotation" }, 1000).events.on("animationended", flyPlane);
                        return;
                    }
                }

                // Start the animation
                var animation = plane.animate({
                    from: from,
                    to: to,
                    property: "position"
                }, 5000, am4core.ease.sinInOut);
                animation.events.on("animationended", flyPlane)
                /*animation.events.on("animationprogress", function(ev) {
                  var progress = Math.abs(ev.progress - 0.5);
                  //console.log(progress);
                  //planeImage.scale += 0.2;
                });*/

                shadowPlane.animate({
                    from: from,
                    to: to,
                    property: "position"
                }, 5000, am4core.ease.sinInOut);

                // Increment line, or reverse the direction
                currentLine += direction;
                if (currentLine < 0) {
                    currentLine = 0;
                    direction = 1;
                }
                else if ((currentLine + 1) > numLines) {
                    currentLine = numLines - 1;
                    direction = -1;
                }

            }

            // Go!
            flyPlane();

        }); // end am4core.ready()
    }

    var _demo3 = function () {
        // Init AmChart -- for more info, please visit the official documentiation: https://www.amcharts.com/docs/v4/
        am4core.ready(function () {

            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end

            // Create map instance
            chart = am4core.create("kt_amcharts_3", am4maps.MapChart);
            var interfaceColors = new am4core.InterfaceColorSet();

            try {
                chart.geodata = am4geodata_worldLow;
            }
            catch (e) {
                chart.raiseCriticalError(new Error("Map geodata could not be loaded. Please download the latest <a href=\"https://www.amcharts.com/download/download-v4/\">amcharts geodata</a> and extract its contents into the same directory as your amCharts files."));
            }


            var label = chart.createChild(am4core.Label)
            label.text = "12 months (3/7/2019 data) rolling measles\nincidence per 1'000'000 total population. \n Bullet size uses logarithmic scale.";
            label.fontSize = 12;
            label.align = "left";
            label.valign = "bottom"
            label.fill = am4core.color("#927459");
            label.background = new am4core.RoundedRectangle()
            label.background.cornerRadius(10, 10, 10, 10);
            label.padding(10, 10, 10, 10);
            label.marginLeft = 30;
            label.marginBottom = 30;
            label.background.strokeOpacity = 0.3;
            label.background.stroke = am4core.color("#927459");
            label.background.fill = am4core.color("#f9e3ce");
            label.background.fillOpacity = 0.6;

            var dataSource = chart.createChild(am4core.TextLink)
            dataSource.text = "Data source: WHO";
            dataSource.fontSize = 12;
            dataSource.align = "left";
            dataSource.valign = "top"
            dataSource.url = "https://www.who.int/immunization/monitoring_surveillance/burden/vpd/surveillance_type/active/measles_monthlydata/en/"
            dataSource.urlTarget = "_blank";
            dataSource.fill = am4core.color("#927459");
            dataSource.padding(10, 10, 10, 10);
            dataSource.marginLeft = 30;
            dataSource.marginTop = 30;

            // Set projection
            chart.projection = new am4maps.projections.Orthographic();
            chart.panBehavior = "rotateLongLat";
            chart.padding(20, 20, 20, 20);

            // Add zoom control
            chart.zoomControl = new am4maps.ZoomControl();

            var homeButton = new am4core.Button();
            homeButton.events.on("hit", function () {
                chart.goHome();
            });

            homeButton.icon = new am4core.Sprite();
            homeButton.padding(7, 5, 7, 5);
            homeButton.width = 30;
            homeButton.icon.path = "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
            homeButton.marginBottom = 10;
            homeButton.parent = chart.zoomControl;
            homeButton.insertBefore(chart.zoomControl.plusButton);

            chart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color("#bfa58d");
            chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 1;
            chart.deltaLongitude = 20;
            chart.deltaLatitude = -20;

            // limits vertical rotation
            chart.adapter.add("deltaLatitude", function (delatLatitude) {
                return am4core.math.fitToRange(delatLatitude, -90, 90);
            })

            // Create map polygon series

            var shadowPolygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
            shadowPolygonSeries.geodata = am4geodata_continentsLow;

            try {
                shadowPolygonSeries.geodata = am4geodata_continentsLow;
            }
            catch (e) {
                shadowPolygonSeries.raiseCriticalError(new Error("Map geodata could not be loaded. Please download the latest <a href=\"https://www.amcharts.com/download/download-v4/\">amcharts geodata</a> and extract its contents into the same directory as your amCharts files."));
            }

            shadowPolygonSeries.useGeodata = true;
            shadowPolygonSeries.dx = 2;
            shadowPolygonSeries.dy = 2;
            shadowPolygonSeries.mapPolygons.template.fill = am4core.color("#000");
            shadowPolygonSeries.mapPolygons.template.fillOpacity = 0.2;
            shadowPolygonSeries.mapPolygons.template.strokeOpacity = 0;
            shadowPolygonSeries.fillOpacity = 0.1;
            shadowPolygonSeries.fill = am4core.color("#000");


            // Create map polygon series
            var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
            polygonSeries.useGeodata = true;

            polygonSeries.calculateVisualCenter = true;
            polygonSeries.tooltip.background.fillOpacity = 0.2;
            polygonSeries.tooltip.background.cornerRadius = 20;

            var template = polygonSeries.mapPolygons.template;
            template.nonScalingStroke = true;
            template.fill = am4core.color("#f9e3ce");
            template.stroke = am4core.color("#e2c9b0");

            polygonSeries.calculateVisualCenter = true;
            template.propertyFields.id = "id";
            template.tooltipPosition = "fixed";
            template.fillOpacity = 1;

            template.events.on("over", function (event) {
                if (event.target.dummyData) {
                    event.target.dummyData.isHover = true;
                }
            })
            template.events.on("out", function (event) {
                if (event.target.dummyData) {
                    event.target.dummyData.isHover = false;
                }
            })

            var hs = polygonSeries.mapPolygons.template.states.create("hover");
            hs.properties.fillOpacity = 1;
            hs.properties.fill = am4core.color("#deb7ad");


            var graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
            graticuleSeries.mapLines.template.stroke = am4core.color("#fff");
            graticuleSeries.fitExtent = false;
            graticuleSeries.mapLines.template.strokeOpacity = 0.2;
            graticuleSeries.mapLines.template.stroke = am4core.color("#fff");


            var measelsSeries = chart.series.push(new am4maps.MapPolygonSeries())
            measelsSeries.tooltip.background.fillOpacity = 0;
            measelsSeries.tooltip.background.cornerRadius = 20;
            measelsSeries.tooltip.autoTextColor = false;
            measelsSeries.tooltip.label.fill = am4core.color("#000");
            measelsSeries.tooltip.dy = -5;

            var measelTemplate = measelsSeries.mapPolygons.template;
            measelTemplate.fill = am4core.color("#bf7569");
            measelTemplate.strokeOpacity = 0;
            measelTemplate.fillOpacity = 0.75;
            measelTemplate.tooltipPosition = "fixed";



            var hs2 = measelsSeries.mapPolygons.template.states.create("hover");
            hs2.properties.fillOpacity = 1;
            hs2.properties.fill = am4core.color("#86240c");

            polygonSeries.events.on("inited", function () {
                polygonSeries.mapPolygons.each(function (mapPolygon) {
                    var count = data[mapPolygon.id];

                    if (count > 0) {
                        var polygon = measelsSeries.mapPolygons.create();
                        polygon.multiPolygon = am4maps.getCircle(mapPolygon.visualLongitude, mapPolygon.visualLatitude, Math.max(0.2, Math.log(count) * Math.LN10 / 10));
                        polygon.tooltipText = mapPolygon.dataItem.dataContext.name + ": " + count;
                        mapPolygon.dummyData = polygon;
                        polygon.events.on("over", function () {
                            mapPolygon.isHover = true;
                        })
                        polygon.events.on("out", function () {
                            mapPolygon.isHover = false;
                        })
                    }
                    else {
                        mapPolygon.tooltipText = mapPolygon.dataItem.dataContext.name + ": no data";
                        mapPolygon.fillOpacity = 0.9;
                    }

                })
            })


            var data = {
                "AL": 504.38,
                "AM": 6.5,
                "AO": 2.98,
                "AR": 0.32,
                "AT": 10.9,
                "AU": 5.02,
                "AZ": 17.38,
                "BA": 24.45,
                "BD": 13.4,
                "BE": 12.06,
                "BF": 93.37,
                "BG": 1.68,
                "BI": 0.95,
                "BJ": 93.36,
                "BR": 49.42,
                "BT": 10.03,
                "BY": 26.16,
                "CA": 0.96,
                "CD": 69.71,
                "CF": 4.57,
                "CG": 19.7,
                "CH": 6.19,
                "CI": 14.1,
                "CL": 1.4,
                "CM": 41.26,
                "CN": 2.6,
                "CO": 4.48,
                "CY": 7.69,
                "CZ": 23.09,
                "DK": 1.58,
                "EE": 9.91,
                "EG": 0.63,
                "ES": 4.96,
                "FI": 3.27,
                "FR": 43.26,
                "GA": 3.03,
                "GB": 14.3,
                "GE": 809.09,
                "GH": 39.78,
                "GM": 2.45,
                "GN": 45.98,
                "GQ": 23.74,
                "GR": 154.42,
                "HR": 5.46,
                "HU": 1.44,
                "ID": 16.87,
                "IE": 17.56,
                "IL": 412.24,
                "IN": 47.85,
                "IQ": 12.96,
                "IR": 1.13,
                "IT": 44.29,
                "JP": 3.27,
                "KE": 16.8,
                "KG": 253.37,
                "KH": 0.44,
                "KM": 1.26,
                "KZ": 116.3,
                "LA": 1.33,
                "LK": 0.53,
                "LR": 692.27,
                "LS": 5.9,
                "LT": 14.44,
                "LU": 6.95,
                "LV": 6.09,
                "MA": 0.2,
                "MD": 83.75,
                "ME": 319.75,
                "MG": 2386.35,
                "MK": 28.83,
                "ML": 48.68,
                "MM": 40.31,
                "MN": 0.66,
                "MR": 14.65,
                "MT": 11.65,
                "MV": 9.35,
                "MX": 0.04,
                "MY": 86.41,
                "MZ": 13.49,
                "NA": 12.9,
                "NE": 80.88,
                "NG": 31.44,
                "NL": 1.47,
                "NO": 2.47,
                "NP": 10.8,
                "NZ": 9.23,
                "PE": 1.29,
                "PK": 159.14,
                "PL": 8.24,
                "PT": 16.68,
                "RO": 63.05,
                "RS": 473.46,
                "RU": 14.24,
                "RW": 5.45,
                "SE": 2.64,
                "SG": 8.18,
                "SI": 3.37,
                "SK": 112.78,
                "SN": 3.37,
                "SO": 8.03,
                "SS": 19.3,
                "TD": 75.63,
                "TG": 34.84,
                "TH": 81.02,
                "TL": 9.46,
                "TN": 7.8,
                "TR": 7.08,
                "UA": 1439.02,
                "UG": 62.55,
                "US": 1.32,
                "UZ": 0.99,
                "VE": 179.55,
                "ZA": 3.09,
                "ZM": 9.82,
                "ZW": 0.06
            }

        }); // end am4core.ready()
    }

    var _demo4 = function () {
        // Init AmChart -- for more info, please visit the official documentiation: https://www.amcharts.com/docs/v4/
        am4core.ready(function () {

            // Themes begin
            am4core.useTheme(am4themes_frozen);
            am4core.useTheme(am4themes_animated);
            // Themes end

            // Create map instance
            chart = am4core.create("kt_amcharts_4", am4maps.MapChart);
            // Set map definition
            chart.geodata = am4geodata_worldTimeZoneAreasHigh;
            // Set projection
            chart.projection = new am4maps.projections.Miller();
            chart.panBehavior = "move";

            var startColor = chart.colors.getIndex(0)
            var middleColor = chart.colors.getIndex(7)
            var endColor = chart.colors.getIndex(14)

            var interfaceColors = new am4core.InterfaceColorSet();

            // Create map polygon series
            var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
            // Make map load polygon (like country names) data from GeoJSON
            polygonSeries.useGeodata = true;
            polygonSeries.calculateVisualCenter = true;

            var polygonTemplate = polygonSeries.mapPolygons.template;
            polygonTemplate.fillOpacity = 0.6;
            polygonTemplate.nonScalingStroke = true;
            polygonTemplate.strokeWidth = 1;
            polygonTemplate.stroke = interfaceColors.getFor("background");
            polygonTemplate.strokeOpacity = 1;

            polygonTemplate.adapter.add("fill", function (fill, target) {

                if (target.dataItem.index > 0) {
                    return chart.colors.getIndex(target.dataItem.index);
                }
                return fill;
            })
            /// add country borders
            // Create map polygon series
            
            var countrySeries = chart.series.push(new am4maps.MapPolygonSeries());
            // Make map load polygon (like country names) data from GeoJSON
            countrySeries.useGeodata = true;
            countrySeries.geodata = am4geodata_worldLow;
            
            var countryPolygonTemplate = countrySeries.mapPolygons.template;
            countryPolygonTemplate.fillOpacity = 0;
            countryPolygonTemplate.nonScalingStroke = true;
            countryPolygonTemplate.strokeWidth = 1;
            countryPolygonTemplate.stroke = interfaceColors.getFor("background");
            countryPolygonTemplate.strokeOpacity = 0.3;
            

            // Create map polygon series
            var boundsSeries = chart.series.push(new am4maps.MapPolygonSeries());
            boundsSeries.geodata = am4geodata_worldTimeZonesHigh;
            boundsSeries.useGeodata = true;
            boundsSeries.mapPolygons.template.fill = am4core.color(interfaceColors.getFor("alternativeBackground"));
            boundsSeries.mapPolygons.template.fillOpacity = 0.07;
            boundsSeries.mapPolygons.template.nonScalingStroke = true;
            boundsSeries.mapPolygons.template.strokeWidth = 0.5;
            boundsSeries.mapPolygons.template.strokeOpacity = 1;
            boundsSeries.mapPolygons.template.stroke = interfaceColors.getFor("background");
            boundsSeries.tooltipText = "{id}";


            var hs = polygonTemplate.states.create("hover");
            hs.properties.fillOpacity = 1;

            var bhs = boundsSeries.mapPolygons.template.states.create("hover");
            bhs.properties.fillOpacity = 0.3;


            polygonSeries.mapPolygons.template.events.on("over", function (event) {
                var polygon = boundsSeries.getPolygonById(event.target.dataItem.dataContext.id);
                if (polygon) {
                    polygon.isHover = true;
                }
            })

            polygonSeries.mapPolygons.template.events.on("out", function (event) {
                var polygon = boundsSeries.getPolygonById(event.target.dataItem.dataContext.id);
                if (polygon) {
                    polygon.isHover = false;
                }
            })


            var labelSeries = chart.series.push(new am4maps.MapImageSeries());
            var label = labelSeries.mapImages.template.createChild(am4core.Label);
            label.text = "{id}";
            label.strokeOpacity = 0;
            label.fill = am4core.color("#000000");
            label.horizontalCenter = "middle";
            label.fontSize = 9;
            label.nonScaling = true;


            labelSeries.mapImages.template.adapter.add("longitude", (longitude, target) => {
                target.zIndex = 100000;

                var polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);
                if (polygon) {
                    return polygon.visualLongitude
                }
                return longitude;
            })

            labelSeries.mapImages.template.adapter.add("latitude", (latitude, target) => {
                var polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);
                if (polygon) {
                    return polygon.visualLatitude
                }
                return latitude;
            })


            var button = chart.createChild(am4core.SwitchButton);
            button.align = "right";
            button.marginTop = 40;
            button.marginRight = 40;
            button.valign = "top";
            button.leftLabel.text = "Map";
            button.rightLabel.text = "Globe";

            button.events.on("toggled", function () {

                chart.deltaLatitude = 0;
                chart.deltaLongitude = 0;
                chart.deltaGamma = 0;

                if (button.isActive) {
                    chart.projection = new am4maps.projections.Orthographic;
                    chart.panBehavior = "rotateLongLat";
                }
                else {
                    chart.projection = new am4maps.projections.Miller;
                    chart.panBehavior = "move";
                }
            })

            polygonSeries.events.on("datavalidated", function () {
                labelSeries.data = polygonSeries.data;
            })

        }); // end am4core.ready()
    }

    return {
        // Public Functions
        init: function () {
            _demo1();
            _demo2();
            _demo3();
            _demo4();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTGeneralAmChartsMaps.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/charts/amcharts/maps.js":
/*!***********************************************************************!*\
  !*** ./resources/src/js/custom/documentation/charts/amcharts/maps.js ***!
  \***********************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTGeneralAmChartsMaps = function () {\n  // Shared variables\n  var chart; // Private functions\n\n  var _demo1 = function _demo1() {\n    // Init AmChart -- for more info, please visit the official documentiation: https://www.amcharts.com/docs/v4/\n    am4core.ready(function () {\n      // Themes begin\n      am4core.useTheme(am4themes_animated); // Themes end\n      // Create map instance\n\n      chart = am4core.create(\"kt_amcharts_1\", am4maps.MapChart); // Set map definition\n\n      chart.geodata = am4geodata_worldLow; // Set projection\n\n      chart.projection = new am4maps.projections.Miller(); // Create map polygon series\n\n      var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries()); // Exclude Antartica\n\n      polygonSeries.exclude = [\"AQ\"]; // Make map load polygon (like country names) data from GeoJSON\n\n      polygonSeries.useGeodata = true; // Configure series\n\n      var polygonTemplate = polygonSeries.mapPolygons.template;\n      polygonTemplate.tooltipText = \"{name}\";\n      polygonTemplate.polygon.fillOpacity = 0.6; // Create hover state and set alternative fill color\n\n      var hs = polygonTemplate.states.create(\"hover\");\n      hs.properties.fill = chart.colors.getIndex(0); // Add image series\n\n      var imageSeries = chart.series.push(new am4maps.MapImageSeries());\n      imageSeries.mapImages.template.propertyFields.longitude = \"longitude\";\n      imageSeries.mapImages.template.propertyFields.latitude = \"latitude\";\n      imageSeries.mapImages.template.tooltipText = \"{title}\";\n      imageSeries.mapImages.template.propertyFields.url = \"url\";\n      var circle = imageSeries.mapImages.template.createChild(am4core.Circle);\n      circle.radius = 3;\n      circle.propertyFields.fill = \"color\";\n      circle.nonScaling = true;\n      var circle2 = imageSeries.mapImages.template.createChild(am4core.Circle);\n      circle2.radius = 3;\n      circle2.propertyFields.fill = \"color\";\n      circle2.events.on(\"inited\", function (event) {\n        animateBullet(event.target);\n      });\n\n      function animateBullet(circle) {\n        var animation = circle.animate([{\n          property: \"scale\",\n          from: 1 / chart.zoomLevel,\n          to: 5 / chart.zoomLevel\n        }, {\n          property: \"opacity\",\n          from: 1,\n          to: 0\n        }], 1000, am4core.ease.circleOut);\n        animation.events.on(\"animationended\", function (event) {\n          animateBullet(event.target.object);\n        });\n      }\n\n      var colorSet = new am4core.ColorSet();\n      imageSeries.data = [{\n        \"title\": \"Brussels\",\n        \"latitude\": 50.8371,\n        \"longitude\": 4.3676,\n        \"color\": colorSet.next()\n      }, {\n        \"title\": \"Copenhagen\",\n        \"latitude\": 55.6763,\n        \"longitude\": 12.5681,\n        \"color\": colorSet.next()\n      }, {\n        \"title\": \"Paris\",\n        \"latitude\": 48.8567,\n        \"longitude\": 2.3510,\n        \"color\": colorSet.next()\n      }, {\n        \"title\": \"Reykjavik\",\n        \"latitude\": 64.1353,\n        \"longitude\": -21.8952,\n        \"color\": colorSet.next()\n      }, {\n        \"title\": \"Moscow\",\n        \"latitude\": 55.7558,\n        \"longitude\": 37.6176,\n        \"color\": colorSet.next()\n      }, {\n        \"title\": \"Madrid\",\n        \"latitude\": 40.4167,\n        \"longitude\": -3.7033,\n        \"color\": colorSet.next()\n      }, {\n        \"title\": \"London\",\n        \"latitude\": 51.5002,\n        \"longitude\": -0.1262,\n        \"url\": \"http://www.google.co.uk\",\n        \"color\": colorSet.next()\n      }, {\n        \"title\": \"Peking\",\n        \"latitude\": 39.9056,\n        \"longitude\": 116.3958,\n        \"color\": colorSet.next()\n      }, {\n        \"title\": \"New Delhi\",\n        \"latitude\": 28.6353,\n        \"longitude\": 77.2250,\n        \"color\": colorSet.next()\n      }, {\n        \"title\": \"Tokyo\",\n        \"latitude\": 35.6785,\n        \"longitude\": 139.6823,\n        \"url\": \"http://www.google.co.jp\",\n        \"color\": colorSet.next()\n      }, {\n        \"title\": \"Ankara\",\n        \"latitude\": 39.9439,\n        \"longitude\": 32.8560,\n        \"color\": colorSet.next()\n      }, {\n        \"title\": \"Buenos Aires\",\n        \"latitude\": -34.6118,\n        \"longitude\": -58.4173,\n        \"color\": colorSet.next()\n      }, {\n        \"title\": \"Brasilia\",\n        \"latitude\": -15.7801,\n        \"longitude\": -47.9292,\n        \"color\": colorSet.next()\n      }, {\n        \"title\": \"Ottawa\",\n        \"latitude\": 45.4235,\n        \"longitude\": -75.6979,\n        \"color\": colorSet.next()\n      }, {\n        \"title\": \"Washington\",\n        \"latitude\": 38.8921,\n        \"longitude\": -77.0241,\n        \"color\": colorSet.next()\n      }, {\n        \"title\": \"Kinshasa\",\n        \"latitude\": -4.3369,\n        \"longitude\": 15.3271,\n        \"color\": colorSet.next()\n      }, {\n        \"title\": \"Cairo\",\n        \"latitude\": 30.0571,\n        \"longitude\": 31.2272,\n        \"color\": colorSet.next()\n      }, {\n        \"title\": \"Pretoria\",\n        \"latitude\": -25.7463,\n        \"longitude\": 28.1876,\n        \"color\": colorSet.next()\n      }];\n    }); // end am4core.ready()\n  };\n\n  var _demo2 = function _demo2() {\n    // Init AmChart -- for more info, please visit the official documentiation: https://www.amcharts.com/docs/v4/\n    am4core.ready(function () {\n      // Themes begin\n      am4core.useTheme(am4themes_animated); // Themes end\n      // Create map instance\n\n      chart = am4core.create(\"kt_amcharts_2\", am4maps.MapChart);\n      chart.geodata = am4geodata_worldLow;\n      chart.projection = new am4maps.projections.Miller();\n      chart.homeZoomLevel = 2.5;\n      chart.homeGeoPoint = {\n        latitude: 38,\n        longitude: -60\n      }; // Create map polygon series\n\n      var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());\n      polygonSeries.useGeodata = true;\n      polygonSeries.mapPolygons.template.fill = chart.colors.getIndex(0).lighten(0.5);\n      polygonSeries.mapPolygons.template.nonScalingStroke = true;\n      polygonSeries.exclude = [\"AQ\"]; // Add line bullets\n\n      var cities = chart.series.push(new am4maps.MapImageSeries());\n      cities.mapImages.template.nonScaling = true;\n      var city = cities.mapImages.template.createChild(am4core.Circle);\n      city.radius = 6;\n      city.fill = chart.colors.getIndex(0).brighten(-0.2);\n      city.strokeWidth = 2;\n      city.stroke = am4core.color(\"#fff\");\n\n      function addCity(coords, title) {\n        var city = cities.mapImages.create();\n        city.latitude = coords.latitude;\n        city.longitude = coords.longitude;\n        city.tooltipText = title;\n        return city;\n      }\n\n      var paris = addCity({\n        \"latitude\": 48.8567,\n        \"longitude\": 2.3510\n      }, \"Paris\");\n      var toronto = addCity({\n        \"latitude\": 43.8163,\n        \"longitude\": -79.4287\n      }, \"Toronto\");\n      var la = addCity({\n        \"latitude\": 34.3,\n        \"longitude\": -118.15\n      }, \"Los Angeles\");\n      var havana = addCity({\n        \"latitude\": 23,\n        \"longitude\": -82\n      }, \"Havana\"); // Add lines\n\n      var lineSeries = chart.series.push(new am4maps.MapArcSeries());\n      lineSeries.mapLines.template.line.strokeWidth = 2;\n      lineSeries.mapLines.template.line.strokeOpacity = 0.5;\n      lineSeries.mapLines.template.line.stroke = city.fill;\n      lineSeries.mapLines.template.line.nonScalingStroke = true;\n      lineSeries.mapLines.template.line.strokeDasharray = \"1,1\";\n      lineSeries.zIndex = 10;\n      var shadowLineSeries = chart.series.push(new am4maps.MapLineSeries());\n      shadowLineSeries.mapLines.template.line.strokeOpacity = 0;\n      shadowLineSeries.mapLines.template.line.nonScalingStroke = true;\n      shadowLineSeries.mapLines.template.shortestDistance = false;\n      shadowLineSeries.zIndex = 5;\n\n      function addLine(from, to) {\n        var line = lineSeries.mapLines.create();\n        line.imagesToConnect = [from, to];\n        line.line.controlPointDistance = -0.3;\n        var shadowLine = shadowLineSeries.mapLines.create();\n        shadowLine.imagesToConnect = [from, to];\n        return line;\n      }\n\n      addLine(paris, toronto);\n      addLine(toronto, la);\n      addLine(la, havana); // Add plane\n\n      var plane = lineSeries.mapLines.getIndex(0).lineObjects.create();\n      plane.position = 0;\n      plane.width = 48;\n      plane.height = 48;\n      plane.adapter.add(\"scale\", function (scale, target) {\n        return 0.5 * (1 - Math.abs(0.5 - target.position));\n      });\n      var planeImage = plane.createChild(am4core.Sprite);\n      planeImage.scale = 0.08;\n      planeImage.horizontalCenter = \"middle\";\n      planeImage.verticalCenter = \"middle\";\n      planeImage.path = \"m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47\";\n      planeImage.fill = chart.colors.getIndex(2).brighten(-0.2);\n      planeImage.strokeOpacity = 0;\n      var shadowPlane = shadowLineSeries.mapLines.getIndex(0).lineObjects.create();\n      shadowPlane.position = 0;\n      shadowPlane.width = 48;\n      shadowPlane.height = 48;\n      var shadowPlaneImage = shadowPlane.createChild(am4core.Sprite);\n      shadowPlaneImage.scale = 0.05;\n      shadowPlaneImage.horizontalCenter = \"middle\";\n      shadowPlaneImage.verticalCenter = \"middle\";\n      shadowPlaneImage.path = \"m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47\";\n      shadowPlaneImage.fill = am4core.color(\"#000\");\n      shadowPlaneImage.strokeOpacity = 0;\n      shadowPlane.adapter.add(\"scale\", function (scale, target) {\n        target.opacity = 0.6 - Math.abs(0.5 - target.position);\n        return 0.5 - 0.3 * (1 - Math.abs(0.5 - target.position));\n      }); // Plane animation\n\n      var currentLine = 0;\n      var direction = 1;\n\n      function flyPlane() {\n        // Get current line to attach plane to\n        plane.mapLine = lineSeries.mapLines.getIndex(currentLine);\n        plane.parent = lineSeries;\n        shadowPlane.mapLine = shadowLineSeries.mapLines.getIndex(currentLine);\n        shadowPlane.parent = shadowLineSeries;\n        shadowPlaneImage.rotation = planeImage.rotation; // Set up animation\n\n        var from, to;\n        var numLines = lineSeries.mapLines.length;\n\n        if (direction == 1) {\n          from = 0;\n          to = 1;\n\n          if (planeImage.rotation != 0) {\n            planeImage.animate({\n              to: 0,\n              property: \"rotation\"\n            }, 1000).events.on(\"animationended\", flyPlane);\n            return;\n          }\n        } else {\n          from = 1;\n          to = 0;\n\n          if (planeImage.rotation != 180) {\n            planeImage.animate({\n              to: 180,\n              property: \"rotation\"\n            }, 1000).events.on(\"animationended\", flyPlane);\n            return;\n          }\n        } // Start the animation\n\n\n        var animation = plane.animate({\n          from: from,\n          to: to,\n          property: \"position\"\n        }, 5000, am4core.ease.sinInOut);\n        animation.events.on(\"animationended\", flyPlane);\n        /*animation.events.on(\"animationprogress\", function(ev) {\n          var progress = Math.abs(ev.progress - 0.5);\n          //console.log(progress);\n          //planeImage.scale += 0.2;\n        });*/\n\n        shadowPlane.animate({\n          from: from,\n          to: to,\n          property: \"position\"\n        }, 5000, am4core.ease.sinInOut); // Increment line, or reverse the direction\n\n        currentLine += direction;\n\n        if (currentLine < 0) {\n          currentLine = 0;\n          direction = 1;\n        } else if (currentLine + 1 > numLines) {\n          currentLine = numLines - 1;\n          direction = -1;\n        }\n      } // Go!\n\n\n      flyPlane();\n    }); // end am4core.ready()\n  };\n\n  var _demo3 = function _demo3() {\n    // Init AmChart -- for more info, please visit the official documentiation: https://www.amcharts.com/docs/v4/\n    am4core.ready(function () {\n      // Themes begin\n      am4core.useTheme(am4themes_animated); // Themes end\n      // Create map instance\n\n      chart = am4core.create(\"kt_amcharts_3\", am4maps.MapChart);\n      var interfaceColors = new am4core.InterfaceColorSet();\n\n      try {\n        chart.geodata = am4geodata_worldLow;\n      } catch (e) {\n        chart.raiseCriticalError(new Error(\"Map geodata could not be loaded. Please download the latest <a href=\\\"https://www.amcharts.com/download/download-v4/\\\">amcharts geodata</a> and extract its contents into the same directory as your amCharts files.\"));\n      }\n\n      var label = chart.createChild(am4core.Label);\n      label.text = \"12 months (3/7/2019 data) rolling measles\\nincidence per 1'000'000 total population. \\n Bullet size uses logarithmic scale.\";\n      label.fontSize = 12;\n      label.align = \"left\";\n      label.valign = \"bottom\";\n      label.fill = am4core.color(\"#927459\");\n      label.background = new am4core.RoundedRectangle();\n      label.background.cornerRadius(10, 10, 10, 10);\n      label.padding(10, 10, 10, 10);\n      label.marginLeft = 30;\n      label.marginBottom = 30;\n      label.background.strokeOpacity = 0.3;\n      label.background.stroke = am4core.color(\"#927459\");\n      label.background.fill = am4core.color(\"#f9e3ce\");\n      label.background.fillOpacity = 0.6;\n      var dataSource = chart.createChild(am4core.TextLink);\n      dataSource.text = \"Data source: WHO\";\n      dataSource.fontSize = 12;\n      dataSource.align = \"left\";\n      dataSource.valign = \"top\";\n      dataSource.url = \"https://www.who.int/immunization/monitoring_surveillance/burden/vpd/surveillance_type/active/measles_monthlydata/en/\";\n      dataSource.urlTarget = \"_blank\";\n      dataSource.fill = am4core.color(\"#927459\");\n      dataSource.padding(10, 10, 10, 10);\n      dataSource.marginLeft = 30;\n      dataSource.marginTop = 30; // Set projection\n\n      chart.projection = new am4maps.projections.Orthographic();\n      chart.panBehavior = \"rotateLongLat\";\n      chart.padding(20, 20, 20, 20); // Add zoom control\n\n      chart.zoomControl = new am4maps.ZoomControl();\n      var homeButton = new am4core.Button();\n      homeButton.events.on(\"hit\", function () {\n        chart.goHome();\n      });\n      homeButton.icon = new am4core.Sprite();\n      homeButton.padding(7, 5, 7, 5);\n      homeButton.width = 30;\n      homeButton.icon.path = \"M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8\";\n      homeButton.marginBottom = 10;\n      homeButton.parent = chart.zoomControl;\n      homeButton.insertBefore(chart.zoomControl.plusButton);\n      chart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color(\"#bfa58d\");\n      chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 1;\n      chart.deltaLongitude = 20;\n      chart.deltaLatitude = -20; // limits vertical rotation\n\n      chart.adapter.add(\"deltaLatitude\", function (delatLatitude) {\n        return am4core.math.fitToRange(delatLatitude, -90, 90);\n      }); // Create map polygon series\n\n      var shadowPolygonSeries = chart.series.push(new am4maps.MapPolygonSeries());\n      shadowPolygonSeries.geodata = am4geodata_continentsLow;\n\n      try {\n        shadowPolygonSeries.geodata = am4geodata_continentsLow;\n      } catch (e) {\n        shadowPolygonSeries.raiseCriticalError(new Error(\"Map geodata could not be loaded. Please download the latest <a href=\\\"https://www.amcharts.com/download/download-v4/\\\">amcharts geodata</a> and extract its contents into the same directory as your amCharts files.\"));\n      }\n\n      shadowPolygonSeries.useGeodata = true;\n      shadowPolygonSeries.dx = 2;\n      shadowPolygonSeries.dy = 2;\n      shadowPolygonSeries.mapPolygons.template.fill = am4core.color(\"#000\");\n      shadowPolygonSeries.mapPolygons.template.fillOpacity = 0.2;\n      shadowPolygonSeries.mapPolygons.template.strokeOpacity = 0;\n      shadowPolygonSeries.fillOpacity = 0.1;\n      shadowPolygonSeries.fill = am4core.color(\"#000\"); // Create map polygon series\n\n      var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());\n      polygonSeries.useGeodata = true;\n      polygonSeries.calculateVisualCenter = true;\n      polygonSeries.tooltip.background.fillOpacity = 0.2;\n      polygonSeries.tooltip.background.cornerRadius = 20;\n      var template = polygonSeries.mapPolygons.template;\n      template.nonScalingStroke = true;\n      template.fill = am4core.color(\"#f9e3ce\");\n      template.stroke = am4core.color(\"#e2c9b0\");\n      polygonSeries.calculateVisualCenter = true;\n      template.propertyFields.id = \"id\";\n      template.tooltipPosition = \"fixed\";\n      template.fillOpacity = 1;\n      template.events.on(\"over\", function (event) {\n        if (event.target.dummyData) {\n          event.target.dummyData.isHover = true;\n        }\n      });\n      template.events.on(\"out\", function (event) {\n        if (event.target.dummyData) {\n          event.target.dummyData.isHover = false;\n        }\n      });\n      var hs = polygonSeries.mapPolygons.template.states.create(\"hover\");\n      hs.properties.fillOpacity = 1;\n      hs.properties.fill = am4core.color(\"#deb7ad\");\n      var graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());\n      graticuleSeries.mapLines.template.stroke = am4core.color(\"#fff\");\n      graticuleSeries.fitExtent = false;\n      graticuleSeries.mapLines.template.strokeOpacity = 0.2;\n      graticuleSeries.mapLines.template.stroke = am4core.color(\"#fff\");\n      var measelsSeries = chart.series.push(new am4maps.MapPolygonSeries());\n      measelsSeries.tooltip.background.fillOpacity = 0;\n      measelsSeries.tooltip.background.cornerRadius = 20;\n      measelsSeries.tooltip.autoTextColor = false;\n      measelsSeries.tooltip.label.fill = am4core.color(\"#000\");\n      measelsSeries.tooltip.dy = -5;\n      var measelTemplate = measelsSeries.mapPolygons.template;\n      measelTemplate.fill = am4core.color(\"#bf7569\");\n      measelTemplate.strokeOpacity = 0;\n      measelTemplate.fillOpacity = 0.75;\n      measelTemplate.tooltipPosition = \"fixed\";\n      var hs2 = measelsSeries.mapPolygons.template.states.create(\"hover\");\n      hs2.properties.fillOpacity = 1;\n      hs2.properties.fill = am4core.color(\"#86240c\");\n      polygonSeries.events.on(\"inited\", function () {\n        polygonSeries.mapPolygons.each(function (mapPolygon) {\n          var count = data[mapPolygon.id];\n\n          if (count > 0) {\n            var polygon = measelsSeries.mapPolygons.create();\n            polygon.multiPolygon = am4maps.getCircle(mapPolygon.visualLongitude, mapPolygon.visualLatitude, Math.max(0.2, Math.log(count) * Math.LN10 / 10));\n            polygon.tooltipText = mapPolygon.dataItem.dataContext.name + \": \" + count;\n            mapPolygon.dummyData = polygon;\n            polygon.events.on(\"over\", function () {\n              mapPolygon.isHover = true;\n            });\n            polygon.events.on(\"out\", function () {\n              mapPolygon.isHover = false;\n            });\n          } else {\n            mapPolygon.tooltipText = mapPolygon.dataItem.dataContext.name + \": no data\";\n            mapPolygon.fillOpacity = 0.9;\n          }\n        });\n      });\n      var data = {\n        \"AL\": 504.38,\n        \"AM\": 6.5,\n        \"AO\": 2.98,\n        \"AR\": 0.32,\n        \"AT\": 10.9,\n        \"AU\": 5.02,\n        \"AZ\": 17.38,\n        \"BA\": 24.45,\n        \"BD\": 13.4,\n        \"BE\": 12.06,\n        \"BF\": 93.37,\n        \"BG\": 1.68,\n        \"BI\": 0.95,\n        \"BJ\": 93.36,\n        \"BR\": 49.42,\n        \"BT\": 10.03,\n        \"BY\": 26.16,\n        \"CA\": 0.96,\n        \"CD\": 69.71,\n        \"CF\": 4.57,\n        \"CG\": 19.7,\n        \"CH\": 6.19,\n        \"CI\": 14.1,\n        \"CL\": 1.4,\n        \"CM\": 41.26,\n        \"CN\": 2.6,\n        \"CO\": 4.48,\n        \"CY\": 7.69,\n        \"CZ\": 23.09,\n        \"DK\": 1.58,\n        \"EE\": 9.91,\n        \"EG\": 0.63,\n        \"ES\": 4.96,\n        \"FI\": 3.27,\n        \"FR\": 43.26,\n        \"GA\": 3.03,\n        \"GB\": 14.3,\n        \"GE\": 809.09,\n        \"GH\": 39.78,\n        \"GM\": 2.45,\n        \"GN\": 45.98,\n        \"GQ\": 23.74,\n        \"GR\": 154.42,\n        \"HR\": 5.46,\n        \"HU\": 1.44,\n        \"ID\": 16.87,\n        \"IE\": 17.56,\n        \"IL\": 412.24,\n        \"IN\": 47.85,\n        \"IQ\": 12.96,\n        \"IR\": 1.13,\n        \"IT\": 44.29,\n        \"JP\": 3.27,\n        \"KE\": 16.8,\n        \"KG\": 253.37,\n        \"KH\": 0.44,\n        \"KM\": 1.26,\n        \"KZ\": 116.3,\n        \"LA\": 1.33,\n        \"LK\": 0.53,\n        \"LR\": 692.27,\n        \"LS\": 5.9,\n        \"LT\": 14.44,\n        \"LU\": 6.95,\n        \"LV\": 6.09,\n        \"MA\": 0.2,\n        \"MD\": 83.75,\n        \"ME\": 319.75,\n        \"MG\": 2386.35,\n        \"MK\": 28.83,\n        \"ML\": 48.68,\n        \"MM\": 40.31,\n        \"MN\": 0.66,\n        \"MR\": 14.65,\n        \"MT\": 11.65,\n        \"MV\": 9.35,\n        \"MX\": 0.04,\n        \"MY\": 86.41,\n        \"MZ\": 13.49,\n        \"NA\": 12.9,\n        \"NE\": 80.88,\n        \"NG\": 31.44,\n        \"NL\": 1.47,\n        \"NO\": 2.47,\n        \"NP\": 10.8,\n        \"NZ\": 9.23,\n        \"PE\": 1.29,\n        \"PK\": 159.14,\n        \"PL\": 8.24,\n        \"PT\": 16.68,\n        \"RO\": 63.05,\n        \"RS\": 473.46,\n        \"RU\": 14.24,\n        \"RW\": 5.45,\n        \"SE\": 2.64,\n        \"SG\": 8.18,\n        \"SI\": 3.37,\n        \"SK\": 112.78,\n        \"SN\": 3.37,\n        \"SO\": 8.03,\n        \"SS\": 19.3,\n        \"TD\": 75.63,\n        \"TG\": 34.84,\n        \"TH\": 81.02,\n        \"TL\": 9.46,\n        \"TN\": 7.8,\n        \"TR\": 7.08,\n        \"UA\": 1439.02,\n        \"UG\": 62.55,\n        \"US\": 1.32,\n        \"UZ\": 0.99,\n        \"VE\": 179.55,\n        \"ZA\": 3.09,\n        \"ZM\": 9.82,\n        \"ZW\": 0.06\n      };\n    }); // end am4core.ready()\n  };\n\n  var _demo4 = function _demo4() {\n    // Init AmChart -- for more info, please visit the official documentiation: https://www.amcharts.com/docs/v4/\n    am4core.ready(function () {\n      // Themes begin\n      am4core.useTheme(am4themes_frozen);\n      am4core.useTheme(am4themes_animated); // Themes end\n      // Create map instance\n\n      chart = am4core.create(\"kt_amcharts_4\", am4maps.MapChart); // Set map definition\n\n      chart.geodata = am4geodata_worldTimeZoneAreasHigh; // Set projection\n\n      chart.projection = new am4maps.projections.Miller();\n      chart.panBehavior = \"move\";\n      var startColor = chart.colors.getIndex(0);\n      var middleColor = chart.colors.getIndex(7);\n      var endColor = chart.colors.getIndex(14);\n      var interfaceColors = new am4core.InterfaceColorSet(); // Create map polygon series\n\n      var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries()); // Make map load polygon (like country names) data from GeoJSON\n\n      polygonSeries.useGeodata = true;\n      polygonSeries.calculateVisualCenter = true;\n      var polygonTemplate = polygonSeries.mapPolygons.template;\n      polygonTemplate.fillOpacity = 0.6;\n      polygonTemplate.nonScalingStroke = true;\n      polygonTemplate.strokeWidth = 1;\n      polygonTemplate.stroke = interfaceColors.getFor(\"background\");\n      polygonTemplate.strokeOpacity = 1;\n      polygonTemplate.adapter.add(\"fill\", function (fill, target) {\n        if (target.dataItem.index > 0) {\n          return chart.colors.getIndex(target.dataItem.index);\n        }\n\n        return fill;\n      }); /// add country borders\n      // Create map polygon series\n\n      var countrySeries = chart.series.push(new am4maps.MapPolygonSeries()); // Make map load polygon (like country names) data from GeoJSON\n\n      countrySeries.useGeodata = true;\n      countrySeries.geodata = am4geodata_worldLow;\n      var countryPolygonTemplate = countrySeries.mapPolygons.template;\n      countryPolygonTemplate.fillOpacity = 0;\n      countryPolygonTemplate.nonScalingStroke = true;\n      countryPolygonTemplate.strokeWidth = 1;\n      countryPolygonTemplate.stroke = interfaceColors.getFor(\"background\");\n      countryPolygonTemplate.strokeOpacity = 0.3; // Create map polygon series\n\n      var boundsSeries = chart.series.push(new am4maps.MapPolygonSeries());\n      boundsSeries.geodata = am4geodata_worldTimeZonesHigh;\n      boundsSeries.useGeodata = true;\n      boundsSeries.mapPolygons.template.fill = am4core.color(interfaceColors.getFor(\"alternativeBackground\"));\n      boundsSeries.mapPolygons.template.fillOpacity = 0.07;\n      boundsSeries.mapPolygons.template.nonScalingStroke = true;\n      boundsSeries.mapPolygons.template.strokeWidth = 0.5;\n      boundsSeries.mapPolygons.template.strokeOpacity = 1;\n      boundsSeries.mapPolygons.template.stroke = interfaceColors.getFor(\"background\");\n      boundsSeries.tooltipText = \"{id}\";\n      var hs = polygonTemplate.states.create(\"hover\");\n      hs.properties.fillOpacity = 1;\n      var bhs = boundsSeries.mapPolygons.template.states.create(\"hover\");\n      bhs.properties.fillOpacity = 0.3;\n      polygonSeries.mapPolygons.template.events.on(\"over\", function (event) {\n        var polygon = boundsSeries.getPolygonById(event.target.dataItem.dataContext.id);\n\n        if (polygon) {\n          polygon.isHover = true;\n        }\n      });\n      polygonSeries.mapPolygons.template.events.on(\"out\", function (event) {\n        var polygon = boundsSeries.getPolygonById(event.target.dataItem.dataContext.id);\n\n        if (polygon) {\n          polygon.isHover = false;\n        }\n      });\n      var labelSeries = chart.series.push(new am4maps.MapImageSeries());\n      var label = labelSeries.mapImages.template.createChild(am4core.Label);\n      label.text = \"{id}\";\n      label.strokeOpacity = 0;\n      label.fill = am4core.color(\"#000000\");\n      label.horizontalCenter = \"middle\";\n      label.fontSize = 9;\n      label.nonScaling = true;\n      labelSeries.mapImages.template.adapter.add(\"longitude\", function (longitude, target) {\n        target.zIndex = 100000;\n        var polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);\n\n        if (polygon) {\n          return polygon.visualLongitude;\n        }\n\n        return longitude;\n      });\n      labelSeries.mapImages.template.adapter.add(\"latitude\", function (latitude, target) {\n        var polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);\n\n        if (polygon) {\n          return polygon.visualLatitude;\n        }\n\n        return latitude;\n      });\n      var button = chart.createChild(am4core.SwitchButton);\n      button.align = \"right\";\n      button.marginTop = 40;\n      button.marginRight = 40;\n      button.valign = \"top\";\n      button.leftLabel.text = \"Map\";\n      button.rightLabel.text = \"Globe\";\n      button.events.on(\"toggled\", function () {\n        chart.deltaLatitude = 0;\n        chart.deltaLongitude = 0;\n        chart.deltaGamma = 0;\n\n        if (button.isActive) {\n          chart.projection = new am4maps.projections.Orthographic();\n          chart.panBehavior = \"rotateLongLat\";\n        } else {\n          chart.projection = new am4maps.projections.Miller();\n          chart.panBehavior = \"move\";\n        }\n      });\n      polygonSeries.events.on(\"datavalidated\", function () {\n        labelSeries.data = polygonSeries.data;\n      });\n    }); // end am4core.ready()\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      _demo1();\n\n      _demo2();\n\n      _demo3();\n\n      _demo4();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTGeneralAmChartsMaps.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2NoYXJ0cy9hbWNoYXJ0cy9tYXBzLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLHFCQUFxQixHQUFHLFlBQVk7QUFDcEM7QUFDQSxNQUFJQyxLQUFKLENBRm9DLENBSXBDOztBQUNBLE1BQUlDLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQVk7QUFDckI7QUFDQUMsSUFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWMsWUFBWTtBQUV0QjtBQUNBRCxNQUFBQSxPQUFPLENBQUNFLFFBQVIsQ0FBaUJDLGtCQUFqQixFQUhzQixDQUl0QjtBQUVBOztBQUNBTCxNQUFBQSxLQUFLLEdBQUdFLE9BQU8sQ0FBQ0ksTUFBUixDQUFlLGVBQWYsRUFBZ0NDLE9BQU8sQ0FBQ0MsUUFBeEMsQ0FBUixDQVBzQixDQVN0Qjs7QUFDQVIsTUFBQUEsS0FBSyxDQUFDUyxPQUFOLEdBQWdCQyxtQkFBaEIsQ0FWc0IsQ0FZdEI7O0FBQ0FWLE1BQUFBLEtBQUssQ0FBQ1csVUFBTixHQUFtQixJQUFJSixPQUFPLENBQUNLLFdBQVIsQ0FBb0JDLE1BQXhCLEVBQW5CLENBYnNCLENBZXRCOztBQUNBLFVBQUlDLGFBQWEsR0FBR2QsS0FBSyxDQUFDZSxNQUFOLENBQWFDLElBQWIsQ0FBa0IsSUFBSVQsT0FBTyxDQUFDVSxnQkFBWixFQUFsQixDQUFwQixDQWhCc0IsQ0FrQnRCOztBQUNBSCxNQUFBQSxhQUFhLENBQUNJLE9BQWQsR0FBd0IsQ0FBQyxJQUFELENBQXhCLENBbkJzQixDQXFCdEI7O0FBQ0FKLE1BQUFBLGFBQWEsQ0FBQ0ssVUFBZCxHQUEyQixJQUEzQixDQXRCc0IsQ0F3QnRCOztBQUNBLFVBQUlDLGVBQWUsR0FBR04sYUFBYSxDQUFDTyxXQUFkLENBQTBCQyxRQUFoRDtBQUNBRixNQUFBQSxlQUFlLENBQUNHLFdBQWhCLEdBQThCLFFBQTlCO0FBQ0FILE1BQUFBLGVBQWUsQ0FBQ0ksT0FBaEIsQ0FB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QixlQUF4QixFQUF5QyxZQUFZO0FBQ2pEOEosUUFBQUEsV0FBVyxDQUFDL0ksSUFBWixHQUFtQi9DLGFBQWEsQ0FBQytDLElBQWpDO0FBQ0gsT0FGRDtBQUlILEtBckpELEVBRnFCLENBdUpqQjtBQUNQLEdBeEpEOztBQTBKQSxTQUFPO0FBQ0g7QUFDQXVKLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkbk4sTUFBQUEsTUFBTTs7QUFDTjhELE1BQUFBLE1BQU07O0FBQ04yRCxNQUFBQSxNQUFNOztBQUNOb0UsTUFBQUEsTUFBTTtBQUNUO0FBUEUsR0FBUDtBQVNILENBdnpCMkIsRUFBNUIsQyxDQXl6QkE7OztBQUNBdUIsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFZO0FBQ2xDdk4sRUFBQUEscUJBQXFCLENBQUNxTixJQUF0QjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2NoYXJ0cy9hbWNoYXJ0cy9tYXBzLmpzP2U2YTMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVEdlbmVyYWxBbUNoYXJ0c01hcHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gU2hhcmVkIHZhcmlhYmxlc1xuICAgIHZhciBjaGFydDtcblxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgdmFyIF9kZW1vMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gSW5pdCBBbUNoYXJ0IC0tIGZvciBtb3JlIGluZm8sIHBsZWFzZSB2aXNpdCB0aGUgb2ZmaWNpYWwgZG9jdW1lbnRpYXRpb246IGh0dHBzOi8vd3d3LmFtY2hhcnRzLmNvbS9kb2NzL3Y0L1xuICAgICAgICBhbTRjb3JlLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgLy8gVGhlbWVzIGJlZ2luXG4gICAgICAgICAgICBhbTRjb3JlLnVzZVRoZW1lKGFtNHRoZW1lc19hbmltYXRlZCk7XG4gICAgICAgICAgICAvLyBUaGVtZXMgZW5kXG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBtYXAgaW5zdGFuY2VcbiAgICAgICAgICAgIGNoYXJ0ID0gYW00Y29yZS5jcmVhdGUoXCJrdF9hbWNoYXJ0c18xXCIsIGFtNG1hcHMuTWFwQ2hhcnQpO1xuXG4gICAgICAgICAgICAvLyBTZXQgbWFwIGRlZmluaXRpb25cbiAgICAgICAgICAgIGNoYXJ0Lmdlb2RhdGEgPSBhbTRnZW9kYXRhX3dvcmxkTG93O1xuXG4gICAgICAgICAgICAvLyBTZXQgcHJvamVjdGlvblxuICAgICAgICAgICAgY2hhcnQucHJvamVjdGlvbiA9IG5ldyBhbTRtYXBzLnByb2plY3Rpb25zLk1pbGxlcigpO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgbWFwIHBvbHlnb24gc2VyaWVzXG4gICAgICAgICAgICB2YXIgcG9seWdvblNlcmllcyA9IGNoYXJ0LnNlcmllcy5wdXNoKG5ldyBhbTRtYXBzLk1hcFBvbHlnb25TZXJpZXMoKSk7XG5cbiAgICAgICAgICAgIC8vIEV4Y2x1ZGUgQW50YXJ0aWNhXG4gICAgICAgICAgICBwb2x5Z29uU2VyaWVzLmV4Y2x1ZGUgPSBbXCJBUVwiXTtcblxuICAgICAgICAgICAgLy8gTWFrZSBtYXAgbG9hZCBwb2x5Z29uIChsaWtlIGNvdW50cnkgbmFtZXMpIGRhdGEgZnJvbSBHZW9KU09OXG4gICAgICAgICAgICBwb2x5Z29uU2VyaWVzLnVzZUdlb2RhdGEgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBDb25maWd1cmUgc2VyaWVzXG4gICAgICAgICAgICB2YXIgcG9seWdvblRlbXBsYXRlID0gcG9seWdvblNlcmllcy5tYXBQb2x5Z29ucy50ZW1wbGF0ZTtcbiAgICAgICAgICAgIHBvbHlnb25UZW1wbGF0ZS50b29sdGlwVGV4dCA9IFwie25hbWV9XCI7XG4gICAgICAgICAgICBwb2x5Z29uVGVtcGxhdGUucG9seWdvbi5maWxsT3BhY2l0eSA9IDAuNjtcblxuXG4gICAgICAgICAgICAvLyBDcmVhdGUgaG92ZXIgc3RhdGUgYW5kIHNldCBhbHRlcm5hdGl2ZSBmaWxsIGNvbG9yXG4gICAgICAgICAgICB2YXIgaHMgPSBwb2x5Z29uVGVtcGxhdGUuc3RhdGVzLmNyZWF0ZShcImhvdmVyXCIpO1xuICAgICAgICAgICAgaHMucHJvcGVydGllcy5maWxsID0gY2hhcnQuY29sb3JzLmdldEluZGV4KDApO1xuXG4gICAgICAgICAgICAvLyBBZGQgaW1hZ2Ugc2VyaWVzXG4gICAgICAgICAgICB2YXIgaW1hZ2VTZXJpZXMgPSBjaGFydC5zZXJpZXMucHVzaChuZXcgYW00bWFwcy5NYXBJbWFnZVNlcmllcygpKTtcbiAgICAgICAgICAgIGltYWdlU2VyaWVzLm1hcEltYWdlcy50ZW1wbGF0ZS5wcm9wZXJ0eUZpZWxkcy5sb25naXR1ZGUgPSBcImxvbmdpdHVkZVwiO1xuICAgICAgICAgICAgaW1hZ2VTZXJpZXMubWFwSW1hZ2VzLnRlbXBsYXRlLnByb3BlcnR5RmllbGRzLmxhdGl0dWRlID0gXCJsYXRpdHVkZVwiO1xuICAgICAgICAgICAgaW1hZ2VTZXJpZXMubWFwSW1hZ2VzLnRlbXBsYXRlLnRvb2x0aXBUZXh0ID0gXCJ7dGl0bGV9XCI7XG4gICAgICAgICAgICBpbWFnZVNlcmllcy5tYXBJbWFnZXMudGVtcGxhdGUucHJvcGVydHlGaWVsZHMudXJsID0gXCJ1cmxcIjtcblxuICAgICAgICAgICAgdmFyIGNpcmNsZSA9IGltYWdlU2VyaWVzLm1hcEltYWdlcy50ZW1wbGF0ZS5jcmVhdGVDaGlsZChhbTRjb3JlLkNpcmNsZSk7XG4gICAgICAgICAgICBjaXJjbGUucmFkaXVzID0gMztcbiAgICAgICAgICAgIGNpcmNsZS5wcm9wZXJ0eUZpZWxkcy5maWxsID0gXCJjb2xvclwiO1xuICAgICAgICAgICAgY2lyY2xlLm5vblNjYWxpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICB2YXIgY2lyY2xlMiA9IGltYWdlU2VyaWVzLm1hcEltYWdlcy50ZW1wbGF0ZS5jcmVhdGVDaGlsZChhbTRjb3JlLkNpcmNsZSk7XG4gICAgICAgICAgICBjaXJjbGUyLnJhZGl1cyA9IDM7XG4gICAgICAgICAgICBjaXJjbGUyLnByb3BlcnR5RmllbGRzLmZpbGwgPSBcImNvbG9yXCI7XG5cblxuICAgICAgICAgICAgY2lyY2xlMi5ldmVudHMub24oXCJpbml0ZWRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0ZUJ1bGxldChldmVudC50YXJnZXQpO1xuICAgICAgICAgICAgfSlcblxuXG4gICAgICAgICAgICBmdW5jdGlvbiBhbmltYXRlQnVsbGV0KGNpcmNsZSkge1xuICAgICAgICAgICAgICAgIHZhciBhbmltYXRpb24gPSBjaXJjbGUuYW5pbWF0ZShbeyBwcm9wZXJ0eTogXCJzY2FsZVwiLCBmcm9tOiAxIC8gY2hhcnQuem9vbUxldmVsLCB0bzogNSAvIGNoYXJ0Lnpvb21MZXZlbCB9LCB7IHByb3BlcnR5OiBcIm9wYWNpdHlcIiwgZnJvbTogMSwgdG86IDAgfV0sIDEwMDAsIGFtNGNvcmUuZWFzZS5jaXJjbGVPdXQpO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5ldmVudHMub24oXCJhbmltYXRpb25lbmRlZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZUJ1bGxldChldmVudC50YXJnZXQub2JqZWN0KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgY29sb3JTZXQgPSBuZXcgYW00Y29yZS5Db2xvclNldCgpO1xuXG4gICAgICAgICAgICBpbWFnZVNlcmllcy5kYXRhID0gW3tcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiQnJ1c3NlbHNcIixcbiAgICAgICAgICAgICAgICBcImxhdGl0dWRlXCI6IDUwLjgzNzEsXG4gICAgICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogNC4zNjc2LFxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JTZXQubmV4dCgpXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkNvcGVuaGFnZW5cIixcbiAgICAgICAgICAgICAgICBcImxhdGl0dWRlXCI6IDU1LjY3NjMsXG4gICAgICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogMTIuNTY4MSxcbiAgICAgICAgICAgICAgICBcImNvbG9yXCI6IGNvbG9yU2V0Lm5leHQoKVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJQYXJpc1wiLFxuICAgICAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogNDguODU2NyxcbiAgICAgICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAyLjM1MTAsXG4gICAgICAgICAgICAgICAgXCJjb2xvclwiOiBjb2xvclNldC5uZXh0KClcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiUmV5a2phdmlrXCIsXG4gICAgICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiA2NC4xMzUzLFxuICAgICAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IC0yMS44OTUyLFxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JTZXQubmV4dCgpXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIk1vc2Nvd1wiLFxuICAgICAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogNTUuNzU1OCxcbiAgICAgICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAzNy42MTc2LFxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JTZXQubmV4dCgpXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIk1hZHJpZFwiLFxuICAgICAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogNDAuNDE2NyxcbiAgICAgICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAtMy43MDMzLFxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JTZXQubmV4dCgpXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkxvbmRvblwiLFxuICAgICAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogNTEuNTAwMixcbiAgICAgICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAtMC4xMjYyLFxuICAgICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cDovL3d3dy5nb29nbGUuY28udWtcIixcbiAgICAgICAgICAgICAgICBcImNvbG9yXCI6IGNvbG9yU2V0Lm5leHQoKVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJQZWtpbmdcIixcbiAgICAgICAgICAgICAgICBcImxhdGl0dWRlXCI6IDM5LjkwNTYsXG4gICAgICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogMTE2LjM5NTgsXG4gICAgICAgICAgICAgICAgXCJjb2xvclwiOiBjb2xvclNldC5uZXh0KClcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiTmV3IERlbGhpXCIsXG4gICAgICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiAyOC42MzUzLFxuICAgICAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IDc3LjIyNTAsXG4gICAgICAgICAgICAgICAgXCJjb2xvclwiOiBjb2xvclNldC5uZXh0KClcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiVG9reW9cIixcbiAgICAgICAgICAgICAgICBcImxhdGl0dWRlXCI6IDM1LjY3ODUsXG4gICAgICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogMTM5LjY4MjMsXG4gICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwOi8vd3d3Lmdvb2dsZS5jby5qcFwiLFxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JTZXQubmV4dCgpXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkFua2FyYVwiLFxuICAgICAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogMzkuOTQzOSxcbiAgICAgICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAzMi44NTYwLFxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JTZXQubmV4dCgpXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkJ1ZW5vcyBBaXJlc1wiLFxuICAgICAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogLTM0LjYxMTgsXG4gICAgICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogLTU4LjQxNzMsXG4gICAgICAgICAgICAgICAgXCJjb2xvclwiOiBjb2xvclNldC5uZXh0KClcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiQnJhc2lsaWFcIixcbiAgICAgICAgICAgICAgICBcImxhdGl0dWRlXCI6IC0xNS43ODAxLFxuICAgICAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IC00Ny45MjkyLFxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JTZXQubmV4dCgpXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIk90dGF3YVwiLFxuICAgICAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogNDUuNDIzNSxcbiAgICAgICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAtNzUuNjk3OSxcbiAgICAgICAgICAgICAgICBcImNvbG9yXCI6IGNvbG9yU2V0Lm5leHQoKVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJXYXNoaW5ndG9uXCIsXG4gICAgICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiAzOC44OTIxLFxuICAgICAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IC03Ny4wMjQxLFxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JTZXQubmV4dCgpXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIktpbnNoYXNhXCIsXG4gICAgICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiAtNC4zMzY5LFxuICAgICAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IDE1LjMyNzEsXG4gICAgICAgICAgICAgICAgXCJjb2xvclwiOiBjb2xvclNldC5uZXh0KClcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiQ2Fpcm9cIixcbiAgICAgICAgICAgICAgICBcImxhdGl0dWRlXCI6IDMwLjA1NzEsXG4gICAgICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogMzEuMjI3MixcbiAgICAgICAgICAgICAgICBcImNvbG9yXCI6IGNvbG9yU2V0Lm5leHQoKVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJQcmV0b3JpYVwiLFxuICAgICAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogLTI1Ljc0NjMsXG4gICAgICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogMjguMTg3NixcbiAgICAgICAgICAgICAgICBcImNvbG9yXCI6IGNvbG9yU2V0Lm5leHQoKVxuICAgICAgICAgICAgfV07XG5cbiAgICAgICAgfSk7IC8vIGVuZCBhbTRjb3JlLnJlYWR5KClcbiAgICB9XG5cbiAgICB2YXIgX2RlbW8yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBJbml0IEFtQ2hhcnQgLS0gZm9yIG1vcmUgaW5mbywgcGxlYXNlIHZpc2l0IHRoZSBvZmZpY2lhbCBkb2N1bWVudGlhdGlvbjogaHR0cHM6Ly93d3cuYW1jaGFydHMuY29tL2RvY3MvdjQvXG4gICAgICAgIGFtNGNvcmUucmVhZHkoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAvLyBUaGVtZXMgYmVnaW5cbiAgICAgICAgICAgIGFtNGNvcmUudXNlVGhlbWUoYW00dGhlbWVzX2FuaW1hdGVkKTtcbiAgICAgICAgICAgIC8vIFRoZW1lcyBlbmRcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIG1hcCBpbnN0YW5jZVxuICAgICAgICAgICAgY2hhcnQgPSBhbTRjb3JlLmNyZWF0ZShcImt0X2FtY2hhcnRzXzJcIiwgYW00bWFwcy5NYXBDaGFydCk7XG4gICAgICAgICAgICBjaGFydC5nZW9kYXRhID0gYW00Z2VvZGF0YV93b3JsZExvdztcbiAgICAgICAgICAgIGNoYXJ0LnByb2plY3Rpb24gPSBuZXcgYW00bWFwcy5wcm9qZWN0aW9ucy5NaWxsZXIoKTtcbiAgICAgICAgICAgIGNoYXJ0LmhvbWVab29tTGV2ZWwgPSAyLjU7XG4gICAgICAgICAgICBjaGFydC5ob21lR2VvUG9pbnQgPSB7XG4gICAgICAgICAgICAgICAgbGF0aXR1ZGU6IDM4LFxuICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogLTYwXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgbWFwIHBvbHlnb24gc2VyaWVzXG4gICAgICAgICAgICB2YXIgcG9seWdvblNlcmllcyA9IGNoYXJ0LnNlcmllcy5wdXNoKG5ldyBhbTRtYXBzLk1hcFBvbHlnb25TZXJpZXMoKSk7XG4gICAgICAgICAgICBwb2x5Z29uU2VyaWVzLnVzZUdlb2RhdGEgPSB0cnVlO1xuICAgICAgICAgICAgcG9seWdvblNlcmllcy5tYXBQb2x5Z29ucy50ZW1wbGF0ZS5maWxsID0gY2hhcnQuY29sb3JzLmdldEluZGV4KDApLmxpZ2h0ZW4oMC41KTtcbiAgICAgICAgICAgIHBvbHlnb25TZXJpZXMubWFwUG9seWdvbnMudGVtcGxhdGUubm9uU2NhbGluZ1N0cm9rZSA9IHRydWU7XG4gICAgICAgICAgICBwb2x5Z29uU2VyaWVzLmV4Y2x1ZGUgPSBbXCJBUVwiXTtcblxuICAgICAgICAgICAgLy8gQWRkIGxpbmUgYnVsbGV0c1xuICAgICAgICAgICAgdmFyIGNpdGllcyA9IGNoYXJ0LnNlcmllcy5wdXNoKG5ldyBhbTRtYXBzLk1hcEltYWdlU2VyaWVzKCkpO1xuICAgICAgICAgICAgY2l0aWVzLm1hcEltYWdlcy50ZW1wbGF0ZS5ub25TY2FsaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgdmFyIGNpdHkgPSBjaXRpZXMubWFwSW1hZ2VzLnRlbXBsYXRlLmNyZWF0ZUNoaWxkKGFtNGNvcmUuQ2lyY2xlKTtcbiAgICAgICAgICAgIGNpdHkucmFkaXVzID0gNjtcbiAgICAgICAgICAgIGNpdHkuZmlsbCA9IGNoYXJ0LmNvbG9ycy5nZXRJbmRleCgwKS5icmlnaHRlbigtMC4yKTtcbiAgICAgICAgICAgIGNpdHkuc3Ryb2tlV2lkdGggPSAyO1xuICAgICAgICAgICAgY2l0eS5zdHJva2UgPSBhbTRjb3JlLmNvbG9yKFwiI2ZmZlwiKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gYWRkQ2l0eShjb29yZHMsIHRpdGxlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNpdHkgPSBjaXRpZXMubWFwSW1hZ2VzLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgIGNpdHkubGF0aXR1ZGUgPSBjb29yZHMubGF0aXR1ZGU7XG4gICAgICAgICAgICAgICAgY2l0eS5sb25naXR1ZGUgPSBjb29yZHMubG9uZ2l0dWRlO1xuICAgICAgICAgICAgICAgIGNpdHkudG9vbHRpcFRleHQgPSB0aXRsZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2l0eTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHBhcmlzID0gYWRkQ2l0eSh7IFwibGF0aXR1ZGVcIjogNDguODU2NywgXCJsb25naXR1ZGVcIjogMi4zNTEwIH0sIFwiUGFyaXNcIik7XG4gICAgICAgICAgICB2YXIgdG9yb250byA9IGFkZENpdHkoeyBcImxhdGl0dWRlXCI6IDQzLjgxNjMsIFwibG9uZ2l0dWRlXCI6IC03OS40Mjg3IH0sIFwiVG9yb250b1wiKTtcbiAgICAgICAgICAgIHZhciBsYSA9IGFkZENpdHkoeyBcImxhdGl0dWRlXCI6IDM0LjMsIFwibG9uZ2l0dWRlXCI6IC0xMTguMTUgfSwgXCJMb3MgQW5nZWxlc1wiKTtcbiAgICAgICAgICAgIHZhciBoYXZhbmEgPSBhZGRDaXR5KHsgXCJsYXRpdHVkZVwiOiAyMywgXCJsb25naXR1ZGVcIjogLTgyIH0sIFwiSGF2YW5hXCIpO1xuXG4gICAgICAgICAgICAvLyBBZGQgbGluZXNcbiAgICAgICAgICAgIHZhciBsaW5lU2VyaWVzID0gY2hhcnQuc2VyaWVzLnB1c2gobmV3IGFtNG1hcHMuTWFwQXJjU2VyaWVzKCkpO1xuICAgICAgICAgICAgbGluZVNlcmllcy5tYXBMaW5lcy50ZW1wbGF0ZS5saW5lLnN0cm9rZVdpZHRoID0gMjtcbiAgICAgICAgICAgIGxpbmVTZXJpZXMubWFwTGluZXMudGVtcGxhdGUubGluZS5zdHJva2VPcGFjaXR5ID0gMC41O1xuICAgICAgICAgICAgbGluZVNlcmllcy5tYXBMaW5lcy50ZW1wbGF0ZS5saW5lLnN0cm9rZSA9IGNpdHkuZmlsbDtcbiAgICAgICAgICAgIGxpbmVTZXJpZXMubWFwTGluZXMudGVtcGxhdGUubGluZS5ub25TY2FsaW5nU3Ryb2tlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxpbmVTZXJpZXMubWFwTGluZXMudGVtcGxhdGUubGluZS5zdHJva2VEYXNoYXJyYXkgPSBcIjEsMVwiO1xuICAgICAgICAgICAgbGluZVNlcmllcy56SW5kZXggPSAxMDtcblxuICAgICAgICAgICAgdmFyIHNoYWRvd0xpbmVTZXJpZXMgPSBjaGFydC5zZXJpZXMucHVzaChuZXcgYW00bWFwcy5NYXBMaW5lU2VyaWVzKCkpO1xuICAgICAgICAgICAgc2hhZG93TGluZVNlcmllcy5tYXBMaW5lcy50ZW1wbGF0ZS5saW5lLnN0cm9rZU9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgc2hhZG93TGluZVNlcmllcy5tYXBMaW5lcy50ZW1wbGF0ZS5saW5lLm5vblNjYWxpbmdTdHJva2UgPSB0cnVlO1xuICAgICAgICAgICAgc2hhZG93TGluZVNlcmllcy5tYXBMaW5lcy50ZW1wbGF0ZS5zaG9ydGVzdERpc3RhbmNlID0gZmFsc2U7XG4gICAgICAgICAgICBzaGFkb3dMaW5lU2VyaWVzLnpJbmRleCA9IDU7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGFkZExpbmUoZnJvbSwgdG8pIHtcbiAgICAgICAgICAgICAgICB2YXIgbGluZSA9IGxpbmVTZXJpZXMubWFwTGluZXMuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgbGluZS5pbWFnZXNUb0Nvbm5lY3QgPSBbZnJvbSwgdG9dO1xuICAgICAgICAgICAgICAgIGxpbmUubGluZS5jb250cm9sUG9pbnREaXN0YW5jZSA9IC0wLjM7XG5cbiAgICAgICAgICAgICAgICB2YXIgc2hhZG93TGluZSA9IHNoYWRvd0xpbmVTZXJpZXMubWFwTGluZXMuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgc2hhZG93TGluZS5pbWFnZXNUb0Nvbm5lY3QgPSBbZnJvbSwgdG9dO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFkZExpbmUocGFyaXMsIHRvcm9udG8pO1xuICAgICAgICAgICAgYWRkTGluZSh0b3JvbnRvLCBsYSk7XG4gICAgICAgICAgICBhZGRMaW5lKGxhLCBoYXZhbmEpO1xuXG4gICAgICAgICAgICAvLyBBZGQgcGxhbmVcbiAgICAgICAgICAgIHZhciBwbGFuZSA9IGxpbmVTZXJpZXMubWFwTGluZXMuZ2V0SW5kZXgoMCkubGluZU9iamVjdHMuY3JlYXRlKCk7XG4gICAgICAgICAgICBwbGFuZS5wb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICBwbGFuZS53aWR0aCA9IDQ4O1xuICAgICAgICAgICAgcGxhbmUuaGVpZ2h0ID0gNDg7XG5cbiAgICAgICAgICAgIHBsYW5lLmFkYXB0ZXIuYWRkKFwic2NhbGVcIiwgZnVuY3Rpb24gKHNjYWxlLCB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMC41ICogKDEgLSAoTWF0aC5hYnMoMC41IC0gdGFyZ2V0LnBvc2l0aW9uKSkpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgdmFyIHBsYW5lSW1hZ2UgPSBwbGFuZS5jcmVhdGVDaGlsZChhbTRjb3JlLlNwcml0ZSk7XG4gICAgICAgICAgICBwbGFuZUltYWdlLnNjYWxlID0gMC4wODtcbiAgICAgICAgICAgIHBsYW5lSW1hZ2UuaG9yaXpvbnRhbENlbnRlciA9IFwibWlkZGxlXCI7XG4gICAgICAgICAgICBwbGFuZUltYWdlLnZlcnRpY2FsQ2VudGVyID0gXCJtaWRkbGVcIjtcbiAgICAgICAgICAgIHBsYW5lSW1hZ2UucGF0aCA9IFwibTIsMTA2aDI4bDI0LDMwaDcybC00NCwtMTMzaDM1bDgwLDEzMmg5OGMyMSwwIDIxLDM0IDAsMzRsLTk4LDAgLTgwLDEzNGgtMzVsNDMsLTEzM2gtNzFsLTI0LDMwaC0yOGwxNSwtNDdcIjtcbiAgICAgICAgICAgIHBsYW5lSW1hZ2UuZmlsbCA9IGNoYXJ0LmNvbG9ycy5nZXRJbmRleCgyKS5icmlnaHRlbigtMC4yKTtcbiAgICAgICAgICAgIHBsYW5lSW1hZ2Uuc3Ryb2tlT3BhY2l0eSA9IDA7XG5cbiAgICAgICAgICAgIHZhciBzaGFkb3dQbGFuZSA9IHNoYWRvd0xpbmVTZXJpZXMubWFwTGluZXMuZ2V0SW5kZXgoMCkubGluZU9iamVjdHMuY3JlYXRlKCk7XG4gICAgICAgICAgICBzaGFkb3dQbGFuZS5wb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICBzaGFkb3dQbGFuZS53aWR0aCA9IDQ4O1xuICAgICAgICAgICAgc2hhZG93UGxhbmUuaGVpZ2h0ID0gNDg7XG5cbiAgICAgICAgICAgIHZhciBzaGFkb3dQbGFuZUltYWdlID0gc2hhZG93UGxhbmUuY3JlYXRlQ2hpbGQoYW00Y29yZS5TcHJpdGUpO1xuICAgICAgICAgICAgc2hhZG93UGxhbmVJbWFnZS5zY2FsZSA9IDAuMDU7XG4gICAgICAgICAgICBzaGFkb3dQbGFuZUltYWdlLmhvcml6b250YWxDZW50ZXIgPSBcIm1pZGRsZVwiO1xuICAgICAgICAgICAgc2hhZG93UGxhbmVJbWFnZS52ZXJ0aWNhbENlbnRlciA9IFwibWlkZGxlXCI7XG4gICAgICAgICAgICBzaGFkb3dQbGFuZUltYWdlLnBhdGggPSBcIm0yLDEwNmgyOGwyNCwzMGg3MmwtNDQsLTEzM2gzNWw4MCwxMzJoOThjMjEsMCAyMSwzNCAwLDM0bC05OCwwIC04MCwxMzRoLTM1bDQzLC0xMzNoLTcxbC0yNCwzMGgtMjhsMTUsLTQ3XCI7XG4gICAgICAgICAgICBzaGFkb3dQbGFuZUltYWdlLmZpbGwgPSBhbTRjb3JlLmNvbG9yKFwiIzAwMFwiKTtcbiAgICAgICAgICAgIHNoYWRvd1BsYW5lSW1hZ2Uuc3Ryb2tlT3BhY2l0eSA9IDA7XG5cbiAgICAgICAgICAgIHNoYWRvd1BsYW5lLmFkYXB0ZXIuYWRkKFwic2NhbGVcIiwgZnVuY3Rpb24gKHNjYWxlLCB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQub3BhY2l0eSA9ICgwLjYgLSAoTWF0aC5hYnMoMC41IC0gdGFyZ2V0LnBvc2l0aW9uKSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiAwLjUgLSAwLjMgKiAoMSAtIChNYXRoLmFicygwLjUgLSB0YXJnZXQucG9zaXRpb24pKSk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvLyBQbGFuZSBhbmltYXRpb25cbiAgICAgICAgICAgIHZhciBjdXJyZW50TGluZSA9IDA7XG4gICAgICAgICAgICB2YXIgZGlyZWN0aW9uID0gMTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGZseVBsYW5lKCkge1xuXG4gICAgICAgICAgICAgICAgLy8gR2V0IGN1cnJlbnQgbGluZSB0byBhdHRhY2ggcGxhbmUgdG9cbiAgICAgICAgICAgICAgICBwbGFuZS5tYXBMaW5lID0gbGluZVNlcmllcy5tYXBMaW5lcy5nZXRJbmRleChjdXJyZW50TGluZSk7XG4gICAgICAgICAgICAgICAgcGxhbmUucGFyZW50ID0gbGluZVNlcmllcztcbiAgICAgICAgICAgICAgICBzaGFkb3dQbGFuZS5tYXBMaW5lID0gc2hhZG93TGluZVNlcmllcy5tYXBMaW5lcy5nZXRJbmRleChjdXJyZW50TGluZSk7XG4gICAgICAgICAgICAgICAgc2hhZG93UGxhbmUucGFyZW50ID0gc2hhZG93TGluZVNlcmllcztcbiAgICAgICAgICAgICAgICBzaGFkb3dQbGFuZUltYWdlLnJvdGF0aW9uID0gcGxhbmVJbWFnZS5yb3RhdGlvbjtcblxuICAgICAgICAgICAgICAgIC8vIFNldCB1cCBhbmltYXRpb25cbiAgICAgICAgICAgICAgICB2YXIgZnJvbSwgdG87XG4gICAgICAgICAgICAgICAgdmFyIG51bUxpbmVzID0gbGluZVNlcmllcy5tYXBMaW5lcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb20gPSAwXG4gICAgICAgICAgICAgICAgICAgIHRvID0gMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYW5lSW1hZ2Uucm90YXRpb24gIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxhbmVJbWFnZS5hbmltYXRlKHsgdG86IDAsIHByb3BlcnR5OiBcInJvdGF0aW9uXCIgfSwgMTAwMCkuZXZlbnRzLm9uKFwiYW5pbWF0aW9uZW5kZWRcIiwgZmx5UGxhbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmcm9tID0gMTtcbiAgICAgICAgICAgICAgICAgICAgdG8gPSAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAocGxhbmVJbWFnZS5yb3RhdGlvbiAhPSAxODApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYW5lSW1hZ2UuYW5pbWF0ZSh7IHRvOiAxODAsIHByb3BlcnR5OiBcInJvdGF0aW9uXCIgfSwgMTAwMCkuZXZlbnRzLm9uKFwiYW5pbWF0aW9uZW5kZWRcIiwgZmx5UGxhbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gU3RhcnQgdGhlIGFuaW1hdGlvblxuICAgICAgICAgICAgICAgIHZhciBhbmltYXRpb24gPSBwbGFuZS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogZnJvbSxcbiAgICAgICAgICAgICAgICAgICAgdG86IHRvLFxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTogXCJwb3NpdGlvblwiXG4gICAgICAgICAgICAgICAgfSwgNTAwMCwgYW00Y29yZS5lYXNlLnNpbkluT3V0KTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24uZXZlbnRzLm9uKFwiYW5pbWF0aW9uZW5kZWRcIiwgZmx5UGxhbmUpXG4gICAgICAgICAgICAgICAgLyphbmltYXRpb24uZXZlbnRzLm9uKFwiYW5pbWF0aW9ucHJvZ3Jlc3NcIiwgZnVuY3Rpb24oZXYpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBwcm9ncmVzcyA9IE1hdGguYWJzKGV2LnByb2dyZXNzIC0gMC41KTtcbiAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocHJvZ3Jlc3MpO1xuICAgICAgICAgICAgICAgICAgLy9wbGFuZUltYWdlLnNjYWxlICs9IDAuMjtcbiAgICAgICAgICAgICAgICB9KTsqL1xuXG4gICAgICAgICAgICAgICAgc2hhZG93UGxhbmUuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGZyb206IGZyb20sXG4gICAgICAgICAgICAgICAgICAgIHRvOiB0byxcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk6IFwicG9zaXRpb25cIlxuICAgICAgICAgICAgICAgIH0sIDUwMDAsIGFtNGNvcmUuZWFzZS5zaW5Jbk91dCk7XG5cbiAgICAgICAgICAgICAgICAvLyBJbmNyZW1lbnQgbGluZSwgb3IgcmV2ZXJzZSB0aGUgZGlyZWN0aW9uXG4gICAgICAgICAgICAgICAgY3VycmVudExpbmUgKz0gZGlyZWN0aW9uO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50TGluZSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudExpbmUgPSAwO1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICgoY3VycmVudExpbmUgKyAxKSA+IG51bUxpbmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMaW5lID0gbnVtTGluZXMgLSAxO1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSAtMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gR28hXG4gICAgICAgICAgICBmbHlQbGFuZSgpO1xuXG4gICAgICAgIH0pOyAvLyBlbmQgYW00Y29yZS5yZWFkeSgpXG4gICAgfVxuXG4gICAgdmFyIF9kZW1vMyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gSW5pdCBBbUNoYXJ0IC0tIGZvciBtb3JlIGluZm8sIHBsZWFzZSB2aXNpdCB0aGUgb2ZmaWNpYWwgZG9jdW1lbnRpYXRpb246IGh0dHBzOi8vd3d3LmFtY2hhcnRzLmNvbS9kb2NzL3Y0L1xuICAgICAgICBhbTRjb3JlLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgLy8gVGhlbWVzIGJlZ2luXG4gICAgICAgICAgICBhbTRjb3JlLnVzZVRoZW1lKGFtNHRoZW1lc19hbmltYXRlZCk7XG4gICAgICAgICAgICAvLyBUaGVtZXMgZW5kXG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBtYXAgaW5zdGFuY2VcbiAgICAgICAgICAgIGNoYXJ0ID0gYW00Y29yZS5jcmVhdGUoXCJrdF9hbWNoYXJ0c18zXCIsIGFtNG1hcHMuTWFwQ2hhcnQpO1xuICAgICAgICAgICAgdmFyIGludGVyZmFjZUNvbG9ycyA9IG5ldyBhbTRjb3JlLkludGVyZmFjZUNvbG9yU2V0KCk7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY2hhcnQuZ2VvZGF0YSA9IGFtNGdlb2RhdGFfd29ybGRMb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNoYXJ0LnJhaXNlQ3JpdGljYWxFcnJvcihuZXcgRXJyb3IoXCJNYXAgZ2VvZGF0YSBjb3VsZCBub3QgYmUgbG9hZGVkLiBQbGVhc2UgZG93bmxvYWQgdGhlIGxhdGVzdCA8YSBocmVmPVxcXCJodHRwczovL3d3dy5hbWNoYXJ0cy5jb20vZG93bmxvYWQvZG93bmxvYWQtdjQvXFxcIj5hbWNoYXJ0cyBnZW9kYXRhPC9hPiBhbmQgZXh0cmFjdCBpdHMgY29udGVudHMgaW50byB0aGUgc2FtZSBkaXJlY3RvcnkgYXMgeW91ciBhbUNoYXJ0cyBmaWxlcy5cIikpO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIHZhciBsYWJlbCA9IGNoYXJ0LmNyZWF0ZUNoaWxkKGFtNGNvcmUuTGFiZWwpXG4gICAgICAgICAgICBsYWJlbC50ZXh0ID0gXCIxMiBtb250aHMgKDMvNy8yMDE5IGRhdGEpIHJvbGxpbmcgbWVhc2xlc1xcbmluY2lkZW5jZSBwZXIgMScwMDAnMDAwIHRvdGFsIHBvcHVsYXRpb24uIFxcbiBCdWxsZXQgc2l6ZSB1c2VzIGxvZ2FyaXRobWljIHNjYWxlLlwiO1xuICAgICAgICAgICAgbGFiZWwuZm9udFNpemUgPSAxMjtcbiAgICAgICAgICAgIGxhYmVsLmFsaWduID0gXCJsZWZ0XCI7XG4gICAgICAgICAgICBsYWJlbC52YWxpZ24gPSBcImJvdHRvbVwiXG4gICAgICAgICAgICBsYWJlbC5maWxsID0gYW00Y29yZS5jb2xvcihcIiM5Mjc0NTlcIik7XG4gICAgICAgICAgICBsYWJlbC5iYWNrZ3JvdW5kID0gbmV3IGFtNGNvcmUuUm91bmRlZFJlY3RhbmdsZSgpXG4gICAgICAgICAgICBsYWJlbC5iYWNrZ3JvdW5kLmNvcm5lclJhZGl1cygxMCwgMTAsIDEwLCAxMCk7XG4gICAgICAgICAgICBsYWJlbC5wYWRkaW5nKDEwLCAxMCwgMTAsIDEwKTtcbiAgICAgICAgICAgIGxhYmVsLm1hcmdpbkxlZnQgPSAzMDtcbiAgICAgICAgICAgIGxhYmVsLm1hcmdpbkJvdHRvbSA9IDMwO1xuICAgICAgICAgICAgbGFiZWwuYmFja2dyb3VuZC5zdHJva2VPcGFjaXR5ID0gMC4zO1xuICAgICAgICAgICAgbGFiZWwuYmFja2dyb3VuZC5zdHJva2UgPSBhbTRjb3JlLmNvbG9yKFwiIzkyNzQ1OVwiKTtcbiAgICAgICAgICAgIGxhYmVsLmJhY2tncm91bmQuZmlsbCA9IGFtNGNvcmUuY29sb3IoXCIjZjllM2NlXCIpO1xuICAgICAgICAgICAgbGFiZWwuYmFja2dyb3VuZC5maWxsT3BhY2l0eSA9IDAuNjtcblxuICAgICAgICAgICAgdmFyIGRhdGFTb3VyY2UgPSBjaGFydC5jcmVhdGVDaGlsZChhbTRjb3JlLlRleHRMaW5rKVxuICAgICAgICAgICAgZGF0YVNvdXJjZS50ZXh0ID0gXCJEYXRhIHNvdXJjZTogV0hPXCI7XG4gICAgICAgICAgICBkYXRhU291cmNlLmZvbnRTaXplID0gMTI7XG4gICAgICAgICAgICBkYXRhU291cmNlLmFsaWduID0gXCJsZWZ0XCI7XG4gICAgICAgICAgICBkYXRhU291cmNlLnZhbGlnbiA9IFwidG9wXCJcbiAgICAgICAgICAgIGRhdGFTb3VyY2UudXJsID0gXCJodHRwczovL3d3dy53aG8uaW50L2ltbXVuaXphdGlvbi9tb25pdG9yaW5nX3N1cnZlaWxsYW5jZS9idXJkZW4vdnBkL3N1cnZlaWxsYW5jZV90eXBlL2FjdGl2ZS9tZWFzbGVzX21vbnRobHlkYXRhL2VuL1wiXG4gICAgICAgICAgICBkYXRhU291cmNlLnVybFRhcmdldCA9IFwiX2JsYW5rXCI7XG4gICAgICAgICAgICBkYXRhU291cmNlLmZpbGwgPSBhbTRjb3JlLmNvbG9yKFwiIzkyNzQ1OVwiKTtcbiAgICAgICAgICAgIGRhdGFTb3VyY2UucGFkZGluZygxMCwgMTAsIDEwLCAxMCk7XG4gICAgICAgICAgICBkYXRhU291cmNlLm1hcmdpbkxlZnQgPSAzMDtcbiAgICAgICAgICAgIGRhdGFTb3VyY2UubWFyZ2luVG9wID0gMzA7XG5cbiAgICAgICAgICAgIC8vIFNldCBwcm9qZWN0aW9uXG4gICAgICAgICAgICBjaGFydC5wcm9qZWN0aW9uID0gbmV3IGFtNG1hcHMucHJvamVjdGlvbnMuT3J0aG9ncmFwaGljKCk7XG4gICAgICAgICAgICBjaGFydC5wYW5CZWhhdmlvciA9IFwicm90YXRlTG9uZ0xhdFwiO1xuICAgICAgICAgICAgY2hhcnQucGFkZGluZygyMCwgMjAsIDIwLCAyMCk7XG5cbiAgICAgICAgICAgIC8vIEFkZCB6b29tIGNvbnRyb2xcbiAgICAgICAgICAgIGNoYXJ0Lnpvb21Db250cm9sID0gbmV3IGFtNG1hcHMuWm9vbUNvbnRyb2woKTtcblxuICAgICAgICAgICAgdmFyIGhvbWVCdXR0b24gPSBuZXcgYW00Y29yZS5CdXR0b24oKTtcbiAgICAgICAgICAgIGhvbWVCdXR0b24uZXZlbnRzLm9uKFwiaGl0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjaGFydC5nb0hvbWUoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBob21lQnV0dG9uLmljb24gPSBuZXcgYW00Y29yZS5TcHJpdGUoKTtcbiAgICAgICAgICAgIGhvbWVCdXR0b24ucGFkZGluZyg3LCA1LCA3LCA1KTtcbiAgICAgICAgICAgIGhvbWVCdXR0b24ud2lkdGggPSAzMDtcbiAgICAgICAgICAgIGhvbWVCdXR0b24uaWNvbi5wYXRoID0gXCJNMTYsOCBMMTQsOCBMMTQsMTYgTDEwLDE2IEwxMCwxMCBMNiwxMCBMNiwxNiBMMiwxNiBMMiw4IEwwLDggTDgsMCBMMTYsOCBaIE0xNiw4XCI7XG4gICAgICAgICAgICBob21lQnV0dG9uLm1hcmdpbkJvdHRvbSA9IDEwO1xuICAgICAgICAgICAgaG9tZUJ1dHRvbi5wYXJlbnQgPSBjaGFydC56b29tQ29udHJvbDtcbiAgICAgICAgICAgIGhvbWVCdXR0b24uaW5zZXJ0QmVmb3JlKGNoYXJ0Lnpvb21Db250cm9sLnBsdXNCdXR0b24pO1xuXG4gICAgICAgICAgICBjaGFydC5iYWNrZ3JvdW5kU2VyaWVzLm1hcFBvbHlnb25zLnRlbXBsYXRlLnBvbHlnb24uZmlsbCA9IGFtNGNvcmUuY29sb3IoXCIjYmZhNThkXCIpO1xuICAgICAgICAgICAgY2hhcnQuYmFja2dyb3VuZFNlcmllcy5tYXBQb2x5Z29ucy50ZW1wbGF0ZS5wb2x5Z29uLmZpbGxPcGFjaXR5ID0gMTtcbiAgICAgICAgICAgIGNoYXJ0LmRlbHRhTG9uZ2l0dWRlID0gMjA7XG4gICAgICAgICAgICBjaGFydC5kZWx0YUxhdGl0dWRlID0gLTIwO1xuXG4gICAgICAgICAgICAvLyBsaW1pdHMgdmVydGljYWwgcm90YXRpb25cbiAgICAgICAgICAgIGNoYXJ0LmFkYXB0ZXIuYWRkKFwiZGVsdGFMYXRpdHVkZVwiLCBmdW5jdGlvbiAoZGVsYXRMYXRpdHVkZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhbTRjb3JlLm1hdGguZml0VG9SYW5nZShkZWxhdExhdGl0dWRlLCAtOTAsIDkwKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBtYXAgcG9seWdvbiBzZXJpZXNcblxuICAgICAgICAgICAgdmFyIHNoYWRvd1BvbHlnb25TZXJpZXMgPSBjaGFydC5zZXJpZXMucHVzaChuZXcgYW00bWFwcy5NYXBQb2x5Z29uU2VyaWVzKCkpO1xuICAgICAgICAgICAgc2hhZG93UG9seWdvblNlcmllcy5nZW9kYXRhID0gYW00Z2VvZGF0YV9jb250aW5lbnRzTG93O1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHNoYWRvd1BvbHlnb25TZXJpZXMuZ2VvZGF0YSA9IGFtNGdlb2RhdGFfY29udGluZW50c0xvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgc2hhZG93UG9seWdvblNlcmllcy5yYWlzZUNyaXRpY2FsRXJyb3IobmV3IEVycm9yKFwiTWFwIGdlb2RhdGEgY291bGQgbm90IGJlIGxvYWRlZC4gUGxlYXNlIGRvd25sb2FkIHRoZSBsYXRlc3QgPGEgaHJlZj1cXFwiaHR0cHM6Ly93d3cuYW1jaGFydHMuY29tL2Rvd25sb2FkL2Rvd25sb2FkLXY0L1xcXCI+YW1jaGFydHMgZ2VvZGF0YTwvYT4gYW5kIGV4dHJhY3QgaXRzIGNvbnRlbnRzIGludG8gdGhlIHNhbWUgZGlyZWN0b3J5IGFzIHlvdXIgYW1DaGFydHMgZmlsZXMuXCIpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2hhZG93UG9seWdvblNlcmllcy51c2VHZW9kYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgIHNoYWRvd1BvbHlnb25TZXJpZXMuZHggPSAyO1xuICAgICAgICAgICAgc2hhZG93UG9seWdvblNlcmllcy5keSA9IDI7XG4gICAgICAgICAgICBzaGFkb3dQb2x5Z29uU2VyaWVzLm1hcFBvbHlnb25zLnRlbXBsYXRlLmZpbGwgPSBhbTRjb3JlLmNvbG9yKFwiIzAwMFwiKTtcbiAgICAgICAgICAgIHNoYWRvd1BvbHlnb25TZXJpZXMubWFwUG9seWdvbnMudGVtcGxhdGUuZmlsbE9wYWNpdHkgPSAwLjI7XG4gICAgICAgICAgICBzaGFkb3dQb2x5Z29uU2VyaWVzLm1hcFBvbHlnb25zLnRlbXBsYXRlLnN0cm9rZU9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgc2hhZG93UG9seWdvblNlcmllcy5maWxsT3BhY2l0eSA9IDAuMTtcbiAgICAgICAgICAgIHNoYWRvd1BvbHlnb25TZXJpZXMuZmlsbCA9IGFtNGNvcmUuY29sb3IoXCIjMDAwXCIpO1xuXG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBtYXAgcG9seWdvbiBzZXJpZXNcbiAgICAgICAgICAgIHZhciBwb2x5Z29uU2VyaWVzID0gY2hhcnQuc2VyaWVzLnB1c2gobmV3IGFtNG1hcHMuTWFwUG9seWdvblNlcmllcygpKTtcbiAgICAgICAgICAgIHBvbHlnb25TZXJpZXMudXNlR2VvZGF0YSA9IHRydWU7XG5cbiAgICAgICAgICAgIHBvbHlnb25TZXJpZXMuY2FsY3VsYXRlVmlzdWFsQ2VudGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIHBvbHlnb25TZXJpZXMudG9vbHRpcC5iYWNrZ3JvdW5kLmZpbGxPcGFjaXR5ID0gMC4yO1xuICAgICAgICAgICAgcG9seWdvblNlcmllcy50b29sdGlwLmJhY2tncm91bmQuY29ybmVyUmFkaXVzID0gMjA7XG5cbiAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9IHBvbHlnb25TZXJpZXMubWFwUG9seWdvbnMudGVtcGxhdGU7XG4gICAgICAgICAgICB0ZW1wbGF0ZS5ub25TY2FsaW5nU3Ryb2tlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRlbXBsYXRlLmZpbGwgPSBhbTRjb3JlLmNvbG9yKFwiI2Y5ZTNjZVwiKTtcbiAgICAgICAgICAgIHRlbXBsYXRlLnN0cm9rZSA9IGFtNGNvcmUuY29sb3IoXCIjZTJjOWIwXCIpO1xuXG4gICAgICAgICAgICBwb2x5Z29uU2VyaWVzLmNhbGN1bGF0ZVZpc3VhbENlbnRlciA9IHRydWU7XG4gICAgICAgICAgICB0ZW1wbGF0ZS5wcm9wZXJ0eUZpZWxkcy5pZCA9IFwiaWRcIjtcbiAgICAgICAgICAgIHRlbXBsYXRlLnRvb2x0aXBQb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgICAgICAgICAgIHRlbXBsYXRlLmZpbGxPcGFjaXR5ID0gMTtcblxuICAgICAgICAgICAgdGVtcGxhdGUuZXZlbnRzLm9uKFwib3ZlclwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmR1bW15RGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuZHVtbXlEYXRhLmlzSG92ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0ZW1wbGF0ZS5ldmVudHMub24oXCJvdXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5kdW1teURhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmR1bW15RGF0YS5pc0hvdmVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgdmFyIGhzID0gcG9seWdvblNlcmllcy5tYXBQb2x5Z29ucy50ZW1wbGF0ZS5zdGF0ZXMuY3JlYXRlKFwiaG92ZXJcIik7XG4gICAgICAgICAgICBocy5wcm9wZXJ0aWVzLmZpbGxPcGFjaXR5ID0gMTtcbiAgICAgICAgICAgIGhzLnByb3BlcnRpZXMuZmlsbCA9IGFtNGNvcmUuY29sb3IoXCIjZGViN2FkXCIpO1xuXG5cbiAgICAgICAgICAgIHZhciBncmF0aWN1bGVTZXJpZXMgPSBjaGFydC5zZXJpZXMucHVzaChuZXcgYW00bWFwcy5HcmF0aWN1bGVTZXJpZXMoKSk7XG4gICAgICAgICAgICBncmF0aWN1bGVTZXJpZXMubWFwTGluZXMudGVtcGxhdGUuc3Ryb2tlID0gYW00Y29yZS5jb2xvcihcIiNmZmZcIik7XG4gICAgICAgICAgICBncmF0aWN1bGVTZXJpZXMuZml0RXh0ZW50ID0gZmFsc2U7XG4gICAgICAgICAgICBncmF0aWN1bGVTZXJpZXMubWFwTGluZXMudGVtcGxhdGUuc3Ryb2tlT3BhY2l0eSA9IDAuMjtcbiAgICAgICAgICAgIGdyYXRpY3VsZVNlcmllcy5tYXBMaW5lcy50ZW1wbGF0ZS5zdHJva2UgPSBhbTRjb3JlLmNvbG9yKFwiI2ZmZlwiKTtcblxuXG4gICAgICAgICAgICB2YXIgbWVhc2Vsc1NlcmllcyA9IGNoYXJ0LnNlcmllcy5wdXNoKG5ldyBhbTRtYXBzLk1hcFBvbHlnb25TZXJpZXMoKSlcbiAgICAgICAgICAgIG1lYXNlbHNTZXJpZXMudG9vbHRpcC5iYWNrZ3JvdW5kLmZpbGxPcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIG1lYXNlbHNTZXJpZXMudG9vbHRpcC5iYWNrZ3JvdW5kLmNvcm5lclJhZGl1cyA9IDIwO1xuICAgICAgICAgICAgbWVhc2Vsc1Nlcmllcy50b29sdGlwLmF1dG9UZXh0Q29sb3IgPSBmYWxzZTtcbiAgICAgICAgICAgIG1lYXNlbHNTZXJpZXMudG9vbHRpcC5sYWJlbC5maWxsID0gYW00Y29yZS5jb2xvcihcIiMwMDBcIik7XG4gICAgICAgICAgICBtZWFzZWxzU2VyaWVzLnRvb2x0aXAuZHkgPSAtNTtcblxuICAgICAgICAgICAgdmFyIG1lYXNlbFRlbXBsYXRlID0gbWVhc2Vsc1Nlcmllcy5tYXBQb2x5Z29ucy50ZW1wbGF0ZTtcbiAgICAgICAgICAgIG1lYXNlbFRlbXBsYXRlLmZpbGwgPSBhbTRjb3JlLmNvbG9yKFwiI2JmNzU2OVwiKTtcbiAgICAgICAgICAgIG1lYXNlbFRlbXBsYXRlLnN0cm9rZU9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgbWVhc2VsVGVtcGxhdGUuZmlsbE9wYWNpdHkgPSAwLjc1O1xuICAgICAgICAgICAgbWVhc2VsVGVtcGxhdGUudG9vbHRpcFBvc2l0aW9uID0gXCJmaXhlZFwiO1xuXG5cblxuICAgICAgICAgICAgdmFyIGhzMiA9IG1lYXNlbHNTZXJpZXMubWFwUG9seWdvbnMudGVtcGxhdGUuc3RhdGVzLmNyZWF0ZShcImhvdmVyXCIpO1xuICAgICAgICAgICAgaHMyLnByb3BlcnRpZXMuZmlsbE9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgaHMyLnByb3BlcnRpZXMuZmlsbCA9IGFtNGNvcmUuY29sb3IoXCIjODYyNDBjXCIpO1xuXG4gICAgICAgICAgICBwb2x5Z29uU2VyaWVzLmV2ZW50cy5vbihcImluaXRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcG9seWdvblNlcmllcy5tYXBQb2x5Z29ucy5lYWNoKGZ1bmN0aW9uIChtYXBQb2x5Z29uKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb3VudCA9IGRhdGFbbWFwUG9seWdvbi5pZF07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvbHlnb24gPSBtZWFzZWxzU2VyaWVzLm1hcFBvbHlnb25zLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9seWdvbi5tdWx0aVBvbHlnb24gPSBhbTRtYXBzLmdldENpcmNsZShtYXBQb2x5Z29uLnZpc3VhbExvbmdpdHVkZSwgbWFwUG9seWdvbi52aXN1YWxMYXRpdHVkZSwgTWF0aC5tYXgoMC4yLCBNYXRoLmxvZyhjb3VudCkgKiBNYXRoLkxOMTAgLyAxMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9seWdvbi50b29sdGlwVGV4dCA9IG1hcFBvbHlnb24uZGF0YUl0ZW0uZGF0YUNvbnRleHQubmFtZSArIFwiOiBcIiArIGNvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFwUG9seWdvbi5kdW1teURhdGEgPSBwb2x5Z29uO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9seWdvbi5ldmVudHMub24oXCJvdmVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBQb2x5Z29uLmlzSG92ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvbHlnb24uZXZlbnRzLm9uKFwib3V0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBQb2x5Z29uLmlzSG92ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBQb2x5Z29uLnRvb2x0aXBUZXh0ID0gbWFwUG9seWdvbi5kYXRhSXRlbS5kYXRhQ29udGV4dC5uYW1lICsgXCI6IG5vIGRhdGFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcFBvbHlnb24uZmlsbE9wYWNpdHkgPSAwLjk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgIFwiQUxcIjogNTA0LjM4LFxuICAgICAgICAgICAgICAgIFwiQU1cIjogNi41LFxuICAgICAgICAgICAgICAgIFwiQU9cIjogMi45OCxcbiAgICAgICAgICAgICAgICBcIkFSXCI6IDAuMzIsXG4gICAgICAgICAgICAgICAgXCJBVFwiOiAxMC45LFxuICAgICAgICAgICAgICAgIFwiQVVcIjogNS4wMixcbiAgICAgICAgICAgICAgICBcIkFaXCI6IDE3LjM4LFxuICAgICAgICAgICAgICAgIFwiQkFcIjogMjQuNDUsXG4gICAgICAgICAgICAgICAgXCJCRFwiOiAxMy40LFxuICAgICAgICAgICAgICAgIFwiQkVcIjogMTIuMDYsXG4gICAgICAgICAgICAgICAgXCJCRlwiOiA5My4zNyxcbiAgICAgICAgICAgICAgICBcIkJHXCI6IDEuNjgsXG4gICAgICAgICAgICAgICAgXCJCSVwiOiAwLjk1LFxuICAgICAgICAgICAgICAgIFwiQkpcIjogOTMuMzYsXG4gICAgICAgICAgICAgICAgXCJCUlwiOiA0OS40MixcbiAgICAgICAgICAgICAgICBcIkJUXCI6IDEwLjAzLFxuICAgICAgICAgICAgICAgIFwiQllcIjogMjYuMTYsXG4gICAgICAgICAgICAgICAgXCJDQVwiOiAwLjk2LFxuICAgICAgICAgICAgICAgIFwiQ0RcIjogNjkuNzEsXG4gICAgICAgICAgICAgICAgXCJDRlwiOiA0LjU3LFxuICAgICAgICAgICAgICAgIFwiQ0dcIjogMTkuNyxcbiAgICAgICAgICAgICAgICBcIkNIXCI6IDYuMTksXG4gICAgICAgICAgICAgICAgXCJDSVwiOiAxNC4xLFxuICAgICAgICAgICAgICAgIFwiQ0xcIjogMS40LFxuICAgICAgICAgICAgICAgIFwiQ01cIjogNDEuMjYsXG4gICAgICAgICAgICAgICAgXCJDTlwiOiAyLjYsXG4gICAgICAgICAgICAgICAgXCJDT1wiOiA0LjQ4LFxuICAgICAgICAgICAgICAgIFwiQ1lcIjogNy42OSxcbiAgICAgICAgICAgICAgICBcIkNaXCI6IDIzLjA5LFxuICAgICAgICAgICAgICAgIFwiREtcIjogMS41OCxcbiAgICAgICAgICAgICAgICBcIkVFXCI6IDkuOTEsXG4gICAgICAgICAgICAgICAgXCJFR1wiOiAwLjYzLFxuICAgICAgICAgICAgICAgIFwiRVNcIjogNC45NixcbiAgICAgICAgICAgICAgICBcIkZJXCI6IDMuMjcsXG4gICAgICAgICAgICAgICAgXCJGUlwiOiA0My4yNixcbiAgICAgICAgICAgICAgICBcIkdBXCI6IDMuMDMsXG4gICAgICAgICAgICAgICAgXCJHQlwiOiAxNC4zLFxuICAgICAgICAgICAgICAgIFwiR0VcIjogODA5LjA5LFxuICAgICAgICAgICAgICAgIFwiR0hcIjogMzkuNzgsXG4gICAgICAgICAgICAgICAgXCJHTVwiOiAyLjQ1LFxuICAgICAgICAgICAgICAgIFwiR05cIjogNDUuOTgsXG4gICAgICAgICAgICAgICAgXCJHUVwiOiAyMy43NCxcbiAgICAgICAgICAgICAgICBcIkdSXCI6IDE1NC40MixcbiAgICAgICAgICAgICAgICBcIkhSXCI6IDUuNDYsXG4gICAgICAgICAgICAgICAgXCJIVVwiOiAxLjQ0LFxuICAgICAgICAgICAgICAgIFwiSURcIjogMTYuODcsXG4gICAgICAgICAgICAgICAgXCJJRVwiOiAxNy41NixcbiAgICAgICAgICAgICAgICBcIklMXCI6IDQxMi4yNCxcbiAgICAgICAgICAgICAgICBcIklOXCI6IDQ3Ljg1LFxuICAgICAgICAgICAgICAgIFwiSVFcIjogMTIuOTYsXG4gICAgICAgICAgICAgICAgXCJJUlwiOiAxLjEzLFxuICAgICAgICAgICAgICAgIFwiSVRcIjogNDQuMjksXG4gICAgICAgICAgICAgICAgXCJKUFwiOiAzLjI3LFxuICAgICAgICAgICAgICAgIFwiS0VcIjogMTYuOCxcbiAgICAgICAgICAgICAgICBcIktHXCI6IDI1My4zNyxcbiAgICAgICAgICAgICAgICBcIktIXCI6IDAuNDQsXG4gICAgICAgICAgICAgICAgXCJLTVwiOiAxLjI2LFxuICAgICAgICAgICAgICAgIFwiS1pcIjogMTE2LjMsXG4gICAgICAgICAgICAgICAgXCJMQVwiOiAxLjMzLFxuICAgICAgICAgICAgICAgIFwiTEtcIjogMC41MyxcbiAgICAgICAgICAgICAgICBcIkxSXCI6IDY5Mi4yNyxcbiAgICAgICAgICAgICAgICBcIkxTXCI6IDUuOSxcbiAgICAgICAgICAgICAgICBcIkxUXCI6IDE0LjQ0LFxuICAgICAgICAgICAgICAgIFwiTFVcIjogNi45NSxcbiAgICAgICAgICAgICAgICBcIkxWXCI6IDYuMDksXG4gICAgICAgICAgICAgICAgXCJNQVwiOiAwLjIsXG4gICAgICAgICAgICAgICAgXCJNRFwiOiA4My43NSxcbiAgICAgICAgICAgICAgICBcIk1FXCI6IDMxOS43NSxcbiAgICAgICAgICAgICAgICBcIk1HXCI6IDIzODYuMzUsXG4gICAgICAgICAgICAgICAgXCJNS1wiOiAyOC44MyxcbiAgICAgICAgICAgICAgICBcIk1MXCI6IDQ4LjY4LFxuICAgICAgICAgICAgICAgIFwiTU1cIjogNDAuMzEsXG4gICAgICAgICAgICAgICAgXCJNTlwiOiAwLjY2LFxuICAgICAgICAgICAgICAgIFwiTVJcIjogMTQuNjUsXG4gICAgICAgICAgICAgICAgXCJNVFwiOiAxMS42NSxcbiAgICAgICAgICAgICAgICBcIk1WXCI6IDkuMzUsXG4gICAgICAgICAgICAgICAgXCJNWFwiOiAwLjA0LFxuICAgICAgICAgICAgICAgIFwiTVlcIjogODYuNDEsXG4gICAgICAgICAgICAgICAgXCJNWlwiOiAxMy40OSxcbiAgICAgICAgICAgICAgICBcIk5BXCI6IDEyLjksXG4gICAgICAgICAgICAgICAgXCJORVwiOiA4MC44OCxcbiAgICAgICAgICAgICAgICBcIk5HXCI6IDMxLjQ0LFxuICAgICAgICAgICAgICAgIFwiTkxcIjogMS40NyxcbiAgICAgICAgICAgICAgICBcIk5PXCI6IDIuNDcsXG4gICAgICAgICAgICAgICAgXCJOUFwiOiAxMC44LFxuICAgICAgICAgICAgICAgIFwiTlpcIjogOS4yMyxcbiAgICAgICAgICAgICAgICBcIlBFXCI6IDEuMjksXG4gICAgICAgICAgICAgICAgXCJQS1wiOiAxNTkuMTQsXG4gICAgICAgICAgICAgICAgXCJQTFwiOiA4LjI0LFxuICAgICAgICAgICAgICAgIFwiUFRcIjogMTYuNjgsXG4gICAgICAgICAgICAgICAgXCJST1wiOiA2My4wNSxcbiAgICAgICAgICAgICAgICBcIlJTXCI6IDQ3My40NixcbiAgICAgICAgICAgICAgICBcIlJVXCI6IDE0LjI0LFxuICAgICAgICAgICAgICAgIFwiUldcIjogNS40NSxcbiAgICAgICAgICAgICAgICBcIlNFXCI6IDIuNjQsXG4gICAgICAgICAgICAgICAgXCJTR1wiOiA4LjE4LFxuICAgICAgICAgICAgICAgIFwiU0lcIjogMy4zNyxcbiAgICAgICAgICAgICAgICBcIlNLXCI6IDExMi43OCxcbiAgICAgICAgICAgICAgICBcIlNOXCI6IDMuMzcsXG4gICAgICAgICAgICAgICAgXCJTT1wiOiA4LjAzLFxuICAgICAgICAgICAgICAgIFwiU1NcIjogMTkuMyxcbiAgICAgICAgICAgICAgICBcIlREXCI6IDc1LjYzLFxuICAgICAgICAgICAgICAgIFwiVEdcIjogMzQuODQsXG4gICAgICAgICAgICAgICAgXCJUSFwiOiA4MS4wMixcbiAgICAgICAgICAgICAgICBcIlRMXCI6IDkuNDYsXG4gICAgICAgICAgICAgICAgXCJUTlwiOiA3LjgsXG4gICAgICAgICAgICAgICAgXCJUUlwiOiA3LjA4LFxuICAgICAgICAgICAgICAgIFwiVUFcIjogMTQzOS4wMixcbiAgICAgICAgICAgICAgICBcIlVHXCI6IDYyLjU1LFxuICAgICAgICAgICAgICAgIFwiVVNcIjogMS4zMixcbiAgICAgICAgICAgICAgICBcIlVaXCI6IDAuOTksXG4gICAgICAgICAgICAgICAgXCJWRVwiOiAxNzkuNTUsXG4gICAgICAgICAgICAgICAgXCJaQVwiOiAzLjA5LFxuICAgICAgICAgICAgICAgIFwiWk1cIjogOS44MixcbiAgICAgICAgICAgICAgICBcIlpXXCI6IDAuMDZcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTsgLy8gZW5kIGFtNGNvcmUucmVhZHkoKVxuICAgIH1cblxuICAgIHZhciBfZGVtbzQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEluaXQgQW1DaGFydCAtLSBmb3IgbW9yZSBpbmZvLCBwbGVhc2UgdmlzaXQgdGhlIG9mZmljaWFsIGRvY3VtZW50aWF0aW9uOiBodHRwczovL3d3dy5hbWNoYXJ0cy5jb20vZG9jcy92NC9cbiAgICAgICAgYW00Y29yZS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIC8vIFRoZW1lcyBiZWdpblxuICAgICAgICAgICAgYW00Y29yZS51c2VUaGVtZShhbTR0aGVtZXNfZnJvemVuKTtcbiAgICAgICAgICAgIGFtNGNvcmUudXNlVGhlbWUoYW00dGhlbWVzX2FuaW1hdGVkKTtcbiAgICAgICAgICAgIC8vIFRoZW1lcyBlbmRcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIG1hcCBpbnN0YW5jZVxuICAgICAgICAgICAgY2hhcnQgPSBhbTRjb3JlLmNyZWF0ZShcImt0X2FtY2hhcnRzXzRcIiwgYW00bWFwcy5NYXBDaGFydCk7XG4gICAgICAgICAgICAvLyBTZXQgbWFwIGRlZmluaXRpb25cbiAgICAgICAgICAgIGNoYXJ0Lmdlb2RhdGEgPSBhbTRnZW9kYXRhX3dvcmxkVGltZVpvbmVBcmVhc0hpZ2g7XG4gICAgICAgICAgICAvLyBTZXQgcHJvamVjdGlvblxuICAgICAgICAgICAgY2hhcnQucHJvamVjdGlvbiA9IG5ldyBhbTRtYXBzLnByb2plY3Rpb25zLk1pbGxlcigpO1xuICAgICAgICAgICAgY2hhcnQucGFuQmVoYXZpb3IgPSBcIm1vdmVcIjtcblxuICAgICAgICAgICAgdmFyIHN0YXJ0Q29sb3IgPSBjaGFydC5jb2xvcnMuZ2V0SW5kZXgoMClcbiAgICAgICAgICAgIHZhciBtaWRkbGVDb2xvciA9IGNoYXJ0LmNvbG9ycy5nZXRJbmRleCg3KVxuICAgICAgICAgICAgdmFyIGVuZENvbG9yID0gY2hhcnQuY29sb3JzLmdldEluZGV4KDE0KVxuXG4gICAgICAgICAgICB2YXIgaW50ZXJmYWNlQ29sb3JzID0gbmV3IGFtNGNvcmUuSW50ZXJmYWNlQ29sb3JTZXQoKTtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIG1hcCBwb2x5Z29uIHNlcmllc1xuICAgICAgICAgICAgdmFyIHBvbHlnb25TZXJpZXMgPSBjaGFydC5zZXJpZXMucHVzaChuZXcgYW00bWFwcy5NYXBQb2x5Z29uU2VyaWVzKCkpO1xuICAgICAgICAgICAgLy8gTWFrZSBtYXAgbG9hZCBwb2x5Z29uIChsaWtlIGNvdW50cnkgbmFtZXMpIGRhdGEgZnJvbSBHZW9KU09OXG4gICAgICAgICAgICBwb2x5Z29uU2VyaWVzLnVzZUdlb2RhdGEgPSB0cnVlO1xuICAgICAgICAgICAgcG9seWdvblNlcmllcy5jYWxjdWxhdGVWaXN1YWxDZW50ZXIgPSB0cnVlO1xuXG4gICAgICAgICAgICB2YXIgcG9seWdvblRlbXBsYXRlID0gcG9seWdvblNlcmllcy5tYXBQb2x5Z29ucy50ZW1wbGF0ZTtcbiAgICAgICAgICAgIHBvbHlnb25UZW1wbGF0ZS5maWxsT3BhY2l0eSA9IDAuNjtcbiAgICAgICAgICAgIHBvbHlnb25UZW1wbGF0ZS5ub25TY2FsaW5nU3Ryb2tlID0gdHJ1ZTtcbiAgICAgICAgICAgIHBvbHlnb25UZW1wbGF0ZS5zdHJva2VXaWR0aCA9IDE7XG4gICAgICAgICAgICBwb2x5Z29uVGVtcGxhdGUuc3Ryb2tlID0gaW50ZXJmYWNlQ29sb3JzLmdldEZvcihcImJhY2tncm91bmRcIik7XG4gICAgICAgICAgICBwb2x5Z29uVGVtcGxhdGUuc3Ryb2tlT3BhY2l0eSA9IDE7XG5cbiAgICAgICAgICAgIHBvbHlnb25UZW1wbGF0ZS5hZGFwdGVyLmFkZChcImZpbGxcIiwgZnVuY3Rpb24gKGZpbGwsIHRhcmdldCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5kYXRhSXRlbS5pbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoYXJ0LmNvbG9ycy5nZXRJbmRleCh0YXJnZXQuZGF0YUl0ZW0uaW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmlsbDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLy8gYWRkIGNvdW50cnkgYm9yZGVyc1xuICAgICAgICAgICAgLy8gQ3JlYXRlIG1hcCBwb2x5Z29uIHNlcmllc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgY291bnRyeVNlcmllcyA9IGNoYXJ0LnNlcmllcy5wdXNoKG5ldyBhbTRtYXBzLk1hcFBvbHlnb25TZXJpZXMoKSk7XG4gICAgICAgICAgICAvLyBNYWtlIG1hcCBsb2FkIHBvbHlnb24gKGxpa2UgY291bnRyeSBuYW1lcykgZGF0YSBmcm9tIEdlb0pTT05cbiAgICAgICAgICAgIGNvdW50cnlTZXJpZXMudXNlR2VvZGF0YSA9IHRydWU7XG4gICAgICAgICAgICBjb3VudHJ5U2VyaWVzLmdlb2RhdGEgPSBhbTRnZW9kYXRhX3dvcmxkTG93O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgY291bnRyeVBvbHlnb25UZW1wbGF0ZSA9IGNvdW50cnlTZXJpZXMubWFwUG9seWdvbnMudGVtcGxhdGU7XG4gICAgICAgICAgICBjb3VudHJ5UG9seWdvblRlbXBsYXRlLmZpbGxPcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIGNvdW50cnlQb2x5Z29uVGVtcGxhdGUubm9uU2NhbGluZ1N0cm9rZSA9IHRydWU7XG4gICAgICAgICAgICBjb3VudHJ5UG9seWdvblRlbXBsYXRlLnN0cm9rZVdpZHRoID0gMTtcbiAgICAgICAgICAgIGNvdW50cnlQb2x5Z29uVGVtcGxhdGUuc3Ryb2tlID0gaW50ZXJmYWNlQ29sb3JzLmdldEZvcihcImJhY2tncm91bmRcIik7XG4gICAgICAgICAgICBjb3VudHJ5UG9seWdvblRlbXBsYXRlLnN0cm9rZU9wYWNpdHkgPSAwLjM7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIG1hcCBwb2x5Z29uIHNlcmllc1xuICAgICAgICAgICAgdmFyIGJvdW5kc1NlcmllcyA9IGNoYXJ0LnNlcmllcy5wdXNoKG5ldyBhbTRtYXBzLk1hcFBvbHlnb25TZXJpZXMoKSk7XG4gICAgICAgICAgICBib3VuZHNTZXJpZXMuZ2VvZGF0YSA9IGFtNGdlb2RhdGFfd29ybGRUaW1lWm9uZXNIaWdoO1xuICAgICAgICAgICAgYm91bmRzU2VyaWVzLnVzZUdlb2RhdGEgPSB0cnVlO1xuICAgICAgICAgICAgYm91bmRzU2VyaWVzLm1hcFBvbHlnb25zLnRlbXBsYXRlLmZpbGwgPSBhbTRjb3JlLmNvbG9yKGludGVyZmFjZUNvbG9ycy5nZXRGb3IoXCJhbHRlcm5hdGl2ZUJhY2tncm91bmRcIikpO1xuICAgICAgICAgICAgYm91bmRzU2VyaWVzLm1hcFBvbHlnb25zLnRlbXBsYXRlLmZpbGxPcGFjaXR5ID0gMC4wNztcbiAgICAgICAgICAgIGJvdW5kc1Nlcmllcy5tYXBQb2x5Z29ucy50ZW1wbGF0ZS5ub25TY2FsaW5nU3Ryb2tlID0gdHJ1ZTtcbiAgICAgICAgICAgIGJvdW5kc1Nlcmllcy5tYXBQb2x5Z29ucy50ZW1wbGF0ZS5zdHJva2VXaWR0aCA9IDAuNTtcbiAgICAgICAgICAgIGJvdW5kc1Nlcmllcy5tYXBQb2x5Z29ucy50ZW1wbGF0ZS5zdHJva2VPcGFjaXR5ID0gMTtcbiAgICAgICAgICAgIGJvdW5kc1Nlcmllcy5tYXBQb2x5Z29ucy50ZW1wbGF0ZS5zdHJva2UgPSBpbnRlcmZhY2VDb2xvcnMuZ2V0Rm9yKFwiYmFja2dyb3VuZFwiKTtcbiAgICAgICAgICAgIGJvdW5kc1Nlcmllcy50b29sdGlwVGV4dCA9IFwie2lkfVwiO1xuXG5cbiAgICAgICAgICAgIHZhciBocyA9IHBvbHlnb25UZW1wbGF0ZS5zdGF0ZXMuY3JlYXRlKFwiaG92ZXJcIik7XG4gICAgICAgICAgICBocy5wcm9wZXJ0aWVzLmZpbGxPcGFjaXR5ID0gMTtcblxuICAgICAgICAgICAgdmFyIGJocyA9IGJvdW5kc1Nlcmllcy5tYXBQb2x5Z29ucy50ZW1wbGF0ZS5zdGF0ZXMuY3JlYXRlKFwiaG92ZXJcIik7XG4gICAgICAgICAgICBiaHMucHJvcGVydGllcy5maWxsT3BhY2l0eSA9IDAuMztcblxuXG4gICAgICAgICAgICBwb2x5Z29uU2VyaWVzLm1hcFBvbHlnb25zLnRlbXBsYXRlLmV2ZW50cy5vbihcIm92ZXJcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHBvbHlnb24gPSBib3VuZHNTZXJpZXMuZ2V0UG9seWdvbkJ5SWQoZXZlbnQudGFyZ2V0LmRhdGFJdGVtLmRhdGFDb250ZXh0LmlkKTtcbiAgICAgICAgICAgICAgICBpZiAocG9seWdvbikge1xuICAgICAgICAgICAgICAgICAgICBwb2x5Z29uLmlzSG92ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHBvbHlnb25TZXJpZXMubWFwUG9seWdvbnMudGVtcGxhdGUuZXZlbnRzLm9uKFwib3V0XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIHZhciBwb2x5Z29uID0gYm91bmRzU2VyaWVzLmdldFBvbHlnb25CeUlkKGV2ZW50LnRhcmdldC5kYXRhSXRlbS5kYXRhQ29udGV4dC5pZCk7XG4gICAgICAgICAgICAgICAgaWYgKHBvbHlnb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcG9seWdvbi5pc0hvdmVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuXG4gICAgICAgICAgICB2YXIgbGFiZWxTZXJpZXMgPSBjaGFydC5zZXJpZXMucHVzaChuZXcgYW00bWFwcy5NYXBJbWFnZVNlcmllcygpKTtcbiAgICAgICAgICAgIHZhciBsYWJlbCA9IGxhYmVsU2VyaWVzLm1hcEltYWdlcy50ZW1wbGF0ZS5jcmVhdGVDaGlsZChhbTRjb3JlLkxhYmVsKTtcbiAgICAgICAgICAgIGxhYmVsLnRleHQgPSBcIntpZH1cIjtcbiAgICAgICAgICAgIGxhYmVsLnN0cm9rZU9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgbGFiZWwuZmlsbCA9IGFtNGNvcmUuY29sb3IoXCIjMDAwMDAwXCIpO1xuICAgICAgICAgICAgbGFiZWwuaG9yaXpvbnRhbENlbnRlciA9IFwibWlkZGxlXCI7XG4gICAgICAgICAgICBsYWJlbC5mb250U2l6ZSA9IDk7XG4gICAgICAgICAgICBsYWJlbC5ub25TY2FsaW5nID0gdHJ1ZTtcblxuXG4gICAgICAgICAgICBsYWJlbFNlcmllcy5tYXBJbWFnZXMudGVtcGxhdGUuYWRhcHRlci5hZGQoXCJsb25naXR1ZGVcIiwgKGxvbmdpdHVkZSwgdGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnpJbmRleCA9IDEwMDAwMDtcblxuICAgICAgICAgICAgICAgIHZhciBwb2x5Z29uID0gcG9seWdvblNlcmllcy5nZXRQb2x5Z29uQnlJZCh0YXJnZXQuZGF0YUl0ZW0uZGF0YUNvbnRleHQuaWQpO1xuICAgICAgICAgICAgICAgIGlmIChwb2x5Z29uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwb2x5Z29uLnZpc3VhbExvbmdpdHVkZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbG9uZ2l0dWRlO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbGFiZWxTZXJpZXMubWFwSW1hZ2VzLnRlbXBsYXRlLmFkYXB0ZXIuYWRkKFwibGF0aXR1ZGVcIiwgKGxhdGl0dWRlLCB0YXJnZXQpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgcG9seWdvbiA9IHBvbHlnb25TZXJpZXMuZ2V0UG9seWdvbkJ5SWQodGFyZ2V0LmRhdGFJdGVtLmRhdGFDb250ZXh0LmlkKTtcbiAgICAgICAgICAgICAgICBpZiAocG9seWdvbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9seWdvbi52aXN1YWxMYXRpdHVkZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbGF0aXR1ZGU7XG4gICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgIHZhciBidXR0b24gPSBjaGFydC5jcmVhdGVDaGlsZChhbTRjb3JlLlN3aXRjaEJ1dHRvbik7XG4gICAgICAgICAgICBidXR0b24uYWxpZ24gPSBcInJpZ2h0XCI7XG4gICAgICAgICAgICBidXR0b24ubWFyZ2luVG9wID0gNDA7XG4gICAgICAgICAgICBidXR0b24ubWFyZ2luUmlnaHQgPSA0MDtcbiAgICAgICAgICAgIGJ1dHRvbi52YWxpZ24gPSBcInRvcFwiO1xuICAgICAgICAgICAgYnV0dG9uLmxlZnRMYWJlbC50ZXh0ID0gXCJNYXBcIjtcbiAgICAgICAgICAgIGJ1dHRvbi5yaWdodExhYmVsLnRleHQgPSBcIkdsb2JlXCI7XG5cbiAgICAgICAgICAgIGJ1dHRvbi5ldmVudHMub24oXCJ0b2dnbGVkXCIsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIGNoYXJ0LmRlbHRhTGF0aXR1ZGUgPSAwO1xuICAgICAgICAgICAgICAgIGNoYXJ0LmRlbHRhTG9uZ2l0dWRlID0gMDtcbiAgICAgICAgICAgICAgICBjaGFydC5kZWx0YUdhbW1hID0gMDtcblxuICAgICAgICAgICAgICAgIGlmIChidXR0b24uaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhcnQucHJvamVjdGlvbiA9IG5ldyBhbTRtYXBzLnByb2plY3Rpb25zLk9ydGhvZ3JhcGhpYztcbiAgICAgICAgICAgICAgICAgICAgY2hhcnQucGFuQmVoYXZpb3IgPSBcInJvdGF0ZUxvbmdMYXRcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0LnByb2plY3Rpb24gPSBuZXcgYW00bWFwcy5wcm9qZWN0aW9ucy5NaWxsZXI7XG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0LnBhbkJlaGF2aW9yID0gXCJtb3ZlXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgcG9seWdvblNlcmllcy5ldmVudHMub24oXCJkYXRhdmFsaWRhdGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsYWJlbFNlcmllcy5kYXRhID0gcG9seWdvblNlcmllcy5kYXRhO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICB9KTsgLy8gZW5kIGFtNGNvcmUucmVhZHkoKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX2RlbW8xKCk7XG4gICAgICAgICAgICBfZGVtbzIoKTtcbiAgICAgICAgICAgIF9kZW1vMygpO1xuICAgICAgICAgICAgX2RlbW80KCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XG4gICAgS1RHZW5lcmFsQW1DaGFydHNNYXBzLmluaXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIktUR2VuZXJhbEFtQ2hhcnRzTWFwcyIsImNoYXJ0IiwiX2RlbW8xIiwiYW00Y29yZSIsInJlYWR5IiwidXNlVGhlbWUiLCJhbTR0aGVtZXNfYW5pbWF0ZWQiLCJjcmVhdGUiLCJhbTRtYXBzIiwiTWFwQ2hhcnQiLCJnZW9kYXRhIiwiYW00Z2VvZGF0YV93b3JsZExvdyIsInByb2plY3Rpb24iLCJwcm9qZWN0aW9ucyIsIk1pbGxlciIsInBvbHlnb25TZXJpZXMiLCJzZXJpZXMiLCJwdXNoIiwiTWFwUG9seWdvblNlcmllcyIsImV4Y2x1ZGUiLCJ1c2VHZW9kYXRhIiwicG9seWdvblRlbXBsYXRlIiwibWFwUG9seWdvbnMiLCJ0ZW1wbGF0ZSIsInRvb2x0aXBUZXh0IiwicG9seWdvbiIsImZpbGxPcGFjaXR5IiwiaHMiLCJzdGF0ZXMiLCJwcm9wZXJ0aWVzIiwiZmlsbCIsImNvbG9ycyIsImdldEluZGV4IiwiaW1hZ2VTZXJpZXMiLCJNYXBJbWFnZVNlcmllcyIsIm1hcEltYWdlcyIsInByb3BlcnR5RmllbGRzIiwibG9uZ2l0dWRlIiwibGF0aXR1ZGUiLCJ1cmwiLCJjaXJjbGUiLCJjcmVhdGVDaGlsZCIsIkNpcmNsZSIsInJhZGl1cyIsIm5vblNjYWxpbmciLCJjaXJjbGUyIiwiZXZlbnRzIiwib24iLCJldmVudCIsImFuaW1hdGVCdWxsZXQiLCJ0YXJnZXQiLCJhbmltYXRpb24iLCJhbmltYXRlIiwicHJvcGVydHkiLCJmcm9tIiwiem9vbUxldmVsIiwidG8iLCJlYXNlIiwiY2lyY2xlT3V0Iiwib2JqZWN0IiwiY29sb3JTZXQiLCJDb2xvclNldCIsImRhdGEiLCJuZXh0IiwiX2RlbW8yIiwiaG9tZVpvb21MZXZlbCIsImhvbWVHZW9Qb2ludCIsImxpZ2h0ZW4iLCJub25TY2FsaW5nU3Ryb2tlIiwiY2l0aWVzIiwiY2l0eSIsImJyaWdodGVuIiwic3Ryb2tlV2lkdGgiLCJzdHJva2UiLCJjb2xvciIsImFkZENpdHkiLCJjb29yZHMiLCJ0aXRsZSIsInBhcmlzIiwidG9yb250byIsImxhIiwiaGF2YW5hIiwibGluZVNlcmllcyIsIk1hcEFyY1NlcmllcyIsIm1hcExpbmVzIiwibGluZSIsInN0cm9rZU9wYWNpdHkiLCJzdHJva2VEYXNoYXJyYXkiLCJ6SW5kZXgiLCJzaGFkb3dMaW5lU2VyaWVzIiwiTWFwTGluZVNlcmllcyIsInNob3J0ZXN0RGlzdGFuY2UiLCJhZGRMaW5lIiwiaW1hZ2VzVG9Db25uZWN0IiwiY29udHJvbFBvaW50RGlzdGFuY2UiLCJzaGFkb3dMaW5lIiwicGxhbmUiLCJsaW5lT2JqZWN0cyIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJhZGFwdGVyIiwiYWRkIiwic2NhbGUiLCJNYXRoIiwiYWJzIiwicGxhbmVJbWFnZSIsIlNwcml0ZSIsImhvcml6b250YWxDZW50ZXIiLCJ2ZXJ0aWNhbENlbnRlciIsInBhdGgiLCJzaGFkb3dQbGFuZSIsInNoYWRvd1BsYW5lSW1hZ2UiLCJvcGFjaXR5IiwiY3VycmVudExpbmUiLCJkaXJlY3Rpb24iLCJmbHlQbGFuZSIsIm1hcExpbmUiLCJwYXJlbnQiLCJyb3RhdGlvbiIsIm51bUxpbmVzIiwibGVuZ3RoIiwic2luSW5PdXQiLCJfZGVtbzMiLCJpbnRlcmZhY2VDb2xvcnMiLCJJbnRlcmZhY2VDb2xvclNldCIsImUiLCJyYWlzZUNyaXRpY2FsRXJyb3IiLCJFcnJvciIsImxhYmVsIiwiTGFiZWwiLCJ0ZXh0IiwiZm9udFNpemUiLCJhbGlnbiIsInZhbGlnbiIsImJhY2tncm91bmQiLCJSb3VuZGVkUmVjdGFuZ2xlIiwiY29ybmVyUmFkaXVzIiwicGFkZGluZyIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Cb3R0b20iLCJkYXRhU291cmNlIiwiVGV4dExpbmsiLCJ1cmxUYXJnZXQiLCJtYXJnaW5Ub3AiLCJPcnRob2dyYXBoaWMiLCJwYW5CZWhhdmlvciIsInpvb21Db250cm9sIiwiWm9vbUNvbnRyb2wiLCJob21lQnV0dG9uIiwiQnV0dG9uIiwiZ29Ib21lIiwiaWNvbiIsImluc2VydEJlZm9yZSIsInBsdXNCdXR0b24iLCJiYWNrZ3JvdW5kU2VyaWVzIiwiZGVsdGFMb25naXR1ZGUiLCJkZWx0YUxhdGl0dWRlIiwiZGVsYXRMYXRpdHVkZSIsIm1hdGgiLCJmaXRUb1JhbmdlIiwic2hhZG93UG9seWdvblNlcmllcyIsImFtNGdlb2RhdGFfY29udGluZW50c0xvdyIsImR4IiwiZHkiLCJjYWxjdWxhdGVWaXN1YWxDZW50ZXIiLCJ0b29sdGlwIiwiaWQiLCJ0b29sdGlwUG9zaXRpb24iLCJkdW1teURhdGEiLCJpc0hvdmVyIiwiZ3JhdGljdWxlU2VyaWVzIiwiR3JhdGljdWxlU2VyaWVzIiwiZml0RXh0ZW50IiwibWVhc2Vsc1NlcmllcyIsImF1dG9UZXh0Q29sb3IiLCJtZWFzZWxUZW1wbGF0ZSIsImhzMiIsImVhY2giLCJtYXBQb2x5Z29uIiwiY291bnQiLCJtdWx0aVBvbHlnb24iLCJnZXRDaXJjbGUiLCJ2aXN1YWxMb25naXR1ZGUiLCJ2aXN1YWxMYXRpdHVkZSIsIm1heCIsImxvZyIsIkxOMTAiLCJkYXRhSXRlbSIsImRhdGFDb250ZXh0IiwibmFtZSIsIl9kZW1vNCIsImFtNHRoZW1lc19mcm96ZW4iLCJhbTRnZW9kYXRhX3dvcmxkVGltZVpvbmVBcmVhc0hpZ2giLCJzdGFydENvbG9yIiwibWlkZGxlQ29sb3IiLCJlbmRDb2xvciIsImdldEZvciIsImluZGV4IiwiY291bnRyeVNlcmllcyIsImNvdW50cnlQb2x5Z29uVGVtcGxhdGUiLCJib3VuZHNTZXJpZXMiLCJhbTRnZW9kYXRhX3dvcmxkVGltZVpvbmVzSGlnaCIsImJocyIsImdldFBvbHlnb25CeUlkIiwibGFiZWxTZXJpZXMiLCJidXR0b24iLCJTd2l0Y2hCdXR0b24iLCJtYXJnaW5SaWdodCIsImxlZnRMYWJlbCIsInJpZ2h0TGFiZWwiLCJkZWx0YUdhbW1hIiwiaXNBY3RpdmUiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/charts/amcharts/maps.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/charts/amcharts/maps.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=maps.js.map