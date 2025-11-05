import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Navbar, Container, Nav } from 'react-bootstrap'; // 컴포넌트 import 해야 사용가능
import { useState } from "react";
import bg from './img/bg.png'

import plant1 from './img/lavender.png'
import plant2 from './img/rose.png'
import plant3 from './img/forsythia.png'

import data from './data.js';

import { Routes, Route, Link } from 'react-router-dom'

function App() {

  let [plants] = useState(data)
  let images = [plant1, plant2, plant3] 

  return (
    <div className="App">

       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">홈</Nav.Link>
            <Nav.Link href="/detail">상세페이지</Nav.Link>
          </Nav>
        </Container>
       <Button variant="primary">Primary</Button>
      </Navbar>

      <Routes>
        <Route path="/" element={<div>
          <div className="main-bg" style={{ backgroundImage : 'url('+ bg +')'}}></div>
            <div className="container">
              <div className="row">
                {
                  plants.map((a, i)=>{
                    return (
                      <Card plants={a} img={images[i]}></Card>
                    )
                  })
                }
              </div>
            </div>
          </div>
        }/>
        <Route path="/detail" element={
          <div className="container">
            <div className="row">
                {
                  plants.map((a, i)=>{
                    return (
                    <div className="col-md-6 d-flex flex-column align-items-center mt-4">
                      <Card plants={a} img={images[i]} width="100%"></Card>
                      <button className="btn btn-danger">주문하기</button>
                    </div>
                    );
                  })
                }
              </div>
          </div> 
        } />
      </Routes>

     
    </div>
  );
}

function Card(props){
  return(
    <div className="col-md-4">
      <img src={props.img} width="80%"></img>
      <h4>{props.plants.title}</h4>
      <p>{props.plants.price}</p>
    </div>
  )
}

export default App;
