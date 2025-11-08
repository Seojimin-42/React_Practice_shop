import { useParams } from "react-router-dom";
import styled from 'styled-components'

import lavender from "../img/lavender.png";
import { useState , useEffect } from "react";
import { Modal } from "react-bootstrap";

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

    let [count, setCount] = useState(0)
    let [showBox, setShowBox] = useState(true);
    let [input, setInput] = useState('');

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

    return(
        <div className="container">
            
            { showBox == true ? <div className="alert alert-warning">2초이내 구매시 할인</div> : null }

            { count }
            <button onClick={()=>{ setCount(count+1) }}>버튼</button>

            <input onChange={(e)=>{ setInput(e.target.value) } }/>

            <div className="row align-items-center" style={{ minHeight: "90vh" }}>
                <div className="col-md-6">
                    <img src={lavender} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{찾은상품.title}</h4>
                    <p>{찾은상품.content}</p>
                    <p>{찾은상품.price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    );
}

export default Detail;