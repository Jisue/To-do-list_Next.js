import axios from 'axios'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Fail = ({ listDoing, error }) => {

    const handleClick = (e) => {

        if (confirm("상태처리") === false) {
            return;
        }

        let newDate:Date = new Date();
        let time:String = newDate.toJSON().slice(0,10); 
        
        console.log(time);

        for(let i = 0 ; i < listDoing.length;i++){

            if (listDoing[i].list_dday >= time){
                continue;
            }

            const updateRequest = async () => {
                try {
                    const response1 = await axios({
                        method: 'put',
                        url: 'http://localhost:3001/todos/'+listDoing[i].list_index,
                        params: {
                            status : 'Failed'
                        },
                    })
                } catch (err) {
                    // Handle Error Here
                    console.error(err);
                }
            };
            updateRequest();
        }
        location.reload();
    }

    if (error) {
        return <div>An error occured: {error}</div>;
    }
    return (
        <>
        <button className="btn btn-primary" type="button" onClick={handleClick}>날짜 동기화</button>
        </>

    );
};

Fail.getInitialProps = async function () {
    try {
        const res = await axios.get('http://localhost:3001/todos');
        const list = res.data[0];
        const listDoing = [];
        const listFailed = [];

        let newDate:Date = new Date();
        let time:String = newDate.toJSON().slice(0,10); 
        
        console.log(time);

        for (let i = 0; i < list.length; i++) {
            if (list[i].list_on === 1 && list[i].list_status === 'Doing' && list[i].list_dday < time)
                listDoing.push(list[i]);

        }
        console.log(listDoing)
        return { listDoing };
    } catch (error) {
        return { list: {}, error };
    }
};

export default Fail