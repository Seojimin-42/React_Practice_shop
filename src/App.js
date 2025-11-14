import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Navbar, Container, Nav } from 'react-bootstrap'; // 컴포넌트 import 해야 사용가능
import { createContext, useState } from "react";
import bg from './img/bg.png'

import plant1 from './img/lavender.png'
import plant2 from './img/rose.png'
import plant3 from './img/forsythia.png'

import data from './data.js';

import { Routes, Route, Link, useNavigate, Outlet,  } from 'react-router-dom'
import Detail from './routes/Detail.js'
import axios from 'axios';
import Cart from './routes/Cart.js'

export let Context1 = createContext()

function App() {

  // useEffect(()=>{
  //   localStorage.setItem('watched', JSON.stringify([plants.id]))
  // },[]) 

  let [plants, setPlants] = useState(data)
  let images = [plant1, plant2, plant3]
  let navigate = useNavigate();
  let [clickCount, setClickCount] = useState(0);
  let [loading, setLoading] = useState(false);

  let [재고] = useState([10, 11, 12])

  return (
    <div className="App">

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>홈</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail/0') }}>상세페이지</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/cart') }}>장바구니</Nav.Link>
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

            { loading ? <p>로딩중입니다...</p> : null }

            <button onClick={()=>{
              setLoading(true); // 로딩시작
              if (clickCount == 0) {
                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((결과)=>{ 
                  let copy = [...plants, ...결과.data];
                  setPlants(copy);
                  setClickCount(1);
                  setLoading(false); // 로딩 끝
                })
                .catch(()=>{
                  console.log('실패');
                  setLoading(false); // 로딩 끝
                })
              }
              else if (clickCount == 1) {
                axios.get('https://codingapple1.github.io/shop/data3.json')
                .then((결과)=>{ 
                  let copy = [...plants, ...결과.data];
                  setPlants(copy);
                  setClickCount(2);
                  setLoading(false); // 로딩 끝
                })
                .catch(()=>{
                  console.log('실패');
                  setLoading(false); // 로딩 끝
                })
              }
              else{
                alert('더 이상 상품이 없습니다!');
                setLoading(false); // 로딩 끝
              }
              }}>더보기</button>
          </div>
        }/>
        
        <Route path="/detail/:id" element={
          <Context1.Provider value={{ 재고 }}>
            <Detail plants={plants}/>
          </Context1.Provider>
        } />

        <Route path="*" element={<div>해당 페이지는 없어요. 404페이지입니다.</div>} />
        
        <Route path="/event" element={<Event/>}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>

        <Route path="/cart" element={ <Cart/> }>

        </Route>
        
        </Routes>
    </div>
  );
}

function Card(props){
  return(
    <div className="col-md-4">
      <img src={props.img} width="80%" alt="식물 이미지"></img>
      <h4>{props.plants.title}</h4>
      <p>{props.plants.price}</p>
    </div>
  )
}

function Event(){
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
