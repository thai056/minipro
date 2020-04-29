import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BearList from './components/BearList'
import InputForm from './components/InputForm';
//import { useSelector } from '../node_modules/react-redux/lib/hooks/useSelector';
import { useSelector, useDispatch } from 'react-redux';
import { AuthActions } from './redux/store'
import { bindActionCreators } from 'redux';
import LoginForm from './components/LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Form, Nav, Jumbotron, FormControl, Card, Container } from 'react-bootstrap';
axios.defaults.withCredentials = true
export default () => {
  const [water, setWater] = useState({
    FANTA: 0,
    COLA: 0,
    SODA: 0,
    MIRINDA: 0,
    EST: 0,
    PEPSI: 0,
    TEA: 0,
    COFFEE: 0,
    COCOA: 0,

  });
  const [show_Quantity, setShow_Quantity] = useState(false);
  const [show_, setShow_] = useState(false);
  const [about_, setAbout_] = useState(false);
  const [loading, setLoading] = useState(false);
  const auth = useSelector(state => state.Auth)
  const actions = bindActionCreators(AuthActions, useDispatch())
  useEffect(() => {
    actions.getLoginStatus().then(res => setLoading(false))
  }, [])
  if (loading) {
    return 'loading...'
  }
  if (!auth.accessToken && !auth.psuInfo) {
    console.log(auth)
    return (
      <div>
        <LoginForm />
      </div>
    )
  }
  const BUY_WATER = (item) => {
    if (item === "FANTA") {
      setWater({ ...water, FANTA: water.FANTA + 1 });
    }
    if (item === "COLA") {
      setWater({ ...water, COLA: water.COLA + 1 });
    }
    if (item === "SODA") {
      setWater({ ...water, SODA: water.SODA + 1 });
    }
    if (item === "MIRINDA") {
      setWater({ ...water, MIRINDA: water.MIRINDA + 1 });
    }
    if (item === "EST") {
      setWater({ ...water, EST: water.EST + 1 });
    }
    if (item === "PEPSI") {
      setWater({ ...water, PEPSI: water.PEPSI + 1 });
    }
    if (item === "TEA") {
      setWater({ ...water, TEA: water.TEA + 1 });
    }
    if (item === "COFFEE") {
      setWater({ ...water, COFFEE: water.COFFEE + 1 });
    }
    if (item === "COCOA") {
      setWater({ ...water, COCOA: water.COCOA + 1 });
    }
  }
  const About = (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>ประวัติ</h1>
          <img src="" />
          <p>
            Name: สันติภาพ เจียรนันท์
        </p>
          <p>
            ชื่อร้าน: อาไทย Water_Shop
        </p>
          <p>
            สถานที่: 80/1 ถนนวิชิตสงคราม ตำบลกะทู้ อำเภอกะทู้ จังหวัดภูเก็ต 
        </p>
        </Container>
      </Jumbotron>
    </div>
  )
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Water Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link onClick={() => setAbout_(state => !state)}>About</Nav.Link>
            <Nav.Link onClick={() => setShow_Quantity(state => !state)}>Price/Quantity</Nav.Link>
            <Nav.Link onClick={() => setShow_(state => !state)}>Shop</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <div>
        <h2>Thai Water Shop</h2>
        <h3><p>Welcome</p></h3>
        {about_ && About}
        {show_Quantity && (<div style={{ display: 'flex' }}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://sc01.alicdn.com/kf/UTB8TOkMmVPJXKJkSahVq6xyzFXaR/Fanta-Peach.jpg_350x350.jpg" />
            <Card.Body>
              <Card.Title>FANTA</Card.Title>
              <Card.Text>
                Price : {water.FANTA * 15}
                <div>Quantity : {water.FANTA}</div>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://asiavape.co/wp-content/uploads/2014/04/1000x1000.jpg" />
            <Card.Body>
              <Card.Title>COLA</Card.Title>
              <Card.Text>
                Price : {water.COLA * 18}
                <div>Quantity : {water.COLA}</div>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://img.freepik.com/free-vector/soda-can-aluminium-white_1308-32368.jpg?size=626&ext=jpg" />
            <Card.Body>
              <Card.Title>SODA</Card.Title>
              <Card.Text>
                Price : {water.SODA * 12}
                <div>Quantity : {water.SODA}</div>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i2.wp.com/www.opusdandies.com/wp-content/uploads/2018/04/mirinda-orange_-330ml-can.jpg?fit=500%2C500&ssl=1" />
            <Card.Body>
              <Card.Title>MIRINDA</Card.Title>
              <Card.Text>
                Price : {water.MIRINDA * 14}
                <div>Quantity : {water.MIRINDA}</div>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://www.promo.in.th/wp-content/uploads/2017/04/est_product_groupshot-512.jpg" />
            <Card.Body>
              <Card.Title>EST</Card.Title>
              <Card.Text>
                Price : {water.EST * 16}
                <div>Quantity : {water.EST}</div>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i5.walmartimages.com/asr/68600fb3-d857-4a2d-9fe1-b635a82b27c2_1.55420b10672b613f15c1c96ae87bcdd3.jpeg" />
            <Card.Body>
              <Card.Title>PEPSI</Card.Title>
              <Card.Text>
                Price : {water.PEPSI * 17}
                <div>Quantity : {water.PEPSI}</div>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://obs.line-scdn.net/0hfqcsfE-9OV5eChOK785GCXFVNy9taGABZ2h0PnJdZnImPHcKfmkmPSsWN2Z7PGIAZG0iOnkDbmwmb39aMjhzO3kMYCtyMipfNm5_Og/w960" />
            <Card.Body>
              <Card.Title>TEA</Card.Title>
              <Card.Text>
                Price : {water.TEA * 25}
                <div>Quantity : {water.TEA}</div>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://img.kapook.com/u/2016/surauch/Health/coffee2.jpg" />
            <Card.Body>
              <Card.Title>COFFEE</Card.Title>
              <Card.Text>
                Price : {water.COFFEE * 25}
                <div>Quantity : {water.COFFEE}</div>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://fg.lnwfile.com/_/fg/_resize/300/300/zf/w6/xm.jpg" />
            <Card.Body>
              <Card.Title>COCOA</Card.Title>
              <Card.Text>
                Price : {water.COCOA * 25}
                <div>Quantity : {water.COCOA}</div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>)}
        {show_ && <BearList BUY_WATER={BUY_WATER} />}
        <InputForm />
        <Button variant="outline-danger" onClick={() => actions.logout()}>Logout</Button>
      </div>

    </div>
  )
}
