import './App.css';
import React from 'react'
import DownloadLink from "react-download-link";

function DownloadBar() {
    return (
        <div id="wrapper">
            <div id="div3">
                <h2>ข้อมูลปี พ.ศ. 2563</h2>
                <br></br>
                <p>เดือนมิถุนายน</p>
                <button class='button' >
                    <a href="https://github.com/chtoeii/Geojson-Data/blob/main/202006_lalong.geojson" target="_blank">ไปยังหน้าดาวน์โหลด</a>
                </button>
                <br></br>
                <br></br>
                <p>เดือนกรกฎาคม</p>
                <button class='button' >
                    <a href="https://github.com/chtoeii/Geojson-Data/blob/main/202007_lalong.geojson" target="_blank">ไปยังหน้าดาวน์โหลด</a>
                </button>
                <br></br>
                <br></br>
                <p>เดือนสิงหาคม</p>
                <button class='button' >
                    <a href="https://github.com/chtoeii/Geojson-Data/blob/main/202008_lalong.geojson" target="_blank">ไปยังหน้าดาวน์โหลด</a>
                </button>
                <br></br>
                <br></br>
                <p>เดือนกันยายน</p>
                <button class='button' >
                    <a href="https://github.com/chtoeii/Geojson-Data/blob/main/202009_lalong.geojson" target="_blank">ไปยังหน้าดาวน์โหลด</a>
                </button>
                <br></br>
                <br></br>
                <p>เดือนตุลาคม</p>
                <button class='button' >
                    <a href="https://github.com/chtoeii/Geojson-Data/blob/main/202010_lalong.geojson" target="_blank">ไปยังหน้าดาวน์โหลด</a>
                </button>
                <br></br>
                <br></br>
                <p>เดือนพฤษจิกายน</p>
                <button class='button' >
                    <a href="https://github.com/chtoeii/Geojson-Data/blob/main/202011_lalong.geojson" target="_blank">ไปยังหน้าดาวน์โหลด</a>
                </button>
                <br></br>
                <br></br>
                <p>เดือนธันวาคม</p>
                <button class='button' >
                    <a href="https://github.com/chtoeii/Geojson-Data/blob/main/202012_lalong.geojson" target="_blank">ไปยังหน้าดาวน์โหลด</a>
                </button>
                <br></br>
                <br></br>
            </div>
            <div id="div4">
                <h2>ข้อมูลปี พ.ศ. 2564</h2>
                <br></br>
                <p>เดือนมกราคม</p>
                <button class='button' >
                <a href="https://github.com/chtoeii/Geojson-Data/blob/main/202101_lalong.geojson" target="_blank">ไปยังหน้าดาวน์โหลด</a>
                </button>
                <br></br>
                <br></br>
                <p>เดือนกุมภาพันธ์</p>
                <button class='button' >
                <a href="https://github.com/chtoeii/Geojson-Data/blob/main/202102_lalong.geojson" target="_blank">ไปยังหน้าดาวน์โหลด</a>
                </button>
                <br></br>
                <br></br>
                <p>เดือนมีนาคม</p>
                <button class='button' >
                <a href="https://github.com/chtoeii/Geojson-Data/blob/main/202103_lalong.geojson" target="_blank">ไปยังหน้าดาวน์โหลด</a>
                </button>
                <br></br>
                <br></br>
                <p>เดือนเมษายน</p>
                <button class='button' >
                <a href="https://github.com/chtoeii/Geojson-Data/blob/main/202104_lalong.geojson" target="_blank">ไปยังหน้าดาวน์โหลด</a>
                </button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h2>ข้อมูลเส้นท่อ</h2>
                <button class='button' >
                <a href="https://github.com/chtoeii/Geojson-Data/blob/main/pipe_line.geojson" target="_blank">ไปยังหน้าดาวน์โหลด</a>
                </button>
                <br></br>
                <br></br>
            </div>
        </div>
    );
  }
  
  export default DownloadBar;