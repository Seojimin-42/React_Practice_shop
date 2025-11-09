import { useParams } from "react-router-dom";
import styled from 'styled-components'

import lavender from "../img/lavender.png";
import { useState , useEffect, useContext } from "react";
import { Modal } from "react-bootstrap";
import { Nav } from "react-bootstrap"

import { Context1 } from "./../App.js"

let YellowBtn = styled.button`
    background : ${ props => props.bg };
    color : ${ props => props.bg == 'blue' ? 'white' : 'black'};
    padding : 10px;
`
let Box = styled.div`
    background : grey;
    padding : 20px;
`

function Detail(props){

    let {재고} = useContext(Context1)

    let [count, setCount] = useState(0);
    let [showBox, setShowBox] = useState(true);
    let [input, setInput] = useState('');
    let [tab, setTab] = useState(0);
    let [fade2, setFade2] = useState('');

    let {id} = useParams();
    let 찾은상품 = props.plants.find(function(x){
        return x.id==id
    });

    useEffect(()=>{
        // useEffect에서 2초 뒤 상태 바꾸기
        let a = setTimeout(()=>{ setShowBox(false); }, 2000)
        return ()=>{
            clearTimeout(a)
        }
    })

    useEffect(()=>{
        if(isNaN(input) == true){
            alert('숫자만 입력하세요')
        }
    }, [input])

    useEffect(()=>{
        setFade2('end')
        return () => {
            setFade2('')
        }
    },[])

    return(
        <div className={'container start ' + fade2}>
            
            { showBox == true ? <div className="alert alert-warning">2초이내 구매시 할인</div> : null }

            { count }
            <button onClick={()=>{ setCount(count+1) }}>버튼</button>

            <input onChange={(e)=>{ setInput(e.target.value) } }/>

            <div className="row align-items-center" style={{ minHeight: "30vh" }}>
                <div className="col-md-6">
                    <img src={lavender} width="60%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{찾은상품.title}</h4>
                    <p>{찾은상품.content}</p>
                    <p>{찾은상품.price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>

            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={()=>{ setTab(0) }} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{ setTab(1) }} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{ setTab(2) }} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={ tab }></TabContent>
        </div>
    );
}

function TabContent({tab}){

    let [fade, setFade] = useState('');
    let {재고} = useContext(Context1)

    useEffect(()=>{
        setTimeout(()=>{ setFade('end') }, 100)
        return ()=>{
            setFade('')
        }
    },[tab])

    return (
        <div className={'start ' + fade}>
            { [<div>{재고}</div>, <div>내용1</div>, <div>내용2</div>][tab] }
        </div>
    )
}

export default Detail;