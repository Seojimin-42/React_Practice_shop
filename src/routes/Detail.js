import { useParams } from "react-router-dom";
import styled from 'styled-components'

import lavender from "../img/lavender.png";

let YellowBtn = styled.button`
    background : ${ props => props.bg };
    color : black;
    padding : 10px;
`
let Box = styled.div`
    background : grey;
    padding : 20px;
`


function Detail(props){

    let {id} = useParams();
    let 찾은상품 = props.plants.find(function(x){
        return x.id==id
    });

    return(
        <div className="container">
            <Box>
                <YellowBtn>버튼</YellowBtn>
            </Box>
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