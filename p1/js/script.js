AmCharts.makeChart("chartdiv",
				{
					"type": "serial",
					"categoryField": "date",
					"dataDateFormat": "YYYY",
					"maxSelectedSeries": 4,
					"maxZoomFactor": 25,
					"startEffect": "bounce",
					"accessibleTitle": "Main chart 1",
					"backgroundAlpha": 0.8,
					"backgroundColor": "#050D2B",
					"theme": "dark",
					"categoryAxis": {
						"minPeriod": "YYYY",
						"parseDates": true,
						"axisThickness": 0,
						"minorTickLength": -12
					},
					"chartCursor": {
						"enabled": true,
						"animationDuration": 0.07,
						"balloonPointerOrientation": " vertical",
						"bulletSize": 5,
						"categoryBalloonDateFormat": "YYYY",
						"tabIndex": -3
					},
					"chartScrollbar": {
						"enabled": true
					},
					"trendLines": [],
					"graphs": [
						{
							"balloonText": "Total U.S subscribers [[value]]",
							"bullet": "round",
							"bulletBorderThickness": 1,
							"bulletHitAreaSize": 4,
							"fixedColumnWidth": -4,
							"id": "AmGraph-1",
							"periodSpan": 0,
							"showBulletsAt": "open",
							"tabIndex": 3,
							"title": "Total U.S",
							"valueField": "U.S"
						},
						{
							"balloonText": "Comcast: [[value]]",
							"bullet": "round",
							"bulletBorderThickness": 1,
							"bulletHitAreaSize": 4,
							"fixedColumnWidth": -4,
                            "periodSpan": 0,
                            "tabIndex": 3,
							"id": "AmGraph-2",
							"title": "Comcast",
							"valueField": "Comcast"
						},
						{
							"balloonText": "DirecTV: [[value]]",
                            "bullet": "round",
							"bulletBorderThickness": 1,
							"bulletHitAreaSize": 4,
							"fixedColumnWidth": -4,
                            "periodSpan": 0,
                            "tabIndex": 3,
							"id": "AmGraph-3",
							"title": "DirecTV",
							"valueField": "DirecTV"
						},
						{
							"balloonText": "Dish Network: [[value]]",
                            "bullet": "round",
							"bulletBorderThickness": 1,
							"bulletHitAreaSize": 4,
							"fixedColumnWidth": -4,
							"id": "AmGraph-4",
							"title": "Dish Network",
							"valueField": "Dish Network"
						},
						{
							"balloonText": "Netflix: [[value]]",
							"bullet": "round",
                            "bulletBorderThickness": 1,
							"bulletHitAreaSize": 4,
							"fixedColumnWidth": -4,
                            "periodSpan": 0,
                            "tabIndex": 3,
							"id": "AmGraph-5",
							"title": "Netflix",
							"valueField": "Netflix"
						},
						{
							"balloonText": "Amazon Prime: [[value]]",
							"bullet": "round",
                            "bulletBorderThickness": 1,
							"bulletHitAreaSize": 4,
							"fixedColumnWidth": -4,
                            "periodSpan": 0,
                            "tabIndex": 3,
							"id": "AmGraph-6",
							"negativeBase": -1,
							"periodSpan": 4,
							"title": "Amazon Prime",
							"valueField": "Amazon Prime"
						},
						{
							"balloonText": "Hulu Plus:  [[value]]",
							"bullet": "round",
                            "bulletBorderThickness": 1,
							"bulletHitAreaSize": 4,
							"fixedColumnWidth": -4,
                            "periodSpan": 0,
                            "tabIndex": 3,
							"id": "AmGraph-7",
							"title": "Hulu Plus",
							"valueField": "Hulu Plus"
						},
						{
							"balloonText": "SlingTV: [[value]]",
							"bullet": "round",
                            "bulletBorderThickness": 1,
							"bulletHitAreaSize": 4,
							"fixedColumnWidth": -4,
                            "periodSpan": 0,
                            "tabIndex": 3,
							"id": "AmGraph-8",
							"title": "SlingTV",
							"valueField": "Sling TV"
						},
						{
							"balloonText": "HBO Now: [[value]]",
                            "bullet": "round",
                            "bulletBorderThickness": 1,
							"bulletHitAreaSize": 4,
							"periodSpan": 0,
                            "tabIndex": 3,
                            "id": "AmGraph-9",
							"title": "HBO Now",
							"valueField": "HBO Now"
						},
						{
							"balloonText": "DirecTV Now: [[value]]",
							"bullet": "round",
                            "bulletBorderThickness": 1,
							"bulletHitAreaSize": 4,
							"fixedColumnWidth": -4,
                            "periodSpan": 0,
                            "tabIndex": 3,
							"id": "AmGraph-10",
							"title": "DirecTV Now",
							"valueField": "DirecTV Now"
						}
					],
					"guides": [],
					"valueAxes": [
						{
							"id": "ValueAxis-1",
							"title": "Total Number of Subscribers (in millions)"
						}
					],
					"allLabels": [],
					"balloon": {},
					"legend": {
						"enabled": true,
						"useGraphSettings": true,
						"valueAlign": "left",
						"valueText": ""
					},
					"titles": [
						{
							"id": "Title-1",
							"size": 15,
							"text": ""
						}
					],
					"dataProvider": [
						{
							"date": "2009",
							"U.S": "95.855",
							"Comcast": "23.559",
							"DirecTV": "17.6",
							"Dish Network": "14.1",
							"Netflix": "12.27",
							"Amazon Prime": "2"
						},
						{
							"date": "2010",
							"U.S": "96",
							"Comcast": "22.802",
							"DirecTV": "18.6",
							"Dish Network": "14.1",
							"Netflix": "19.5",
							"Amazon Prime": "4",
							"Hulu Plus": "0.29"
						},
						{
							"date": "2011",
							"U.S": "96.4",
							"Comcast": "22.331",
							"DirecTV": "19.2",
							"Dish Network": "13.97",
							"Netflix": "12.27",
							"Amazon Prime": "5",
							"Hulu Plus": "1.5"
						},
						{
							"date": "2012",
							"U.S": "96.7",
							"Comcast": "21.995",
							"DirecTV": "19.89",
							"Dish Network": "14.06",
							"Netflix": "27.15",
							"Amazon Prime": "20",
                            "Hulu Plus": "3"
						},
						{
							"date": "2013",
							"U.S": "96.7",
							"Comcast": "22.577",
							"DirecTV": "20.35",
							"Dish Network": "14.057",
							"Netflix": "33.42",
							"Amazon Prime": "25",
							"Hulu Plus": "4"
						},
						{
							"date": "2014",
							"U.S": "96.3",
							"Comcast": "22.383",
							"DirecTV": "20.35",
							"Dish Network": "13.978",
							"Netflix": "39.11",
							"Amazon Prime": "40",
							"Hulu Plus": "6",
						},
						{
							"date": "2015",
							"U.S": "95.1",
							"Comcast": "22.347",
							"DirecTV": "19.78",
							"Dish Network": "13.897",
							"Netflix": "44.74",
							"Amazon Prime": "54",
							"Hulu Plus": "9",
							"Sling TV": "0.169",
							"HBO Now": "0.8",
							
						},
						{
							"date": "2016",
							"U.S": "93.1",
							"Comcast": "22.508",
							"DirecTV": "21.01",
							"Dish Network": "13.671",
							"Netflix": "49.57",
							"Amazon Prime": "74",
							"Hulu Plus": "12",
							"Sling TV": "1.184",
							"HBO Now": "1",
							"DirecTV Now": "0.2"
						},
						{
							"date": "2017",
							"U.S": "93.319",
							"Comcast": "22.50",
							"DirecTV": "25.3",
							"Dish Network": "13.7",
							"Netflix": "51.29",
							"Amazon Prime": "80",
							"Hulu Plus": "32",
							"Sling TV": "1.3",
							"HBO Now": "2.4",
							"DirecTV Now": " 0.6"
						}
					]
				}
			);