import * as React from "react";
import axios from 'axios';

function PlaceHolder({ placeHolders, error }) {

    if(error){
        return <div>error</div>
    }
   // getInitialProps 에서 할당받는 placeHolders 받아 리스트로 생성해 줍니다.
    const renderPlaceHolders = placeHolders.map(p => <li>{p.list_name}</li>)
    return(
        <div>
            <ul>
                {renderPlaceHolders}
            </ul>
        </div>
    )
}

PlaceHolder.getInitialProps = async ({}) => {
    const res = await axios.get('http://localhost:3001/todos');
    // 서버 사이드에서 비동기 호출 후 컴포넌트에 placeHolders로 결과값을 내려줍니다.
    return { placeHolders: res.data[0] }
}

export default PlaceHolder;
