import React, { useRef, useEffect } from 'react'

function MapName(props) {
    const myId = props.myId;
    console.log("display name of: " + myId);
  
    if (myId === "June2020") {
        return(
      <div className="main">
        <h4>แผนที่การประมาณค่าความดันท่อน้ำ เขตอ้อมน้อย ช่วงเดือนมิถุนายน พ.ศ.2563</h4>
      </div>
    )}

    else if (myId === "July2020") {
        return(
      <div className="main">
        <h4>แผนที่การประมาณค่าความดันท่อน้ำ เขตอ้อมน้อย ช่วงเดือนกรกฏาคม พ.ศ.2563</h4>
      </div>
    )}

    else if (myId === "August2020") {
        return(
      <div className="main">
        <h4>แผนที่การประมาณค่าความดันท่อน้ำ เขตอ้อมน้อย ช่วงเดือนสิงหาคม พ.ศ.2563</h4>
      </div>
    )}

    else if (myId === "September2020") {
        return(
      <div className="main">
        <h4>แผนที่การประมาณค่าความดันท่อน้ำ เขตอ้อมน้อย ช่วงเดือนกันยายน พ.ศ.2563</h4>
      </div>
    )}

    else if (myId === "October2020") {
        return(
      <div className="main">
        <h4>แผนที่การประมาณค่าความดันท่อน้ำ เขตอ้อมน้อย ช่วงเดือนตุลาคม พ.ศ.2563</h4>
      </div>
    )}

    else if (myId === "November2020") {
        return(
      <div className="main">
        <h4>แผนที่การประมาณค่าความดันท่อน้ำ เขตอ้อมน้อย ช่วงเดือนพฤศจิกายน พ.ศ.2563</h4>
      </div>
    )}

    else if (myId === "December2020") {
        return(
      <div className="main">
        <h4>แผนที่การประมาณค่าความดันท่อน้ำ เขตอ้อมน้อย ช่วงเดือนธันวาคม พ.ศ.2563</h4>
      </div>
    )}

    else if (myId === "January2021") {
        return(
      <div className="main64">
        <h4>แผนที่การประมาณค่าความดันท่อน้ำ เขตอ้อมน้อย ช่วงเดือนมกราคม พ.ศ.2564</h4>
      </div>
    )}

    else if (myId === "February2021") {
        return(
      <div className="main64">
        <h4>แผนที่การประมาณค่าความดันท่อน้ำ เขตอ้อมน้อย ช่วงเดือนกุมภาพันธุ์ พ.ศ.2564</h4>
      </div>
    )}

    else if (myId === "March2021") {
        return(
      <div className="main64">
        <h4>แผนที่การประมาณค่าความดันท่อน้ำ เขตอ้อมน้อย ช่วงเดือนมีนาคม พ.ศ.2564</h4>
      </div>
    )}

    else if (myId === "April2021") {
        return(
      <div className="main64">
        <h4>แผนที่การประมาณค่าความดันท่อน้ำ เขตอ้อมน้อย ช่วงเดือนเมษายน พ.ศ.2564</h4>
      </div>
    )}
  
    else {return(
        <div className="main">
          <h4>แผนที่เส้นท่อน้ำ เขตอ้อมน้อย</h4>
        </div>
      )}
  }
          
  export default MapName;
