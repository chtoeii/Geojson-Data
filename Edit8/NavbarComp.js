import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
} 
from "react-bootstrap";
import RenderMap from "./renderMap";
import MapName from './getMapName';


class NavbarComp extends Component {
  state = {
    theme: null,
    nameMap: null,
    NavDropdown: false,
  };

  resetTheme = (evt) => {
    evt.preventDefault();
    this.setState({ theme: null });
    this.setState({ nameMap: null });
  };

  changeBtn = (theme, nameMap, evt) => {
    evt.preventDefault();
    this.setState({ theme });
    this.setState({ nameMap });

    console.log(nameMap);
  };

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
            <Navbar.Brand href="#">การประมาณค่าความดันท่อน้ำ จังหวัดสมุทรปราการ</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown
                  title="ดาวน์โหลดข้อมูล Geojson"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown
                    title="ข้อมูล พ.ศ. 2563"
                    id="collasible-nav-dropdown"
                  >
                    <NavDropdown.Item href="https://drive.google.com/uc?export=download&id=14V3Troy7CF_KTdFjqRjz0cJtWOB73mDh">
                      มิถุนายน
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://drive.google.com/uc?export=download&id=1In8YPbnKrLEVv-gBsw6npRgXVlyWI_f8">
                      กรกฎาคม
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://drive.google.com/uc?export=download&id=13WPbU7Qo8OndEKJOnE8b0uVKE6Si1Lz_">
                      สิงหาคม
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://drive.google.com/uc?export=download&id=1cCLxJtutRsh0UbySBfFI08bwCI1dJ6Ic">
                      กันยายน
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://drive.google.com/uc?export=download&id=1XjylSoA3FEgsFK6Uh5jPw-xj4Jx1XhmC">
                      ตุลาคม
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://drive.google.com/uc?export=download&id=1lYnbhQu8h65Hk9TGsNZb5zaIncv5QSWh">
                      พฤศจิกายน
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://drive.google.com/uc?export=download&id=1iUFCGAXzXEZEFXgNA41pXJYrruoRqt1M">
                      ธันวาคม
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="ข้อมูล พ.ศ. 2564"
                    id="collasible-nav-dropdown"
                  >
                    <NavDropdown.Item href="https://drive.google.com/uc?export=download&id=1xhr1QtZ9NdN4c8t7i2rH0jFh4X2wt9tY">
                      มกราคม
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://drive.google.com/uc?export=download&id=1rWHIHXozd623l7CgrbKfFCpxPCnYLS7O">
                      กุมภาพันธุ์
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://drive.google.com/uc?export=download&id=1dph8ngz9vswVoQpTBTdfArRIYRbt7pa7">
                      มีนาคม
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://drive.google.com/uc?export=download&id=1-3MkwdhlYk3AmV5GjQWNxAahFdexUjXy">
                      เมษายน
                    </NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>

                <NavDropdown
                  title="เลือกปีเพื่อแสดงผล"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown title="พ.ศ. 2563" id="collasible-nav-dropdown">
                    <NavDropdown.Item
                      onClick={(e) => this.changeBtn("Primary", "June2020", e)}
                    >
                      มิถุนายน
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      onClick={(e) => this.changeBtn("Success", "July2020", e)}
                    >
                      กรกฎาคม
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      onClick={(e) => this.changeBtn("Danger", "August2020", e)}
                    >
                      สิงหาคม
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      onClick={(e) =>
                        this.changeBtn("Info", "September2020", e)
                      }
                    >
                      กันยายน
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      onClick={(e) => this.changeBtn("Light", "October2020", e)}
                    >
                      ตุลาคม
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      onClick={(e) => this.changeBtn("Dark", "November2020", e)}
                    >
                      พฤศจิกายน
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      onClick={(e) => this.changeBtn("Dark", "December2020", e)}
                    >
                      ธันวาคม
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="พ.ศ. 2564" id="collasible-nav-dropdown">
                    <NavDropdown.Item
                      onClick={(e) => this.changeBtn("Dark", "January2021", e)}
                    >
                      มกราคม
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      onClick={(e) => this.changeBtn("Dark", "February2021", e)}
                    >
                      กุมภาพันธุ์
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      onClick={(e) => this.changeBtn("Dark", "March2021", e)}
                    >
                      มีนาคม
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      onClick={(e) => this.changeBtn("Dark", "April2021", e)}
                    >
                      เมษายน
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown.Item onClick={this.resetTheme}>
                    เส้นท่อ
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

{/* 
          <div className="main">
            <h4 className="header6">การประมาณค่าความดันท่อน้ำ</h4>
          </div> */}


        </div>
        <div className="MapName">
        <MapName myId={this.state.nameMap}/>
        <RenderMap myId={this.state.nameMap} />
        </div>
      </div>
    );
  }
}

export default NavbarComp;
