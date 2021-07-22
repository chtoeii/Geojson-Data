import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import RenderMap from './renderMap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DownloadPage from './DownloadPage';

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

    /* Let mapId = this.nameMap;

    function getMapName(mapid) {
        if(mapid == null){
            Mapname = "ท่อน้ำ"
        }
        else {Mapname = "ชื่อเดือน"}
    } */

   /*  render() {
        return (
            <div id='div1'>
                <div className="Navbar">
                    <Navbar bg="light" variant="light" expand="lg">
                        <Navbar.Brand>
                            <h2>ตัวเลือกการแสดงผล</h2>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                                <NavDropdown title="ปีที่ต้องการแสดงผล" id="collasible-nav-dropdown">
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
                        <Navbar.Brand >
                            <Router>
                                <Route path="Download" component={DownloadPage}/>
                            </Router>
                        </Navbar.Brand>
                    </Navbar>
                </div>
                <p>กำลังแสดงผล : ชื่อmap</p>
                <RenderMap myId={this.state.nameMap} />
            </div>
        )
    }
}

export default NavbarComp; */


render() {
    return (
        <div id="wrapper">
            <div id='div1'>
                <div className="Navbar">
                    <Navbar bg="light" variant="light" expand="lg">
                        <Navbar.Brand>
                            <h2>ตัวเลือกการแสดงผล</h2>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                                <NavDropdown title="ปีที่ต้องการแสดงผล" id="collasible-nav-dropdown">
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
                        <Navbar.Brand >
                            <Router>
                                <Route path="Download" component={DownloadPage}/>
                            </Router>
                        </Navbar.Brand>
                    </Navbar>
                </div>
                <p>กำลังแสดงผล : ชื่อmap</p>
                <RenderMap myId={this.state.nameMap} />
            </div>
            <div id="div2">
                เผื่อไว้ใส่legend
                <img
                            src="https://w7.pngwing.com/pngs/920/752/png-transparent-compass-rose-compass-monochrome-symmetry-compass.png"
                            width="220"
                            height="150"
                            className="d-inline-block align-top"
                            alt=""
                />
                <img
                            src="https://gisgeography.com/wp-content/uploads/2016/05/Map-Example-Legend.png"
                            width="220"
                            height="400"
                            className="d-inline-block align-top"
                            alt=""
                />
            </div>
        </div>
            )
        }
}

export default NavbarComp;