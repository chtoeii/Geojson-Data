import React, { useRef, useEffect } from "react";
import { loadModules } from "esri-loader";
import { render } from "@testing-library/react";
//import './SCSS/_BasemapGallery.scss'

function Map(props) {
  const myId = props.myId;
  const MapEl = useRef(null);
  console.log("choose: " + myId);

  /*const template_point = {
      title: "Attribute",
      content: "ค่าแรงดัน: {RASTERVALU}",
      
   
        
    
  };*/

  const color_point = {
    type: "simple",
    symbol: {
      type: "picture-marker",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Circle-icons-water.svg/1024px-Circle-icons-water.svg.png",
      width: "18px",
      height: "18px",
    },
  };

  const pipecolor = {
    type: "simple",
    symbol: {
      type: "simple-fill",
      color: [0, 0, 0, 0],
      outline: {
        color: [47, 84, 129, 1],
        width: 0.8,
      },
    },
  };

  /*const color_point = {
        type: "simple",
        symbol: {
          type: "simple-marker",
          color: "red",
          size: "8px",
          outline: {
            color: "white"
          }
        },
        visualVariables: [{
          type: "size",
          
        }]
    };*/

  useEffect(() => {
    let view;

    loadModules(
      [
        "esri/views/MapView",
        "esri/WebMap",
        "esri/layers/GeoJSONLayer",
        "esri/layers/MapImageLayer",
        "esri/layers/FeatureLayer",
        "esri/widgets/Search",
        "esri/widgets/LayerList",
        "esri/widgets/CoordinateConversion",
        "esri/widgets/Locate",
        "esri/widgets/ElevationProfile",
        "esri/layers/ImageryLayer",
        "esri/WebScene",
        "esri/views/SceneView",
        "esri/widgets/Legend",
        "esri/widgets/Compass",
        "esri/widgets/BasemapGallery",
        "esri/portal/Portal",
        "esri/Basemap",
        "esri/widgets/Expand",
      ],
      {
        css: true,
      }
    ).then(
      ([
        MapView,
        WebMap,
        GeoJSONLayer,
        MapImageLayer,
        FeatureLayer,
        Search,
        LayerList,
        CoordinateConversion,
        Locate,
        ElevationProfile,
        ImageryLayer,
        WebScene,
        SceneView,
        Legend,
        Compass,
        BasemapGallery,
        Portal,
        Basemap,
        Expand,
      ]) => {
        /*const layer = new ImageryLayer({
          url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/NLCDLandCover2001/ImageServer",
          format: "jpgpng" // server exports in either jpg or png format
        });*/

        const webmap = new WebMap({
          basemap: "streets-navigation-vector",
          //layers:layer
        });
        view = new MapView({
          map: webmap,
          center: [100.31, 13.74],
          zoom: 12,
          container: MapEl.current,
        });

        //font
        const promptFont = {
          symbol: {
            type: "text",
            color: "#FFFFFF",
            font: {
              size: "13px",
              family: "Prompt",
              style: "italic",
              weight: "normal",
            },
          }
        }

        const trailheadsLabels = {
          symbol: {
            type: "text",
            color: "#FFFFFF",
            haloColor: "#5E8D74",
            haloSize: "1.5px",
            font: {
              size: "13px",
              family: "Prompt",
              style: "italic",
              weight: "normal",
            },
          },

          labelPlacement: "above-center",
          labelExpressionInfo: {
            expression: "$feature.RASTERVALU",
          },
          maxScale: 0,
          minScale: 1500,
        };

        // Create the layer and set the renderer

        if (myId === "June2020") {
          const trailheads = new GeoJSONLayer({
            url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202006_lalong.geojson",
            title: "มิถุนายน พ.ศ. 2563",
            renderer: color_point,
            labelingInfo: [trailheadsLabels],
          });
          webmap.add(trailheads);
          // const legend = new Legend({
          //   view: view,
          //   layerInfos: [
          //     {
          //       layer: trailheads,
          //     },
          //   ],
          // });
          // view.ui.add(legend, "bottom-right");
        } else if (myId === "July2020") {
          const geojsonLayer = new GeoJSONLayer({
            url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202007_lalong.geojson",
            //popupTemplate: template_point,
            title: "กรกฎาคม พ.ศ. 2563",
            renderer: color_point,
            labelingInfo: [trailheadsLabels],
          });
          webmap.add(geojsonLayer);
          // const legend = new Legend({
          //   view: view,
          //   layerInfos: [
          //     {
          //       layer: geojsonLayer,
          //     },
          //   ],
          // });
          // view.ui.add(legend, "bottom-right");
        } else if (myId === "August2020") {
          const geojsonLayer = new GeoJSONLayer({
            url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202008_lalong.geojson",
            //popupTemplate: template_point,
            title: "สิงหาคม พ.ศ. 2563",
            //font: promptFont,
            renderer: color_point,
            labelingInfo: [trailheadsLabels],
          });
          webmap.add(geojsonLayer);
          // const legend = new Legend({
          //   view: view,
          //   layerInfos: [
          //     {
          //       layer: geojsonLayer,
          //     },
          //   ],
          // });
          // view.ui.add(legend, "bottom-right");
        } else if (myId === "September2020") {
          const geojsonLayer = new GeoJSONLayer({
            url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202009_lalong.geojson",
            //popupTemplate: template_point,
            title: "กันยายน พ.ศ. 2563",
            renderer: color_point,
            labelingInfo: [trailheadsLabels],
          });
          webmap.add(geojsonLayer);
          // const legend = new Legend({
          //   view: view,
          //   layerInfos: [
          //     {
          //       layer: geojsonLayer,
          //     },
          //   ],
          // });
          // view.ui.add(legend, "bottom-right");
        } else if (myId === "October2020") {
          const geojsonLayer = new GeoJSONLayer({
            url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202010_lalong.geojson",
            //popupTemplate: template_point,
            title: "ตุลาคม พ.ศ. 2563",
            renderer: color_point,
            labelingInfo: [trailheadsLabels],
          });
          webmap.add(geojsonLayer);
          // const legend = new Legend({
          //   view: view,
          //   layerInfos: [
          //     {
          //       layer: geojsonLayer,
          //     },
          //   ],
          // });
          // view.ui.add(legend, "bottom-right");
        } else if (myId === "November2020") {
          const geojsonLayer = new GeoJSONLayer({
            url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202011_lalong.geojson",
            //popupTemplate: template_point,
            title: "พฤศจิกายน พ.ศ. 2563",
            renderer: color_point,
            labelingInfo: [trailheadsLabels],
          });
          webmap.add(geojsonLayer);
          // const legend = new Legend({
          //   view: view,
          //   layerInfos: [
          //     {
          //       layer: geojsonLayer,
          //     },
          //   ],
          // });
          // view.ui.add(legend, "bottom-right");
        } else if (myId === "December2020") {
          const geojsonLayer = new GeoJSONLayer({
            url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202012_lalong.geojson",
            //popupTemplate: template_point,
            title: "ธันวาคม พ.ศ. 2563",
            renderer: color_point,
            labelingInfo: [trailheadsLabels],
          });
          webmap.add(geojsonLayer);
          // const legend = new Legend({
          //   view: view,
          //   layerInfos: [
          //     {
          //       layer: geojsonLayer,
          //     },
          //   ],
          // });
          // view.ui.add(legend, "bottom-right");
        } else if (myId === "January2021") {
          const geojsonLayer = new GeoJSONLayer({
            url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202101_lalong.geojson",
            //popupTemplate: template_point,
            title: "มกราคม พ.ศ. 2564",
            renderer: color_point,
            labelingInfo: [trailheadsLabels],
          });
          webmap.add(geojsonLayer);
          // const legend = new Legend({
          //   view: view,
          //   layerInfos: [
          //     {
          //       layer: geojsonLayer,
          //     },
          //   ],
          // });
          // view.ui.add(legend, "bottom-right");
        } else if (myId === "February2021") {
          const geojsonLayer = new GeoJSONLayer({
            url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202102_lalong.geojson",
            //popupTemplate: template_point,
            title: "กุมภาพันธุ์ พ.ศ. 2564",
            renderer: color_point,
            labelingInfo: [trailheadsLabels],
          });
          webmap.add(geojsonLayer);
          // const legend = new Legend({
          //   view: view,
          //   layerInfos: [
          //     {
          //       layer: geojsonLayer,
          //     },
          //   ],
          // });
          // view.ui.add(legend, "bottom-right");
        } else if (myId === "March2021") {
          const geojsonLayer = new GeoJSONLayer({
            url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202103_lalong.geojson",
            //popupTemplate: template_point,
            title: "มีนาคม พ.ศ. 2564",
            renderer: color_point,
            labelingInfo: [trailheadsLabels],
          });
          webmap.add(geojsonLayer);
          // const legend = new Legend({
          //   view: view,
          //   layerInfos: [
          //     {
          //       layer: geojsonLayer,
          //     },
          //   ],
          // });
          // view.ui.add(legend, "bottom-right");
        } else if (myId === "April2021") {
          const geojsonLayer = new GeoJSONLayer({
            url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202104_lalong.geojson",
            //popupTemplate: template_point,
            title: "เมษายน พ.ศ. 2564",
            renderer: color_point,
            labelingInfo: [trailheadsLabels],
          });
          webmap.add(geojsonLayer);
          // const legend = new Legend({
          //   view: view,
          //   layerInfos: [
          //     {
          //       layer: geojsonLayer,
          //     },
          //   ],
          // });
          // view.ui.add(legend, "bottom-right");
        } else {
        }
        /*const addra =  new MapImageLayer({
          url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer",
          sublayers: { title: "Slope",
              source: {
                  type: "data-layer",
                  dataSource: {
                      type: "raster",
                      workspaceId: "MyDatabaseWorkspaceIDSSR2",
                  dataSourceName: "slope"
                  }
            }
          }
      });*/
        const addpipe = new GeoJSONLayer({
          url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/pipe_line.geojson",
          title: "เส้นท่อ",
          renderer: pipecolor,
          layerInfos: [
            {
              layer: GeoJSONLayer,
              title: "European Capital Cities"
            }
          ]
        });

        // const legend = new Legend({
        //   view: view,
        //   layerInfos: [
        //     {
        //       layer: addpipe,
        //     },
        //   ],
        // });

        // view.ui.add(legend, "bottom-right");

        /*map.layer = new FeatureLayer({
          labelinginfo : labelclass
      })*/

        //layer.labelingInfo = [labelclass]

        /*const layerList = new LayerList({
  
          listItemCreatedFunction: function(event) {
            const item = event.item;
            if (item.layer.type !== "simple") {
              // don't show legend twice
              item.panel = {
                content: "legend",
                open: true
              };
            }
          }
        });
      view.ui.add(layerList, "bottom-right"); */

        webmap.add(addpipe);

        view.ui.add(
          new Search({
            view: view,
          }),
          "top-right"
        );

        var ccWidget = new CoordinateConversion({
          view: view,
        });
        view.ui.add(ccWidget, "bottom-left");

        var compassWidget = new Compass({
          view: view,
        });
        view.ui.add(compassWidget, "top-left");

        // Add the locate widget to the top left corner of the view

        var locateBtn = new Locate({
          view: view,
        });

        view.ui.add(locateBtn, {
          position: "top-left",
        });

        // legend
        const layerList = new LayerList({
          view: view,
          listItemCreatedFunction: function (event) {
            const item = event.item;
            if (item.layer.type != "group"){ // don't show legend twice
              item.panel = {
                content: "legend",
                open: true
              };
            }
          }
        });
        view.ui.add(layerList, "bottom-right");


        // var basemapGallery = new BasemapGallery({
        //   id: "basemap",
        //   view: view,
        //   source: [
        //     Basemap.fromId("topo-vector"),
        //     Basemap.fromId("hybrid"),
        //     Basemap.fromId("streets"),
        //   ], // autocasts to LocalBasemapsSource
        // });

        // // Add the widget to the top-right corner of the view
        // view.ui.add(basemapGallery, {
        //   position: "top-right",
        // });

        const basemapGallery = new BasemapGallery({
          view: view,
        });
        const bgExpand = new Expand({
          view: view,
          content: basemapGallery,
        });
        view.ui.add(bgExpand, "top-right");

        // legend
        
        // const legend = new Legend({
        //   view: view,
        //   labels:{
        //     fontColor: "red"
        //   }
        // });
        // view.ui.add(legend, "bottom-right");

        // // layerlist 
        // const layerList = new LayerList({
        //   view: view
        // });
        // const llExpand = new Expand({
        //   view: view,
        //   content: layerList,
        //   expanded: false
        // });
        // view.ui.add(llExpand, "top-right");

          // download
          const fileForm = document.getElementById("mainWindow");
          const expand = new Expand({
            expandIconClass: "esri-icon-upload",
            view: view,
            content: fileForm,
          });
  
          view.ui.add(expand, "top-right");

          // // legend widget
          // view.when(function () {
          //   // get the first layer in the collection of operational layers in the WebMap
          //   // when the resources in the MapView have loaded.
          //   var featureLayer = webmap.layers.getItemAt(0);
  
          //   var legend = new Legend({
          //     view: view,
          //     layerInfos: [
          //       {
          //         layer:  addpipe,
          //         title: "NY Educational Attainment"
          //       }
          //     ]
          //   });
  
          //   // Add widget to the bottom right corner of the view
          //   view.ui.add(legend, "bottom-right");
          // });
          
          // legend expand
          // const legendExpand = new Expand({
          //   view: view,
          //   content: new Legend({
          //     view: view,
          //     layerInfos: [
          //       {
          //         layer: addpipe,
          //         title: "เส้นท่อ"
          //       }
          //     ]
          //   }),
          //   container: document.createElement("div"),
          //   expandIconClass: "esri-icon-layer-list",
          //   group: "top-right"
          // });
          // view.ui.add([legendExpand,], "top-right");

        //view.ui.add(new Legend({ view: view }), "bottom-left");
        //add elv view

        /*const elevationProfile = new ElevationProfile({
        view: view,
        profiles: [{
          type: "ground",          // autocasts as new ElevationProfileLineGround(),
          color: "red",            // display this profile in red
          title: "World elevation" // with a custom label
        }]
      });
 
        // add the widget to the view
        view.ui.add(elevationProfile, "top-right"); */
      }
    );

    return () => {
      if (!!view) {
        view.destroy();
        view = null;
      }
    };
  });
  return <div style={{ height: 550 }} ref={MapEl}></div>;
  
}

export default Map;
