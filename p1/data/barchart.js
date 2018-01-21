AmCharts.makeChart("chart2div",
				{
					"type": "serial",
					"categoryField": "category",
					"rotate": true,
					"marginBottom": 40,
					"marginLeft": 40,
					"marginRight": 40,
					"marginTop": 40,
					"startDuration": 1,
					"backgroundColor": "#050D2B",
					"theme": "dark",
					"categoryAxis": {
						"gridPosition": "start"
					},
					"trendLines": [],
					"graphs": [
						{
							"animationPlayed": true,
                            "balloonText": "[[title]] of [[category]]: [[value]]",
							"fillAlphas": 1,
							"id": "AmGraph-1",
							"title": "Teen 12-17",
							"type": "column",
							"valueField": "Teen 12-17"
						},
						{
							"animationPlayed": true,
                            "balloonText": "[[title]] of [[category]]: [[value]]",
							"fillAlphas": 1,
							"id": "AmGraph-2",
							"title": "Adults 18-24",
							"type": "column",
							"valueField": "Adults 18-24"
						},
						{
							"animationPlayed": true,
							"balloonText": "[[title]] of [[category]]: [[value]]",
							"bullet": "custom",
							"bulletColor": "undefined",
							"fillAlphas": 1,
							"fillColors": "#F29C9C",
							"id": "AmGraph-3",
							"lineColor": "#ED8E8E",
							"negativeFillColors": "undefined",
							"title": "Adults 25-34",
							"type": "column",
							"valueField": "Adults 25-34"
						},
						{
							"animationPlayed": true,
                            "balloonText": "[[title]] of [[category]]: [[value]]",
							"fillAlphas": 1,
							"fillColors": "#AAE9A4",
							"id": "AmGraph-4",
							"lineColor": "#AAE9A4",
							"title": "Adults 35-49",
							"type": "column",
							"valueField": "Adults 35-49"
						},
						{
							"animationPlayed": true,
                            "balloonText": "[[title]] of [[category]]: [[value]]",
							"fillAlphas": 1,
							"fillColors": "#E7E7E7",
							"id": "AmGraph-5",
							"lineColor": "#E7E7E7",
							"title": "Adults 50-64",
							"type": "column",
							"valueField": "Adults 50-64"
						},
						{
							"animationPlayed": true,
                            "balloonText": "[[title]] of [[category]]: [[value]]",
							"fillAlphas": 1,
							"id": "AmGraph-6",
							"title": "Adults 65+",
							"type": "column",
							"valueField": "Adults 65+"
						}
					],
					"guides": [],
					"valueAxes": [
						{
							"id": "ValueAxis-1",
							"title": "Hours of television watched per week"
						}
					],
					"allLabels": [],
					"balloon": {},
					"legend": {
						"enabled": true,
						"useGraphSettings": true
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
							"category": "2011",
							"Teen 12-17": "24.35",
							"Adults 18-24": "26.78",
							"Adults 25-34": "30.57",
							"Adults 35-49": "36.38",
							"Adults 50-64": "44.9",
							"Adults 65+": "49.28"
						},
						{
							"category": "2012",
							"Teen 12-17": "22.23",
							"Adults 18-24": "24.73",
							"Adults 25-34": "29.77",
							"Adults 35-49": "35.13",
							"Adults 50-64": "43.22",
							"Adults 65+": "47.98"
						},
						{
							"category": "2013",
							"Teen 12-17": "21.37",
							"Adults 18-24": "23.4",
							"Adults 25-34": "28.88",
							"Adults 35-49": "34.4",
							"Adults 50-64": "44.15",
							"Adults 65+": "49.35"
						},
						{
							"category": "2014",
							"Teen 12-17": "21.2",
							"Adults 18-24": "21.2",
							"Adults 25-34": "27.58",
							"Adults 35-49": "34.38",
							"Adults 50-64": "45.3",
							"Adults 65+": "52.05"
						},
						{
							"category": "2015",
							"Teen 12-17": "17.87",
							"Adults 18-24": "18.07",
							"Adults 25-34": "24.6",
							"Adults 35-49": "39.9",
							"Adults 50-64": "43.82",
							"Adults 65+": "51.23"
						},
						{
							"category": "2016",
							"Teen 12-17": "15.48",
							"Adults 18-24": "16.3",
							"Adults 25-34": "23.87",
							"Adults 35-49": "32.12",
							"Adults 50-64": "44.1",
							"Adults 65+": "51.53"
						},
						{
							"category": "2017",
							"Teen 12-17": "13.03",
							"Adults 18-24": "14.52",
							"Adults 25-34": "21.22",
							"Adults 35-49": "30.57",
							"Adults 50-64": "43.48",
							"Adults 65+": "51.7"
						}
					]
				}
			);