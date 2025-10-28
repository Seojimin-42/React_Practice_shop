import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Navbar, Container, Nav } from 'react-bootstrap'; // 컴포넌트 import 해야 사용가능
import { useState } from "react";
import bg from './img/bg.png'
import plant from './img/plant.png'
import data from './data.js';

function App() {

  let [plants] = useState(data)

  return (
    <div className="App">
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
       <Button variant="primary">Primary</Button>
      </Navbar>

      <div className="main-bg" style={{ backgroundImage : 'url('+ bg +')'}}></div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src={plant} width="80%"></img>
              <h4>{plants[0].title}</h4>
              <p>{plants[0].price}</p>
            </div>
            <div className="col-md-4">
              <img src={plant} width="80%"></img>
              <h4>{plants[1].title}</h4>
              <p>{plants[1].price}</p>
            </div>
            <div className="col-md-4">
              <img src={plant} width="80%"></img>
              <h4>{plants[2].title}</h4>
              <p>{plants[2].price}</p>
            </div>
          </div>
        </div> 
    </div>
  );
}

export default App;
