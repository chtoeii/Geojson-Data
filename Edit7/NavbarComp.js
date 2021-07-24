import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import RenderMap from './renderMap'
//import downLoad from './downLoad'

class NavbarComp extends Component {

    state = {
        theme: null,
        nameMap: null,
        NavDropdown: false
    }

    resetTheme = evt => {
        evt.preventDefault();
        this.setState({ theme: null });
        this.setState({ nameMap: null });
    }

    changeBtn = (theme, nameMap, evt) => {
        evt.preventDefault();
        this.setState({ theme });
        this.setState({ nameMap });

        console.log(nameMap);
    }

    render() {
        return (
            <div>
                <div className="Navbar">
                    <Navbar bg="primary" variant="light" expand="lg">
                        <img
                            src="https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/test/pwalogocopy2.jpg"
                            width="180"
                            height="50"
                            className="d-inline-block align-top"
                            alt=""
                        />
                        <Navbar.Brand href="#">การประมาณค่าความดันท่อน้ำ</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                                <NavDropdown title="ดาวน์โหลดข้อมูล Geojson" id="basic-nav-dropdown">
                                    
                                    <NavDropdown title="ข้อมูล พ.ศ. 2563" id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="https://github.com/chtoeii/Geojson-Data/blob/main/202006_lalong.geojson">มิถุนายน</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="https://github.com/chtoeii/Geojson-Data/blob/main/202007_lalong.geojson">กรกฎาคม</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="https://github.com/chtoeii/Geojson-Data/blob/main/202008_lalong.geojson">สิงหาคม</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="https://github.com/chtoeii/Geojson-Data/blob/main/202009_lalong.geojson">กันยายน</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="https://github.com/chtoeii/Geojson-Data/blob/main/202010_lalong.geojson">ตุลาคม</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="https://github.com/chtoeii/Geojson-Data/blob/main/202011_lalong.geojson">พฤศจิกายน</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="https://github.com/chtoeii/Geojson-Data/blob/main/202012_lalong.geojson">ธันวาคม</NavDropdown.Item>
                            
                                    </NavDropdown>


                                    <NavDropdown title="ข้อมูล พ.ศ. 2564" id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="https://github.com/chtoeii/Geojson-Data/blob/main/202101_lalong.geojson">มกราคม</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="https://github.com/chtoeii/Geojson-Data/blob/main/202102_lalong.geojson">กุมภาพันธุ์</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="https://github.com/chtoeii/Geojson-Data/blob/main/202103_lalong.geojson">มีนาคม</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="https://github.com/chtoeii/Geojson-Data/blob/main/202104_lalong.geojson">เมษายน</NavDropdown.Item>
                                    
                                    </NavDropdown>



                                
                                </NavDropdown>

                                <NavDropdown title="เลือกปีเพื่อแสดงผล" id="collasible-nav-dropdown">
                                    <NavDropdown title="พ.ศ. 2563" id="collasible-nav-dropdown">
                                        <NavDropdown.Item onClick={e => this.changeBtn('Primary', 'June2020', e)}>มิถุนายน</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={e => this.changeBtn('Success', 'July2020', e)}>กรกฎาคม</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={e => this.changeBtn('Danger', 'August2020', e)}>สิงหาคม</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={e => this.changeBtn('Info', 'September2020', e)}>กันยายน</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={e => this.changeBtn('Light', 'October2020', e)}>ตุลาคม</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={e => this.changeBtn('Dark', 'November2020', e)}>พฤศจิกายน</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={e => this.changeBtn('Dark', 'December2020', e)}>ธันวาคม</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="พ.ศ. 2564" id="collasible-nav-dropdown">
                                        <NavDropdown.Item onClick={e => this.changeBtn('Dark', 'January2021', e)}>มกราคม</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={e => this.changeBtn('Dark', 'February2021', e)}>กุมภาพันธุ์</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={e => this.changeBtn('Dark', 'March2021', e)}>มีนาคม</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={e => this.changeBtn('Dark', 'April2021', e)}>เมษายน</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown.Item onClick={this.resetTheme}>เส้นท่อ</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <h6 class='App-header2'>การประมาณค่าความดันท่อน้ำ</h6>

                </div>
                <RenderMap myId={this.state.nameMap} />
            </div>
        )
    }
}

export default NavbarComp;
