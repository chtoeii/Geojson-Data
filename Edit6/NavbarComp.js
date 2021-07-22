import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const navheader = () => {
    return (
        <Navbar bg="primary" variant="light" expand="lg">
            <img
                            src="https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/test/pwalogocopy2.jpg"
                            width="500"
                            height="100"
                            className="d-inline-block align-top"
                            alt=""
                        />
            <LinkContainer to="/">
                <Navbar.Brand>หน้าหลัก</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/downloadpage">
                        <Nav.Link>ดาวน์โหลดไฟล์</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default navheader