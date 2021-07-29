import React, { useRef, useEffect } from "react";
import { loadModules } from "esri-loader";


function Map(props) {
  const myId = props.myId;
  const MapEl = useRef(null);
  console.log("choose: " + myId);

  // ---point color---
  const color_point = {
    type: "simple",
    symbol: {
      type: "picture-marker",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Circle-icons-water.svg/1024px-Circle-icons-water.svg.png",
      width: "18px",
      height: "18px",
    },
  };

  //---pipe color---
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

        //---webmap---
        const webmap = new WebMap({
          basemap: "streets-navigation-vector",         
        });


        view = new MapView({
          map: webmap,
          center: [100.31, 13.74],
          zoom: 12,
          container: MapEl.current,
        });


        //---label---
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
            title: "จุดประมาณค่าความดันท่อน้ำ",
            renderer: color_point,
            labelingInfo: [trailheadsLabels],
          });
          webmap.add(trailheads);

        } else if (myId === "July2020") {
          const geojsonLayer = new GeoJSONLayer({
            url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202007_lalong.geojson",
            title: "จุดประมาณค่าความดันท่อน้ำ",
            renderer: color_point,
            labelingInfo: [trailheadsLabels],
          });
          webmap.add(geojsonLayer);

        } else if (myId === "August2020") {
          const geojsonLayer = new GeoJSONLayer({
            url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202008_lalong.geojson",
            title: "จุดประมาณค่าความดันท่อน้ำ",
            renderer: color_point,
            labelingInfo: [trailheadsLabels],
          });
          webmap.add(geojsonLayer);
     
        } else if (myId === "September2020") {
          const geojsonLayer = new GeoJSONLayer({
            url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202009_lalong.geojson",
            title: "จุดประมาณค่าความดันท่อน้ำ",
            renderer: color_point,
            labelingInfo: [trailheadsLabels],
          });
          webmap.add(geojsonLayer);

        } else if (myId === "October2020") {
          const geojsonLayer = new GeoJSONLayer({
            url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202010_lalong.geojson",
            title: "จุดประมาณค่าความดันท่อน้ำ",
            renderer: color_point,
            labelingInfo: [trailheadsLabels],
          });
          webmap.add(geojsonLayer);

        } else if (myId === "November2020") {
          const geojsonLayer = new GeoJSONLayer({
            url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202011_lalong.geojson",
            title: "จุดประมาณค่าความดันท่อน้ำ",
            renderer: color_point,
            labelingInfo: [trailheadsLabels],
          });
          webmap.add(geojsonLayer);

        } else if (myId === "December2020") {
          const geojsonLayer = new GeoJSONLayer({
            url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202012_lalong.geojson",
            title: "จุดประมาณค่าความดันท่อน้ำ",
            renderer: color_point,
            labelingInfo: [trailheadsLabels],
          });
          webmap.add(geojsonLayer);
  
        } else if (myId === "January2021") {
          const geojsonLayer = new GeoJSONLayer({
            url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202101_lalong.geojson",
            title: "จุดประมาณค่าความดันท่อน้ำ",
            renderer: color_point,
            labelingInfo: [trailheadsLabels],
          });
          webmap.add(geojsonLayer);

        } else if (myId === "February2021") {
          const geojsonLayer = new GeoJSONLayer({
            url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202102_lalong.geojson",
            title: "จุดประมาณค่าความดันท่อน้ำ",
            renderer: color_point,
            labelingInfo: [trailheadsLabels],
          });
          webmap.add(geojsonLayer);

        } else if (myId === "March2021") {
          const geojsonLayer = new GeoJSONLayer({
            url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202103_lalong.geojson",
            title: "จุดประมาณค่าความดันท่อน้ำ",
            renderer: color_point,
            labelingInfo: [trailheadsLabels],
          });
          webmap.add(geojsonLayer);

        } else if (myId === "April2021") {
          const geojsonLayer = new GeoJSONLayer({
            url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202104_lalong.geojson",
            title: "จุดประมาณค่าความดันท่อน้ำ",
            renderer: color_point,
            labelingInfo: [trailheadsLabels],
          });
          webmap.add(geojsonLayer);

        } else {
        }

        const addpipe = new GeoJSONLayer({
          url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/pipe_line.geojson",
          title: "เส้นท่อ",
          renderer: pipecolor,
          layerInfos: [
            {
              layer: GeoJSONLayer,
              title: "European Capital Cities",
            },
          ],
        });

        webmap.add(addpipe);


        //---serch---
        view.ui.add(
          new Search({
            view: view,
          }),
          "top-right"
        );

        // ---ccWidget---
        var ccWidget = new CoordinateConversion({
          view: view,
        });
        view.ui.add(ccWidget, "bottom-left");

        // ---compass---

        var compassWidget = new Compass({
          view: view,
        });
        view.ui.add(compassWidget, "top-left");

        // ---Add the locate widget to the top left corner of the view---

        var locateBtn = new Locate({
          view: view,
        });

        view.ui.add(locateBtn, {
          position: "top-left",
        });

        // ---legend---
        const layerList = new LayerList({
          view: view,
          listItemCreatedFunction: function (event) {
            const item = event.item;
            if (item.layer.type !== "group") {
              // don't show legend twice
              item.panel = {
                content: "legend",
                open: true,
              };
            }
          },
        });
        view.ui.add(layerList, "bottom-right");

        // ---basemap---
        const basemapGallery = new BasemapGallery({
          view: view,
        });
        const bgExpand = new Expand({
          view: view,
          content: basemapGallery,
        });
        view.ui.add(bgExpand, "top-right");

        // ---download---
        // const fileForm = document.getElementById("mainWindow");
        // const expand = new Expand({
        //   expandIconClass: "esri-icon-upload",
        //   view: view,
        //   content: fileForm,
        // });
        // view.ui.add(expand, "top-right");
        // return (
        //   <div id="mainWindow">
        //     <div>
        //       <div style="padding-left:4px;">
        //         <p>
        //           Download shapefile from
        //           <a href="https://bsvensson.github.io/various-tests/shp/drp_county_boundary.zip">
        //             here.
        //           </a>
        //         </p>
        //       </div>
        //     </div>
        //   </div>
        // );
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
